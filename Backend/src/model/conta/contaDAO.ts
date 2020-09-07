import Conta from "./conta";
import knex from '../../database/connection'

export default class contaDAO{
    private conta: Conta;

    constructor(conta: Conta){
        this.conta = conta
    }

    public async createContaDB(){
        try{
            await knex('contas').insert(this.conta)

            const conta = this.conta
            return {
                ...conta,
            }
        }catch(err){
            return {
                mensagem: 'Ocorreu um erro ao cadastrar a conta no banco de dados',
                ...err
            }
        }
    }

    public async getContaDB(){
        try{
            const conta = await knex('contas').where('id', this.conta.id).first()
            return {...conta}
        }catch(err){
            return {
                mensagem: 'Ocorreu um erro ao pegar a conta no banco de dados',
                ...err
            }
        }
    }

    public async getSaldoContaDB(){
        try{
            const conta = await knex('contas').select(['saldo', 'limite']).where('id', this.conta.id).first()
            return {saldo: Number(conta.saldo), limite: Number(conta.limite)}
        }catch(err){
            return {
                mensagem: 'Ocorreu um erro ao pegar o saldo da conta no banco de dados',
                ...err
            }
        }
    }

    public async updateContaDB(){
        try{
            await knex('contas').where('id', this.conta.id).update(this.conta)
            return this.conta
        }catch(err){
            return {
                mensagem: 'Ocorreu um erro ao atualizar a conta no banco de dados',
                ...err
            }
        }
    }

    public async deleteContaDB(){
        try{
            await knex('contas').where('id', this.conta.id).del()
            return {mensagem: "Conta deletada com sucesso"}
        }catch(err){
            return {
                mensagem: 'Ocorreu um erro ao deletar a conta no banco de dados',
                ...err
            }
        }
    }
}