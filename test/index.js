const expect = require('chai').expect;
require('chai').use(require('sinon-chai'));
const sinon = require('sinon');
const { Writable } = require('stream');

describe('amqp-write-stream', function () {
  it('should provide you with a write stream', function () {
    const channel = { publish: async () => {} };
    const ws = require('..')(channel, 'exchange', 'routingKey');
    expect(ws).to.be.an.instanceof(Writable);
  });

  it('should publish the payloads to AMQP', function () {
    const publish = sinon.stub().resolves();
    const channel = { publish };
    const ws = require('..')(channel, 'exchange', 'routingKey', { stream: { objectMode: true } });
    const payload = { hi: 'there' };
    ws.write(payload);
    expect(publish).to.have.been.calledWith('exchange', 'routingKey', payload);
  });
});
