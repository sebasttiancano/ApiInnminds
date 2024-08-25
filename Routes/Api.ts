import { Router } from 'express';
// import axios from 'axios';
import  Gora from '../Routes/Gora/Gora'


class ApiRoute {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

  private  routes(): void {
    
        this.router.use('/Gora', Gora);
    }
}

const Api= new ApiRoute();
export default Api.router;
