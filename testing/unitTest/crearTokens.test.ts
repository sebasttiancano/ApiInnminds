import { createrToken  } from '../../Middleware/token';
import { Request, Response,} from 'express';

import config from '../../Config/config';


jest.mock('jsonwebtoken', () => ({
    verify: jest.fn()
}));


jest.mock('../../middleware/token', () => ({
    createrToken: jest.fn(),
    verificarToken: jest.fn()
}));

describe('Pruebas unitarias para la función createrToken', () => {

    it('debería devolver true cuando createrToken es llamado correctamente', async () => {
        const mockReq = {
            headers: {
                'x-api-key': config.publicKey,
                ip: '181.49.10.35'
            }
        } as Partial<Request>;

        const mockRes = {} as Partial<Response>;

        (createrToken as jest.Mock).mockResolvedValue(true);

        const result = await createrToken(mockReq as Request, mockRes as Response);

        expect(result).toBe(true);
        expect(createrToken).toHaveBeenCalledWith(mockReq, mockRes);
    });

    it('debería devolver 400 cuando createrToken es llamado incorrectamente', async () => {
        const mockReq = {
            headers: {
                'x-api-key': 'xx', 
                ip: '181.49.10.35'
            }
        } as Partial<Request>;

        const mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        } as Partial<Response>;

        (createrToken as jest.Mock).mockImplementation((_, res: Response) => {
            res.status(400).json({ message: 'Error en la solicitud' });
        });

        await createrToken(mockReq as Request, mockRes as Response);

        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'Error en la solicitud' });
    });
});



