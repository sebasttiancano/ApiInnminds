import express, { Request, Response, NextFunction } from 'express';
import logs from './Routes/logs';
import banco from './Routes/Transaccionbancaria';
import cors_API from '.././API_Banco/cors/losgCors' 
import cors_transaccion from './cors/transaccionCors'; 
import config from './config/config';
import jwt  from 'jsonwebtoken'
import  api from '.././API_Banco/middleware/geolocalización'

class Server {
    

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', 3005);
        this.app.set('credentials', config);
        this.app.use(express.json());
        this.app.use(function (_req: Request, res: Response, next: NextFunction) {
           res.header("Access-Control-Allow-Origin", "*");
             res.header("Access-Control-Allow-Methods", "GET,OPTIONS,POST,PUT,DELETE,PATCH");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, access-control-allow-origin");
             next();
         });
    }

    private createrToken(req: Request, res: Response ): void {
        try {
            if (this.app.get('credentials').publicKey === req.headers['x-api-key']) {
                const token = jwt.sign(
                    { secret: this.app.get('credentials').privateKey },
                    this.app.get('credentials').publicKey,
                    { expiresIn: 2000, subject: 'Marrocar' }
                );
                res.json({
                    mensaje: 'Success',
                    token
                });
            } else { 
                res.sendStatus(403);
            }
        } catch (err) {
            res.sendStatus(500);
        }

        
    }

    

    private routes(): void {
        this.app.use('/rutalogs', cors_API(this.app),logs);
        this.app.use('/transacciones', cors_transaccion(this.app),banco);
        this.app.post('/createToken',api,this.createrToken.bind(this))
    }
    


    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Daemon listening on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();

export default server.app;
