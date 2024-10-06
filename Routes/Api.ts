import { Router } from 'express';
import { Request, Response } from 'express';
import  Gora from '../Routes/Gora/Gora'


class ApiRoute {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private  routes(): void {
        this.router.get('/', function (_req : Request, res : Response){
            res.json({message : "Bienvenido a la Api de Gora"}).status(200)
        });
        this.router.use('/Gora', Gora);
    }
}

const Api= new ApiRoute();
export default Api.router;
