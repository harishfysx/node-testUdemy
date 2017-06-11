const request = require('supertest');

var app = require('./server').app;

it('It should return hello world response', (done) =>{
   request(app)
          .get('/')
          .expect(200)
          .expect('Hello world!')
          .end(done);
});
