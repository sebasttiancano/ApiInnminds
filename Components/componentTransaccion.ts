import {sqlConnection}  from '../Sqlconnection/sqlconection'
import sql from 'mssql'
import {infoI} from '../Type/type';
import {infoS} from '../Type/type';
import {statuscode} from '../Type/type'

export async function insertTransaccion(params:infoI): Promise<{ result: any, status: number }>{
    let pool : sql.ConnectionPool | null = null
    try{
        pool = await sqlConnection()
        const create = await pool.request()
        .input('BANK_PARAMETERS_ID',sql.UniqueIdentifier,params.BANK_PARAMETERS_ID)
        .input('BANK_PARAMETERS_DESCRIPTION',sql.NVarChar,params.BANK_PARAMETERS_DESCRIPTION)
        .input('BANK_PARAMETERS_VALUE',sql.NVarChar,params.BANK_PARAMETERS_VALUE)
        .input('BANK_PARAMETERS_ENABLED',sql.Bit,params.BANK_PARAMETERS_ENABLED)
        .input('BANK_PARAMETERS_TYPE',sql.NVarChar,params.BANK_PARAMETERS_TYPE)
        .input('BANK_PARAMETERS_DATE',sql.DateTime,new Date())
        .input('BANK_PARAMETERS_USER',sql.NVarChar,params.BANK_PARAMETERS_USER)
        .execute('PARAMETRISATIONINSERT')
        pool.close()
        return { result:create, status:200}
    }catch(error){
        console.error('Error en la conexion.',error)
        return {result: error, status:402}
    }

}

export async function selectTransaccion(params:infoS): Promise<{result:any, status: number}>{
    let pool : sql.ConnectionPool | null = null
    try{
        pool= await sqlConnection()
        const select = await pool.request()
        .input('BANK_PARAMETERS_ID',sql.UniqueIdentifier,params.BANK_PARAMETERS_ID)
        .execute('PARAMETRISATIONSELECT')
        pool.close()
        return {result:select, status:200}

    }catch(error){
        console.error('Error en la conexion.',error)
        return{result:error, status:402}
    }
}

export async function  updateTransaccion(params:infoI): Promise<{ result: any, status: number }>{
    let pool : sql.ConnectionPool | null = null
    try{
        pool = await sqlConnection()
        const create = await pool.request()
        .input('BANK_PARAMETERS_ID',sql.UniqueIdentifier,params.BANK_PARAMETERS_ID)
        .input('BANK_PARAMETERS_DESCRIPTION',sql.NVarChar,params.BANK_PARAMETERS_DESCRIPTION)
        .input('BANK_PARAMETERS_VALUE',sql.NVarChar,params.BANK_PARAMETERS_VALUE)
        .input('BANK_PARAMETERS_ENABLED',sql.Bit,params.BANK_PARAMETERS_ENABLED)
        .input('BANK_PARAMETERS_TYPE',sql.NVarChar,params.BANK_PARAMETERS_TYPE)
        .input('BANK_PARAMETERS_DATE',sql.DateTime,new Date())
        .input('BANK_PARAMETERS_USER',sql.NVarChar,params.BANK_PARAMETERS_USER)
        .execute('PARAMETRISATIONUPDATE')
        pool.close()
        return { result:create, status:200}
    }catch(error){
        console.error('Error en la conexion.',error)
        return {result: error, status:402}
    }

}

export async function updateEstado(params:statuscode): Promise<{result: any, status: number}>{
    let pool : sql.ConnectionPool | null = null 
    try{
        pool = await sqlConnection()
        const update = await  pool.request()
        .input('BANK_PARAMETERS_ID',sql.UniqueIdentifier,params.BANK_PARAMETERS_ID)
        .input('BANK_PARAMETERS_TYPE',sql.NVarChar,params.BANK_PARAMETERS_TYPE)
        .input('BANK_PARAMETERS_ENABLED',sql.Bit, 0)
        .execute('PARAMETRISATIONUPDATE_ENABLED')
        pool.close()
        return {result:update, status:200}
        

    }catch(error){
        console.error('Error en la conexion.',error)
        return { result: error, status:402}
    }
}
