const request = require('supertest');
import { app as server } from './server';

describe('Sum Endpoint', () => {
  it('should send correct result', async () => {
    const res = await request(server).post('/sum').send({
      firstNumber: 1,
      secondNumber: 2,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ result: 3 });
  });

  it('should send error if has wrong parameter', async () => {
    const res = await request(server).post('/sum').send({
      firstNumber: 1,
      secondNumber: 'test',
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ error: 'input should be number' });
  });
});
