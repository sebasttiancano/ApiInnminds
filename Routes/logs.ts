import { Router, Request, Response } from 'express';
// import axios from 'axios';
import {insertLogs,selectLogs} from '../../API_Banco/Components/componentLogs'


class LogsRoute {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

  private  routes(): void {
    
        this.router.get('/logs', async (req: Request, res: Response) => {
            try {
                console.log(req.query);
                const data = await selectLogs({IDTRANSACTIONS : Number(req.query.IDTRANSACTIONS)})

                if(data.status === 200){
                    res.json({ result: data, message: 'éxito' }).status(200);
                }
                else{
                    res.json({ result: data.result, message: 'error al buscar el log' }).status(data.status);
                }
            } catch (error) {
                res.status(404).json({ message: 'Fallo la conexión a la base.' });
            }
        });

        this.router.post('/logs', async (req: Request, res: Response) => {
            try {
                console.log(req.body);
                const data =  await insertLogs({
                    IDTRANSACTIONS: req.body.IDTRANSACTIONS,
                    USERID: req.body.USERID,
                    TOTALDEBT: req.body.TOTALDEBT,
                    IP: req.body.IP,
                    BANK: req.body.BANK,
                    PAY: req.body.PAY,
                    DEBT: req.body.DEBT,
                    PAYMENTDATE: req.body.PAYMENTDATE
                })

                if(data.status === 200){
                    res.json({ result:data.result, message: 'éxito' }).status(data.status);
                }else{
                    res.json({ result: data.result, message: 'error al registar el log' }).status(data.status);
                }
                
            } catch (error) {
                res.status(401).json({ message: 'Fallo la conexión a la base.'});
            }
        });
    }
}

const logs = new LogsRoute();
export default logs.router;
