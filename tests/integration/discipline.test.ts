import supertest from 'supertest';
import app, { init } from '../../src/app';

beforeAll(async () => {
  await init();
});

describe('GET /discipline', () => {
  it('shold answer with a array of categories object', async () => {
    const response = await supertest(app).get('/discipline');
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });
});
