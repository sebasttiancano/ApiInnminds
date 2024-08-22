import request from 'supertest';
import jwt from 'jsonwebtoken';
import config from '../../Config/config';

describe('Pruebas de integración para /rutalogs/rutaget', () => {
  let validToken: string;

  beforeAll(() => {
    // Genera un token válido para las pruebas
    validToken = jwt.sign(
      { secret: config.privateKey },
      config.publicKey,
      { expiresIn: 2000, subject: 'Marrocar' }
    );
  });

  it('debe permitir el acceso con un token válido y una IP permitida', async () => {
    const response = await request('http://localhost:3005')
      .get('/rutalogs/logs')
      .query({ ip: '181.49.10.35' }) 
      .set('Authorization', `Bearer ${validToken}`)
      .send({ IDTRANSACTIONS:1})
      console.log('esto es un comentario')
        
    expect(response.statusCode).toBe(200);
    
  });

  it('debe devolver un estado 500 si el token es inválido', async () => {
    
    const response = await request('http://localhost:3005')
      .get('/rutalogs/logs')
      .query({ ip: 'xx' }) 
      .set('Authorization', 'Bearer token-invalido')
      .send({ IDTRANSACTIONS:45})
      
    expect(response.status).toBe(500);
    
  });


});

describe('Pruebas de integracion para /rutalogs/rutapost ', () => {
    let validToken: string;

    beforeAll(() => {
      
      validToken = jwt.sign(
        { secret: config.privateKey },
        config.publicKey,
        { expiresIn: 2000, subject: 'Marrocar' }
      );
    });
  
    it('debe permitir el acceso con un token válido y una IP permitida', async () => {
      const response = await request('http://localhost:3005')
        .post('/rutalogs/logs')
        .query({ ip: '181.49.10.35' }) 
        .set('Authorization', `Bearer ${validToken}`); 
          
      expect(response.statusCode).toBe(200);
      
    });
  
    it('debe devolver un estado 500 si el token es inválido', async () => {
      
      const response = await request('http://localhost:3005')
        .post('/rutalogs/logs')
        .query({ ip: 'xx' }) 
        .set('Authorization', 'Bearer token-invalido');
  
      expect(response.status).toBe(500);
      
    });
})

