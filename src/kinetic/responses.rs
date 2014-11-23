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

//! Kinetic responses for available commands

use core::{Response, KineticResult};
use error::KineticError;
use proto::{Message, Command};
use std::vec;

/// The command doesn't return anything of interest
#[stable]
impl Response for () {

    fn from_proto(_: Message, cmd: Command, _: vec::Vec<u8>) -> KineticResult<()> {
        let status = cmd.get_status();

        if status.get_code() == ::proto::Command_Status_StatusCode::SUCCESS {
            Ok(())
        } else {
            Err(KineticError::RemoteError(status.get_code(), String::from_str(status.get_statusMessage())))
        }
    }

}

/// A get command returns the value stored associated with the key requested
#[experimental]
#[deriving(Show)]
pub struct GetResponse {
    pub value: Option<vec::Vec<u8>>
}

#[experimental]
impl Response for GetResponse {

    fn from_proto(_: Message, cmd: Command, value: vec::Vec<u8>) -> KineticResult<GetResponse> {
        let status = cmd.get_status();

        if status.get_code() == ::proto::Command_Status_StatusCode::SUCCESS {
            Ok(GetResponse { value: Some(value) })
        } else {
            Err(KineticError::RemoteError(status.get_code(), String::from_str(status.get_statusMessage())))
        }
    }

}
