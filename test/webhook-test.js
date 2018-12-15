const app = require('../index');
const dotenv = require('dotenv');
const request = require('supertest');
const webhookMasterPayload = require('./fixtures/webhook-master.json');
const webhookNonMasterPayload = require('./fixtures/webhook-non-master.json');

/**
 * Original GitHub header for webhook-master payload.
 */
const webhookMasterHeader = {
  'X-Github-Event': 'push',
  'X-Github-Delivery': '9f013b80-1465-11e7-9f6f-a13bd9b64685',
  'X-Hub-Signature': 'sha1=da0cb48d79e8e9208f90a857c68824818de748ad',
  'content-type': 'application/json'
};

/**
 * Original GitHub header for webhook-non-master payload.
 */
const webhookNonMasterHeader = {
  'X-Github-Event': 'push',
  'X-Github-Delivery': '890c4300-12cc-11e7-8da0-13c404c2570d',
  'X-Hub-Signature': 'sha1=7808791e89e46a72fcd29e27a94cf524c821bf0b',
  'content-type': 'application/json'
};

dotenv.config();

describe('POST /api/webhook', function() {

  describe('when payload is referencing master', function() {

    it('responds with 201 for a valid signature', function(done) {
      request(app)
        .post('/api/webhook')
        .set(webhookMasterHeader)
        .send(webhookMasterPayload)
        .expect(201, done);
    });

    it('responds with 400 for an invalid signature', function (done) {
      webhookMasterPayload['X-Hub-Signature'] = 'RandomAsF';

      request(app)
        .post('/api/webhook')
        .set(webhookMasterHeader)
        .send(webhookMasterPayload)
        .expect(400, done);
    });

  });

  describe('when payload is referencing master', function() {

    it('responds with 200', function(done) {
      request(app)
        .post('/api/webhook')
        .set(webhookNonMasterHeader)
        .send(webhookNonMasterPayload)
        .expect(200, done);
    });

  });

});
