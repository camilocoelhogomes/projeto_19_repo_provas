import supertest from 'supertest';
import app from '../../src/app';

describe('GET /is-live', () => {
  it('should answer with text "OK!" and status 200', async () => {

    const response = await supertest(app).get('/is-live');

    expect(response.status).toBe(200);
  });
});
