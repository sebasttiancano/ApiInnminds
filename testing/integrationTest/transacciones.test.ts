import request from 'supertest';
import jwt from 'jsonwebtoken';
import config from '../../Config/config';

describe('Pruebas de integración para /transacciones/rutaget', () => {
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
      .get('/parametrizacion/rutaget')
      .query({ ip: '181.49.10.35' }) 
      .set('Authorization', `Bearer ${validToken}`); 
        
    expect(response.statusCode).toBe(200);
    
  });

  it('debe devolver un estado 500 si el token es inválido', async () => {
    
    const response = await request('http://localhost:3005')
      .get('/parametrizacion')
      .query({ ip: 'xx' }) 
      .set('Authorization', 'Bearer token-invalido');

    expect(response.status).toBe(500);
    
  });
});

describe('Pruebas de integracion para /transacciones/rutapost ', () => {
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
        .post('/parametrizacion/rutapost')
        .query({ ip: '181.49.10.35' }) 
        .set('Authorization', `Bearer ${validToken}`); 
          
      expect(response.statusCode).toBe(200);
      
    });
  
    it('debe devolver un estado 500 si el token es inválido', async () => {
      
      const response = await request('http://localhost:3005')
        .post('/parametrizacion/rutapost')
        .query({ ip: 'xx' }) 
        .set('Authorization', 'Bearer token-invalido');
  
      expect(response.status).toBe(500);
      
    });
})

describe('Pruebas de integracion para  /transacciones/rutapatch', () => { 
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
        .patch('/parametrizacion/rutapatch')
        .query({ ip: '181.49.10.35' }) 
        .set('Authorization', `Bearer ${validToken}`); 
          
      expect(response.statusCode).toBe(200);
      
    });
  
    it('debe devolver un estado 500 si el token es inválido', async () => {
      
      const response = await request('http://localhost:3005')
        .patch('/parametrizacion/rutapatch')
        .query({ ip: 'xx' }) 
        .set('Authorization', 'Bearer token-invalido');
  
      expect(response.status).toBe(500);
      
    });
})

describe('Pruebas de integracion para  /transacciones/cambioestadopatch', () => { 
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
        .patch('/parametrizacion/rutapatch')
        .query({ ip: '181.49.10.35' }) 
        .set('Authorization', `Bearer ${validToken}`); 
          
      expect(response.statusCode).toBe(200);
      
    });
  
    it('debe devolver un estado 500 si el token es inválido', async () => {
      
      const response = await request('http://localhost:3005')
        .patch('/parametrizacion/rutapatch')
        .query({ ip: 'xx' }) 
        .set('Authorization', 'Bearer token-invalido');
  
      expect(response.status).toBe(500);
      
    });
})