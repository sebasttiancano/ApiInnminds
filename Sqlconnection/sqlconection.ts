import mssql  from 'mssql'

const config: mssql.config = { 
    server: "localhost",
    database: "Test",
    user: "Test",
    password: "Erik050295*",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function sqlConnection(): Promise<mssql.ConnectionPool> {
    try 
    {
        return await mssql.connect(config);
    } catch (error) {
        console.error('Error connecting to SQL Server:', error);
        throw error;
    }
}

export default sqlConnection