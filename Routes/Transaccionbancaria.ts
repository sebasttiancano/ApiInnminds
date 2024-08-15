import { Router, Request, Response } from 'express';


class Transaccion {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.get('/rutaget', async (req: Request, res: Response) => {
            try {
                console.log(req.query);
                const data = 'RUTA GET ejecutada con éxito';
                res.status(200).json({ result: data, message: 'éxito' });
            } catch (error) {
                res.status(400).json({ message: 'Fallo la conexión a la base.' });
            }
        })

        this.router.post('/rutapost', async (req: Request, res: Response) => {
            try {
                console.log(req.body);
                const data = 'RUTA POST ejecutada con éxito';
                res.status(200).json({ result: data, message: 'éxito' });
            } catch (error) {
                res.status(400).json({ message: 'Fallo la conexión a la base.' });
            }
        })

        this.router.patch('/rutapatch', async (req: Request, res: Response) => {
            try {
                console.log(req.body);
                const data = 'RUTA PATCH ejecutada con éxito';
                res.json({ result: data, message: 'éxito' }).status(200)
            } catch (error) {
                res.status(400).json({ message: 'Fallo la conexión a la base.' });
            }
        })

        this.router.patch('/cambiodeestadopatch',async(req: Request, res: Response)=>{ 
            try{
                console.log(req.body);
                const data = 'RUTA PATCH ejecutada con éxito';
                res.json({result:data, menssage:'éxito'}).status(200)
            }catch(error){
                res.status(404).json({ message: 'Fallo la conexión a la base.' });
            }
        })
    }
}

const banco = new Transaccion();
export default banco.router;
