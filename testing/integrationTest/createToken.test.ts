import request from 'supertest';
import jwt from 'jsonwebtoken';
import config from '../../Config/config';


jest.mock('jsonwebtoken');
const mockJwtSign = jwt.sign as jest.Mock;

describe('Pruebas de integracion para la ruta createToken', () => {

  it('debería devolver un token cuando la API key es válida', async () => {
   const response = await request('http://localhost:3005')
      .post('/createToken')
      .set('ip', '181.49.10.35')
      .set('x-api-key', config.publicKey);
    expect(response.statusCode).toBe(200);
  });

  it('debería devolver 400 cuando la API key es inválida', async () => {
    const response = await request('http://localhost:3005')
      .post('/createToken')
      .set('x-api-key', 'claveinvalida');
    expect(response.statusCode).toBe(400);
  });

  it('debería devolver 400 en caso de un error interno', async () => {
   mockJwtSign.mockImplementation(() => { throw new Error('Error interno') });
    const response = await request('http://localhost:3005')
      .post('/createToken')
      .set('x-api-key', 'xxx');
    expect(response.statusCode).toBe(400);
  });
});

