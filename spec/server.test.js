/* eslint-disable no-undef */
const request = require('supertest');
const app = require('./app.js');

describe('get Endpoints', () => {
  test('gets all questions from db', async () => {
    await request(app)
      .get('/api/q&a/questions/')
      .then((result) => {
        expect(result.body.length).toEqual(100);
      });
  });
});

describe('put Endpoints', () => {
  test('updates answers in db', async () => {
    await request(app)
      .put('/api/q&a/answer/5')
      .send({ helpful: 10 });
    await request(app)
      .get('/api/q&a/answer/5')
      .then((result) => {
        expect(result.body[0].helpful).toBe(10);
      });

    await request(app)
      .put('/api/q&a/answer/5')
      .send({ helpful: 1 });
    await request(app)
      .get('/api/q&a/answer/5')
      .then((result) => {
        expect(result.body[0].helpful).toBe(1);
      });
  });
});
