import supertest from 'supertest';
import app, { init } from '../../src/app';

beforeAll(async () => {
  await init();
});

describe('GET /categorie', () => {
  it('shold answer with a array of categories object', async () => {
    const response = await supertest(app).get('/categorie');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(5);
  });
});
