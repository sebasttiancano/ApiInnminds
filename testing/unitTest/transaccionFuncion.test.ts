import { insertTransaccion,selectTransaccion,updateTransaccion,updateEstado } from "../../Components/componentTransaccion"
import { infoI,infoS,statuscode } from "../../Type/type"

//CAMBIAR LOS DATOS DE TESTEO  SI SE DESEA  REALIZAR PRUEBAS 

describe('Pruebas unitarias para las funciones de transaccion', () => {
    it('Debería devolver un status 200 si los datos se ingresan correctamente.', async () => {
        const params : infoI = { 
            BANK_PARAMETERS_ID: '466df8d6-f953-4c2c-b6a2-3813ee2af29e', 
            BANK_PARAMETERS_DESCRIPTION:'test' ,
            BANK_PARAMETERS_VALUE: 'test' ,
            BANK_PARAMETERS_ENABLED:  false ,
            BANK_PARAMETERS_TYPE: 'test', 
            BANK_PARAMETERS_USER: 'test'
        }
        const result = await insertTransaccion(params)
        expect(result.status).toBe(200)
    })

    it('Deberia devolver un status 200  si  se selecciona de manera correcta los datos.', async () => {
        const params : infoS = {BANK_PARAMETERS_ID: '466df8d6-f953-4c2c-b6a2-3813ee2af29e'}
        const result = await selectTransaccion(params)
        expect(result.status).toBe(200)
    })

    it('Deberia devolver un status 200  si se modifican los datos de manera correcta', async () => {
        const params : infoI = { 
            BANK_PARAMETERS_ID: '466df8d6-f953-4c2c-b6a2-3813ee2af29e', 
            BANK_PARAMETERS_DESCRIPTION:'tet' ,
            BANK_PARAMETERS_VALUE: 'tet' ,
            BANK_PARAMETERS_ENABLED:  false ,
            BANK_PARAMETERS_TYPE: 'tet', 
            BANK_PARAMETERS_USER: 'tet'
        }
        const result = await updateTransaccion(params)
        expect(result.status).toBe(200)
    })

    it('Deberia devolver un status 200 si se cambia el estado de manera correcta.', async () => {
        const params : statuscode = { 
            BANK_PARAMETERS_ID: '466df8d6-f953-4c2c-b6a2-3813ee2af29e', 
            BANK_PARAMETERS_TYPE: 'tet', 
           
        }
        const result = await updateEstado(params)
        expect(result.status).toBe(200)
    })

    

})