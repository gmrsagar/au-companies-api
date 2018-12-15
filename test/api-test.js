const app = require('../index');
const request = require('supertest');

describe('GET /api', function() {

  it('responds with API/package version', function(done) {
    request(app)
      .get('/api')
      .expect(200, done);
  });

});
