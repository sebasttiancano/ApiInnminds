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
      .get('/parametrizacion/parameters')
      .query({ ip: '181.49.10.35' }) 
      .set('Authorization', `Bearer ${validToken}`)
      .send({BANK_PARAMETERS_ID: 'ff911568-18b5-425c-b151-2204f3d38b9c',
      
      })
        
    expect(response.statusCode).toBe(200);
    
  });

  it('debe devolver un estado 500 si el token es inválido', async () => {
    
    const response = await request('http://localhost:3005')
      .get('/parametrizacion/parameters')
      .query({ ip: 'xx' }) 
      .set('Authorization', 'Bearer token-invalido')
      .send({BANK_PARAMETERS_ID: 'xx'})

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
        .post('/parametrizacion/parameters')
        .query({ ip: '181.49.10.35' }) 
        .set('Authorization', `Bearer ${validToken}`)
        .send({BANK_PARAMETERS_ID: '5dd43b2c-162f-4d4e-b583-76312d7c6820',
          BANK_PARAMETERS_DESCRIPTION: 'test',
          BANK_PARAMETERS_VALUE:' test',
          BANK_PARAMETERS_ENABLED: 0 ,
          BANK_PARAMETERS_TYPE: 'test' ,
          BANK_PARAMETERS_USER: 'test'})

      expect(response.statusCode).toBe(200)
      
    });
  
    it('debe devolver un estado 500 si el token es inválido', async () => {
      
      const response = await request('http://localhost:3005')
        .post('/parametrizacion/parameters')
        .query({ ip: 'xx' }) 
        .set('Authorization', 'Bearer token-invalido')
        .send({BANK_PARAMETERS_ID: 'xx',
          BANK_PARAMETERS_DESCRIPTION: 'xx',
          BANK_PARAMETERS_VALUE:' xx',
          BANK_PARAMETERS_ENABLED: 0 ,
          BANK_PARAMETERS_TYPE: 'xx' ,
          BANK_PARAMETERS_USER: 'xx'
        })
  
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
        .patch('/parametrizacion/parameters')
        .query({ ip: '181.49.10.35' }) 
        .set('Authorization', `Bearer ${validToken}`)
        .send({BANK_PARAMETERS_ID: '5dd43b2c-162f-4d4e-b583-76312d7c6820',
          BANK_PARAMETERS_DESCRIPTION: 'tet',
          BANK_PARAMETERS_VALUE:' tet',
          BANK_PARAMETERS_ENABLED: 0 ,
          BANK_PARAMETERS_TYPE: 'tet' ,
          BANK_PARAMETERS_USER: 'tet'
        })
          
      expect(response.statusCode).toBe(200);
      
    });
  
    it('debe devolver un estado 500 si el token es inválido', async () => {
      
      const response = await request('http://localhost:3005')
        .patch('/parametrizacion/parameters')
        .query({ ip: 'xx' }) 
        .set('Authorization', 'Bearer token-invalido')
        .send({BANK_PARAMETERS_ID: 'xx',
          BANK_PARAMETERS_DESCRIPTION: 'test',
          BANK_PARAMETERS_VALUE:' test',
          BANK_PARAMETERS_ENABLED: 0 ,
          BANK_PARAMETERS_TYPE: 'test' ,
          BANK_PARAMETERS_USER: 'test'
        })
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
        .patch('/parametrizacion/parameters')
        .query({ ip: '181.49.10.35' }) 
        .set('Authorization', `Bearer ${validToken}`)
        .send({BANK_PARAMETERS_ID: '5dd43b2c-162f-4d4e-b583-76312d7c6820',
          BANK_PARAMETERS_DESCRIPTION: 'test'})
          
      expect(response.statusCode).toBe(200);
      
    });
  
    it('debe devolver un estado 500 si el token es inválido', async () => {
      
      const response = await request('http://localhost:3005')
        .patch('/parametrizacion/parameters')
        .query({ ip: 'xx' }) 
        .set('Authorization', 'Bearer token-invalido');
  
      expect(response.status).toBe(500);
      
    });
})