import knex from '../database/connection'
import { ContaCompleta, ContaCreate, ContaEditaCodigos, ContaEditaLimite } from '../model/conta/contaInterfaces'

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
                mensagem: 'Ocorreu um erro ao pegar o usuario no banco de dados',
                ...err
            }
        } 
        return status
    }

    public static async getContaByNumeroConta_DAO(numeroConta: string){
        let status
        try{
            const usuario = await knex('contas').where('numeroConta', numeroConta).first()
            
            status = {
                ...usuario
            }
            
        }catch(err){
            status = {
                mensagem: 'Ocorreu um erro ao pegar o usuario no banco de dados',
                ...err
            }
        } 
        return status
    }


    public static async getContaByIdUsuario_DAO(idUsuario: number){
        let status
        try{
            const usuarios = await knex('contas').where('idUsuario', idUsuario)
            
            status = {
                usuarios
            }
            
        }catch(err){
            status = {
                mensagem: 'Ocorreu um erro ao pegar as contas do banco de dados',
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
            console.log(status)
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

    public static async deleteConta_DAO(id: string){
        let status
        try{
            await knex('contas').where('id', id).del()
            status = {
                mensagem: 'Conta deletada com sucesso',
            }
        }catch(err){
            status = {
                mensagem: 'Ocorreu um erro ao deletar a conta no banco de dados',
                ...err
            }
        } 
        return status
    }

    public static async TranferenciaConta_DAO(contaEnvia: ContaCompleta, contaRecebe: ContaCompleta, valor: number){
        let status
        try{

            if(-contaEnvia.limite <= Number(contaEnvia.saldo) - Number(valor)){
                contaEnvia.saldo -= valor
                
                contaRecebe.saldo = Number(contaRecebe.saldo) + Number(valor)

                await this.upgradeConta_DAO(contaEnvia)
                await this.upgradeConta_DAO(contaRecebe)

                status = {
                    status: "SUCESSO",
                    mensagem: 'Tranferencia feita com sucesso'
                }
            }
            else{
                status = {
                    status: "LIMITE_ATINGIDO"
                }
            }

        }catch(err){
            status = {
                mensagem: 'Ocorreu um erro no banco de dados para fazer a tranferencia de uma conta para a outra',
                ...err
            }
        } 
        return status
    }
}