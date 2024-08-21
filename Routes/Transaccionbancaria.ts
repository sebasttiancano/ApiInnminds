import { Router, Request, Response } from 'express';
import {insertTransaccion,selectTransaccion,updateTransaccion,updateEstado} from '../Components/componentTransaccion'


class Transaccion {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        
        this.router.get('/parameters', async (req: Request, res: Response) => {
            try {
                console.log(req.query);
                const data = await selectTransaccion({BANK_PARAMETERS_ID : String(req.query.BANK_PARAMETERS_ID)})

                if(data.status === 200){
                    res.status(200).json({ result: data, message: 'éxito' });
                }else{
                    res.json({result:data.result, menssage:'erorr al buscar la transaccion.'}).status(data.status)
                }
                
            }catch (error) {
                res.status(400).json({ message: 'Fallo la conexión a la base.' });
            }
        })

        this.router.post('/parameters', async (req: Request, res: Response) => {
            try {
                console.log(req.body);
                const data = await insertTransaccion ({
                    BANK_PARAMETERS_ID:  req.body.BANK_PARAMETERS_ID,
                    BANK_PARAMETERS_DESCRIPTION: req.body.BANK_PARAMETERS_DESCRIPTION,
                    BANK_PARAMETERS_VALUE: req.body.BANK_PARAMETERS_VALUE,
                    BANK_PARAMETERS_ENABLED: req.body.BANK_PARAMETERS_ENABLED,
                    BANK_PARAMETERS_TYPE: req.body.BANK_PARAMETERS_TYPE,
                    BANK_PARAMETERS_USER: req.body.BANK_PARAMETERS_USER
                })
                if(data.status === 200){
                    res.status(200).json({ result: data, message: 'éxito' });
                }else{
                    res.status(402).json({message: 'Fallo la conexión a la base.'})
                }
                
            } catch (error) {
                res.status(400).json({ message: 'Fallo la conexión a la base.' });
            }
        })

        this.router.patch('/parameters', async (req: Request, res: Response) => {
            try {
                console.log(req.body);
                const data = await updateTransaccion ({
                    BANK_PARAMETERS_ID:  req.body.BANK_PARAMETERS_ID,
                    BANK_PARAMETERS_DESCRIPTION: req.body.BANK_PARAMETERS_DESCRIPTION,
                    BANK_PARAMETERS_VALUE: req.body.BANK_PARAMETERS_VALUE,
                    BANK_PARAMETERS_ENABLED: req.body.BANK_PARAMETERS_ENABLED,
                    BANK_PARAMETERS_TYPE: req.body.BANK_PARAMETERS_TYPE,
                    BANK_PARAMETERS_USER: req.body.BANK_PARAMETERS_USER
                })
                if(data.status === 200){
                    res.status(200).json({ result: data, message: 'éxito' });
                }else{
                    res.status(402).json({message: 'Fallo la conexión a la base.'})
                }

            } catch (error) {
                res.status(400).json({ message: 'Fallo la conexión a la base.' });
            }
        })

        this.router.delete('/parameters',async(req: Request, res: Response)=>{ 
            try{
                console.log(req.body);
                const data = await updateEstado({
                    BANK_PARAMETERS_ID : String(req.body.BANK_PARAMETERS_ID),
                    BANK_PARAMETERS_TYPE : String(req.body.BANK_PARAMETERS_TYPE)
                })
                if(data.status === 200){
                    res.status(200).json({ result: data, message: 'éxito' });
                }else{
                    res.status(402).json({message: 'Fallo la conexión a la base.'})
                }
            }catch(error){
                res.status(404).json({ message: 'Fallo la conexión a la base.' });
            }
        })
    }
}

const banco = new Transaccion();
export default banco.router;
