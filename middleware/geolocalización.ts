import { Request, Response, NextFunction} from 'express'
import 'dotenv/config'
import axios from 'axios'



async function localizar(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        
        const ip = req.query.ip as string || req.body.ip as string;

        if (!ip) {
            res.status(400).json({ error: 'IP no proporcionada' });
            return;
        }

        console.log('IP:', ip);

        const url: string = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.APIKEY}&ip=${ip}`;
        const result = await axios.get(url);
        console.log( result.data.country_name);

        if (result.data.country_name === process.env.PAIS) {
            return next();
        } else {
            res.status(403).json({ message: 'No se permite la petición' });
        }
    } catch (error) {
        console.error('Error de Búsqueda')        
        res.status(500).json({error:'Error en la búsqueda de geolocalización'})
    }
}

export default localizar;