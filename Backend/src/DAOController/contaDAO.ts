import knex from '../database/connection'
import { ContaCreate, ContaEditaCodigos, ContaEditaLimite } from '../model/conta/contaInterfaces'

export default class contaDAO{
    public static async getConta_DAO(id: string){
        let status
        try{
            const usuario = await knex('contas').where('id', id).first()
            status = {
                ...usuario
            }
        }catch(err){
            status = {
                mensagem: 'Ocorreu um erro ao cadastrar o usuario no banco de dados',
                ...err
            }
        } 
        return status
    }

    public static async getContaByNumeroConta_DB(numeroConta: string){

        const usuario = await knex('contas').where('numeroConta', numeroConta).first()

        return usuario !== null
    }

    public static async createConta_DAO(conta: ContaCreate){
        let status
        try{
            const id = await knex('contas').insert(conta)
            status = {
                id: id[0],
                ...conta
            }
        }catch(err){
            status = {
                mensagem: 'Ocorreu um erro ao adicionar uma conta no banco de dados',
                ...err
            }
        } 
        return status
    }

    public static async upgradeConta_DAO(conta: ContaEditaCodigos | ContaEditaLimite){
        let status
        try{
            await knex('contas').where('id', conta.id).update(conta)
            status = {
                ...conta
            }
        }catch(err){
            status = {
                mensagem: 'Ocorreu um erro ao atualizar a conta no banco de dados',
                ...err
            }
        } 
        return status
    }
}