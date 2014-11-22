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

#![experimental]

//! Available Kinetic commands

use core::Command;

/// Requests the value stored with the given key
#[experimental]
pub struct Get<'k> {
    pub key: &'k[u8]
}

#[experimental]
impl<'k, 'c, 'r> Command<'c,'r, ::responses::GetResponse<'r>> for Get<'k> {

    fn build_proto(&self) -> (::proto::Command, Option<&'c[u8]>) {
        let mut cmd = ::proto::Command::new();
        let mut header = ::proto::Command_Header::new();

        // Set command type
        header.set_messageType(::proto::Command_MessageType::GET);

        cmd.set_header(header);

        // Build the actual command
        let mut kv = ::proto::Command_KeyValue::new();
        kv.set_key(self.key.to_vec());

        let mut body = ::proto::Command_Body::new();
        body.set_keyValue(kv);
        cmd.set_body(body);

        (cmd, None) // return command
    }

}

/// Stores the value asociated with the key
#[experimental]
pub struct Put<'k,'v> {
    pub key: &'k[u8],
    pub value: &'v[u8]
}

#[experimental]
impl<'k,'v,'r> Command<'v,'r, ()> for Put<'k,'v> {

    fn build_proto(&self) -> (::proto::Command, Option<&'v [u8]>) {
        let mut cmd = ::proto::Command::new();
        let mut header = ::proto::Command_Header::new();

        // Set command type
        header.set_messageType(::proto::Command_MessageType::PUT);

        cmd.set_header(header);

        // Build the actual command
        let mut kv = ::proto::Command_KeyValue::new();
        kv.set_key(self.key.to_vec());
        kv.set_synchronization(::proto::Command_Synchronization::WRITEBACK);
        kv.set_force(true);
        kv.set_tag(vec![1,2,3,4]);
        kv.set_algorithm(::proto::Command_Algorithm::SHA1);

        let mut body = ::proto::Command_Body::new();
        body.set_keyValue(kv);
        cmd.set_body(body);

        (cmd, Some(self.value)) // return command
    }

}
