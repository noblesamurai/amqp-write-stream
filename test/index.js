const expect = require('chai').expect;
const { Writable } = require('stream');

describe('amqp-write-stream', function () {
  it('should provide you with a write stream', function () {
    const channel = { publish: async () => {} };
    const ws = require('..')(channel, 'exchange', 'routingKey');
    expect(ws).to.be.an.instanceof(Writable);
  });
});
