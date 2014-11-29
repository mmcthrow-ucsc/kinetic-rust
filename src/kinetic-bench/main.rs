// Copyright (c) 2014 Seagate Technology

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// author: Ignacio Corderi

#![license = "MIT"]
#![crate_name = "kinetic-bench"]

// Skip entire crate
#![cfg(not(test))]

extern crate serialize;
extern crate docopt;
extern crate kinetic;

use docopt::Docopt;
use std::time::duration::Duration;
use std::vec;
use std::default::Default;
use kinetic::commands::{Put, Get};

// Write the Docopt usage string.
static USAGE: &'static str = "
Kinetic from Rust!

Usage: kinetic-bench write <target> [<count>]
       kinetic-bench config <target>
       kinetic-bench [options]

Options:
  -h, --help       Show this message.
  --version        Show the version of kinetic-rust.
";

#[deriving(Decodable, Show)]
struct Args {
   cmd_write: Option<WriteArgs>,
   cmd_read: Option<TargetArgs>,
   cmd_config: Option<TargetArgs>,
   flag_help: bool,
   flag_version: bool,
}

#[deriving(Decodable, Show)]
struct WriteArgs{
    arg_target: String,
    arg_count: Option<int>
}

#[deriving(Decodable, Show)]
struct TargetArgs{
    arg_target: String
}

#[stable]
fn version() -> String {
    format!("kinetic-rust {}\nkinetic-protocol {}", kinetic::version(), kinetic::protocol_version())
}

#[cfg(not(test))]
fn main() {

    let args: Args = Docopt::new(USAGE)
                            .and_then(|d| d.decode())
                            .unwrap_or_else(|e| e.exit());

    if args.flag_help {
        println!("{}", USAGE);
        return;
    }

    if args.flag_version {
        println!("{}", version());
        return;
    }

    if args.cmd_config.is_some() {
        let c = kinetic::Client::new(format!("{}:8123", args.cmd_config.unwrap().arg_target).as_slice()).unwrap();
        println!("{}", c.get_config());
        return;
    }

    if args.cmd_write.is_none() {
        println!("{}", USAGE);
        return;
    }

    let cmd = args.cmd_write.unwrap();
    let target = cmd.arg_target;

    println!("Connecting to {}", target);

    let c = kinetic::Client::new(format!("{}:8123", target).as_slice()).unwrap();

    c.send(Put { key: "rust".as_bytes().to_vec(),
                 value: format!("Hello from {}!", kinetic::version()).as_bytes().to_vec(),
                 ..Default::default() }).unwrap();
    let v = c.send(Get { key: "rust".as_bytes().to_vec() }).unwrap();

    println!("Read back: {}", String::from_utf8(v.value).unwrap())

    let items = cmd.arg_count.unwrap_or(10i);
    // benchmark
    let d = Duration::span(|| {
        let mut responses = vec::Vec::with_capacity(items as uint);

        for i in range(0i, items) {
            let data = vec::Vec::from_elem(1024*1024, 0u8);
            let r = c.send_future(Put { key: format!("opt-bench.{}", i).as_bytes().to_vec(),
                                        value: data,
                                        ..Default::default()});
            responses.push(r);
        }

        // wait on all
        for r in responses.into_iter() {
            r.into_inner().unwrap();
        }
    });
    let bw = items as f64 / (d.num_milliseconds() as f64 / 1000.0);
    println!("Benchmark took {}ms ({} MB/s)", d.num_milliseconds(), bw);
}
