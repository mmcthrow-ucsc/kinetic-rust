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

use std::net::ToSocketAddrs;
//use std::sync::Future;
use core::{Command, Response};
use result::KineticResult;
use channel::Result;
use authentication::Credentials::Pin;
use commands::pin::PinCommand;
use std::sync::mpsc::{Receiver};
use std::marker::PhantomData;

static DEFAULT_MAX_PENDING: usize = 10;

/// The Kinetic device client
///
/// The Kinetic device client represents the main point of access for this library
///
/// # Example
/// ```no_run
/// use kinetic::Client;
/// use kinetic::commands::Put;
/// use std::default::Default;
///
/// let c = Client::new("127.0.0.1:8123").unwrap();
/// c.send(Put { key: "hello".as_bytes().to_vec(),
///              value: "world".as_bytes().to_vec(),
///              ..Default::default() }).unwrap();
/// ```
///
pub struct Client<Ch: ::channel::KineticChannel<T>,T> {
    channel: Ch,
    cluster_version: i64,
    default_credentials: ::authentication::Credentials,
    async_return_type: PhantomData<T>,
}

impl Client<::channel::AsyncChannel, Receiver<Result>> {
    /// Creates a new `Client` backed by an `AsyncChannel`
    ///
    /// Creates a new `Client` backed by an `AsyncChannel` by default and connects to it.
    ///
    /// # Arguments
    /// * `addr` - The address for the kinetic device.
    ///
    /// # Returns
    /// Returns a `KineticResult` that will hold the `Client` if the connection was established succesfully.
    #[inline]
    pub fn new<A: ToSocketAddrs>(addr: A) -> KineticResult<Client<::channel::AsyncChannel, Receiver<Result>>> {
        let c = try!(::channel::AsyncChannel::new(addr, DEFAULT_MAX_PENDING));

        Ok( Client { channel: c,
                     cluster_version: 0,
                     default_credentials: ::std::default::Default::default(),
                     async_return_type: PhantomData})
    }
}

impl<Ch: ::channel::KineticChannel<T>, T> Client<Ch,T> {

    /// Creates a new `Client` with an specific `KineticChannel`
    #[inline]
    pub fn new_with_channel<A: ToSocketAddrs>(channel: Ch) -> KineticResult<Client<Ch, T>> {
        Ok( Client { channel: channel,
                     cluster_version: 0,
                     default_credentials: ::std::default::Default::default(),
                     async_return_type: PhantomData})
    }

    #[inline]
    pub fn set_cluster_version(&mut self, value: i64) {
        self.cluster_version = value;
    }

    /// Gets the device `Configuration` received during _handshake_
    #[inline]
    pub fn get_config<'r>(&'r self) -> &'r ::proto::command::log::Configuration {
        self.channel.get_configuration()
    }

    /// Gets the device `Limits` received during _handshake_
    #[inline]
    pub fn get_limits<'r>(&'r self) -> &'r ::proto::command::log::Limits {
        self.channel.get_limits()
    }

    #[inline]
    fn send_raw<R : Response, C: Command<R>> (&self, auth: ::authentication::Credentials, cmd: C) -> T {
        // build specific command
        let (mut cmd, value) = cmd.build_proto();

        // set extra client specific fields on the header
        {
            let mut h = cmd.mut_header();
            h.set_clusterVersion(self.cluster_version);
        }

        // Send to device
        self.channel.send((auth, cmd, value)) //return
    }

    #[inline]
    fn receive_raw<R : Response> (token: T) -> KineticResult<R> {
        // Receive response
        let (msg, cmd, value) = Ch::receive(token);

        let r:KineticResult<R> = Response::from_proto(msg, cmd, value);

        r // return
    }

    /// Sends a `Command` to the target device an waits for the `Response`
    ///
    /// # Arguments
    /// * `cmd` - The `PinCommand` to be sent.
    #[inline]
    pub fn send<C: Command<R>, R : Response> (&self, cmd: C) -> KineticResult<R> {
        let token = self.send_raw(self.default_credentials.clone(), cmd);
        Self::receive_raw(token) // return
    }

    /// Sends a `PinCommand` to the target device an waits for the `Response`
    ///
    /// # Arguments
    /// * `cmd` - The `PinCommand` to be sent.
    /// * `pin` - The pin to be used.
    #[inline]
    pub fn send_with_pin<C: PinCommand<R>, R : Response> (&self, cmd: C, pin: ::std::vec::Vec<u8>) -> KineticResult<R> {
        let auth = Pin { pin: pin };
        let token = self.send_raw(auth, cmd);
        Self::receive_raw(token) // return
    }
}

pub type AsyncClient = Client<::channel::AsyncChannel, Receiver<Result>>;

/// `Client` backed by an `AsyncChannel`
impl Client<::channel::AsyncChannel, Receiver<Result>> {

    #[inline]
    pub fn new_with_credentials<A: ToSocketAddrs>(addr: A, credentials: ::authentication::Credentials)
            -> KineticResult<Client<::channel::AsyncChannel, Receiver<Result>>> {

        let c = try!(::channel::AsyncChannel::new(addr, DEFAULT_MAX_PENDING));

        Ok( Client { channel: c,
                     cluster_version: 0,
                     default_credentials: credentials,
                     async_return_type: PhantomData })
    }
}
