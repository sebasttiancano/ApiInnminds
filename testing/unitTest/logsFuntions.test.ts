import { insertLogs,selectLogs} from "../../Components/componentLogs";
import { datosI,datosS } from "../../Type/type";

//CAMBIAR LOS DATOS DE TESTEO  SI SE DESEA  REALIZAR PRUEBAS 



describe('Pruebas unitarias para  las funciones de log', () => {
    it('Debería devolver un status 200 si los datos se ingresan correctamente.', async () => {
        const params: datosI = {
            IDTRANSACTIONS: 12900,
            USERID: 129,
            TOTALDEBT: 12.300,
            IP: '123.123.123',
            BANK: 'BANCOLOMBIA',
            PAY: 12.1,
            DEBT: 12.3,
            PAYMENTDATE: new Date()
        };

        const result = await insertLogs(params);
        expect(result.status).toBe(200);
        
    });

    it('Debería devolver un status 200 si los datos se seleccionan de manera correcta.', async () => {
        const params:datosS = {
            IDTRANSACTIONS: 12900
       
        };

        const result = await selectLogs(params);
        expect(result.status).toBe(200);
        
    });
});
