import localizar from "../../Middleware/geolocalización";
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

jest.mock('axios');

describe('Prueba unitaria para  la funcion localizar', () => {
  
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {
      query: {},
      body: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  it('llamar a next() para una IP válida y país correcto', async () => {
    req.query = { ip: '181.49.10.35' }; 
    (axios.get as jest.Mock).mockResolvedValue({ data: { country_name: process.env.PAIS } });

    await localizar(req as Request, res as Response, next);

    expect(next).toHaveBeenCalled();
  });

  it('retornar 403 si el país no coincide', async () => {
    req.query = { ip: '181.49.10.35' }; 
    (axios.get as jest.Mock).mockResolvedValue({ data: { country_name: 'Otro pais' } });

    await localizar(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: 'No se permite la petición' });
  });

  it('retornar 400 si no se proporciona IP', async () => {
    await localizar(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'IP no proporcionada' });
  });

  it('retornar 500 en caso de error de axios', async () => {
    req.query = { ip: '181.49.10.35' }; 
    (axios.get as jest.Mock).mockRejectedValue(new Error('Error'));

    await localizar(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Error en la búsqueda de geolocalización' });
  });
});
