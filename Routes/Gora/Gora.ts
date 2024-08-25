import { Router } from 'express';
import { createrToken, verificarToken } from '../../Middleware/token';
import CMS from '../CMS/CMS';


class GoraRoute {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

  private  routes(): void {
    
        this.router.get('/TokenGora', createrToken);
        this.router.use('/CMS',verificarToken , CMS);
    }
}

const Gora= new GoraRoute();
export default Gora.router;