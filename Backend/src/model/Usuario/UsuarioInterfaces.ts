import knex from '../../database/connection'

export interface UsuarioCompleto{
    nome: string;
    senha: string
    telefone: string;
    cpf: string;
    email: string;
    cep: string;
}

export interface UsuarioUpdate{
    id: string,
    telefone: string,
    email: string,
    cep: string,
    senha: string
}