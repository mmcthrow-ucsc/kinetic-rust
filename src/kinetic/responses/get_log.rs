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

use core::Response;
use result::KineticResult;
use error::KineticError;
use proto::{Message, Command};
use std::vec;

/// A `GetLog` command result
///
/// A `GetLog` command returns the corresponding log entries requested
pub type GetLogResponse = ::proto::command::GetLog;

impl Response for GetLogResponse {

    fn from_proto(_: Message, mut cmd: Command, _: vec::Vec<u8>) -> KineticResult<::proto::command::GetLog> {
        let status = cmd.take_status();

        if status.get_code() == ::proto::StatusCode::SUCCESS {
            Ok(cmd.take_body().take_getLog())
        } else {
            Err(KineticError::RemoteError(status))
        }
    }

}

