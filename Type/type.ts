export interface datosI {
    IDTRANSACTIONS: number ,
    USERID : number,
    TOTALDEBT : number,
    IP : string,
    BANK: string ,
    PAY : number ,
    DEBT : number ,
    PAYMENTDATE : Date
}

export interface datosS { 
    IDTRANSACTIONS: number 
}

export interface infoI{
    BANK_PARAMETERS_ID : string,
    BANK_PARAMETERS_DESCRIPTION:string,
    BANK_PARAMETERS_VALUE: string,
    BANK_PARAMETERS_ENABLED: boolean,
    BANK_PARAMETERS_TYPE: string;
    BANK_PARAMETERS_USER: string;
}

export interface infoS{
    BANK_PARAMETERS_ID : string

}

export interface statuscode {
    BANK_PARAMETERS_ID : string,
    BANK_PARAMETERS_TYPE: string;
}