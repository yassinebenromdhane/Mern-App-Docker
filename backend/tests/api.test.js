const app = require('../server');
const request = require('supertest');

describe('GET /', () => {
    it('responds with 200 OK', async () => {
      const response = await request(app).get('/hello');
      expect(response.statusCode).toBe(200);
    });
  });