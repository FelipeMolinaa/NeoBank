import knex from '../../database/connection'

export interface ContaCompleta{
    id: string;
    nomeConta: string
    idUsuario: string;
    numeroConta: string;
    codigoSeguranca: string;
    validade: string
    saldo: number;
    limite: number;
}

export interface ContaCreate{
    nomeConta: string;
    idUsuario: string;
    numeroConta: string;
    codigoSeguranca: string;
    validade: string
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

export interface ContaTranferencia{
    id: string;
    limite: number,
    saldo: number
}