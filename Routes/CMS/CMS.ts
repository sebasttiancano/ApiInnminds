import { Router } from 'express';
import { createrToken } from '../../Middleware/token';
import { selectPets, deletePets, UpdatePets, insertPets } from '../../Components/componentPets';


class CMSRoute {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

  private  routes(): void {
        
        /*
        * Rutas de las mascotas
        */
        this.router.get('/Pets', selectPets);
        this.router.post('/Pets', insertPets);
        this.router.patch('/Pets', UpdatePets);
        this.router.delete('/Pets', deletePets);

        /*
        * Rutas de los usuarios
        */
        this.router.get('/Users', createrToken);
        this.router.post('/Users', createrToken);
        this.router.patch('/Users', createrToken);
        this.router.delete('/Users', createrToken);
    }
}

const CMS= new CMSRoute();
export default CMS.router;