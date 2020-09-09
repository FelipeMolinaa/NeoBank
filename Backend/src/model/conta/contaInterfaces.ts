import knex from '../../database/connection'

export interface ContaCompleta{
    id: string;
    idUsuario: string;
    numeroConta: string;
    codigoSeguranca: string;
    dataExpedicao: string
    saldo: number;
    limite: number;
}

export interface ContaCreate{
    idUsuario: string;
    numeroConta: string;
    codigoSeguranca: string;
    dataExpedicao: string
    saldo: number;
    limite: number;
}

export interface ContaEditaCodigos{
    id: string;
    numeroConta: string;
    codigoSeguranca: string;
}

export interface ContaEditaLimite{
    id: string;
    limite: number
}