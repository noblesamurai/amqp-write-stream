# Amqp-write-stream [![Build Status](https://secure.travis-ci.org/noblesamurai/amqp-write-stream.png?branch=master)](http://travis-ci.org/noblesamurai/amqp-write-stream) [![NPM version](https://badge-me.herokuapp.com/api/npm/amqp-write-stream.png)](http://badges.enytc.com/for/npm/amqp-write-stream)

> Publish to AMQP using a writable stream.

## Purpose

Provides a writable node.js stream that publishes to AMQP.

## Usage

```js
const conn = require('amqplib').connect(process.env.AMQP_URL);
const channel = conn.createChannel();;
const ws = require('..')(channel, 'exchange', 'routingKey', { stream: { objectMode: true } });
const payload = { hi: 'there' };
ws.write(payload);
// payload should have been published to given exchange and routing key.
```

## API

<a name="module_amqp-write-stream"></a>

## amqp-write-stream
- opts.amqp - Options passed to amqplib's publish() method.
- opts.stream - Options passed to the Writable stream.


| Param | Type | Description |
| --- | --- | --- |
| channel | <code>Channel</code> | The amqplib channel to publish on. |
| exchange | <code>string</code> | The exchange to publish on. |
| routingKey | <code>string</code> | The routing key to publish on. |
| opts | <code>object</code> |  |

Note: To regenerate this section from the jsdoc run `npm run docs` and paste
the output above.

## Installation

This module is installed via npm:

``` bash
$ npm install amqp-write-stream
```
## License

The BSD License

Copyright (c) 2018, Tim Allen

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the Tim Allen nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

