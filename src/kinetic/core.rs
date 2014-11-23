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

/// Trait representing a Kinetic command
#[unstable]
pub trait Command<'v,'r, R: Response<'r>> {

    fn build_proto(&self) -> (::proto::Command, Option<&'v[u8]>);

}

/// Trait representing a Kinetic response
#[unstable]
pub trait Response<'r> {

     fn from_proto<'m,'c,'v:'r>(&'m::proto::Message, &'c::proto::Command, &'v[u8]) -> ::result::KineticResult<Self>;

}

#[experimental]
pub type KineticResponse = (::proto::Message, ::proto::Command, ::std::vec::Vec<u8>);
