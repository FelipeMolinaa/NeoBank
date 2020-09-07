import {Request, Response} from 'express'
import Conta from '../model/conta/conta'
import ContaDAO from '../model/conta/contaDAO'

class ContaController{
    async index(request: Request, response: Response){
        const {id} = request.params;

        const conta = new Conta();
        await conta.resgataConta(Number(id));

        return response.json(conta)
    }

    async create(request: Request, response: Response){

        const {idUsuario} = request.body
        const conta = new Conta()
        await conta.novaConta(idUsuario)
        const contaDAO = new ContaDAO(conta)

        await contaDAO.createContaDB().then(dados =>{
            return response.json(dados)
        })
    }

    async updateCodigo(request: Request, response: Response){
        const {id} = request.body

        const conta = new Conta()
        conta.id = Number(id)

        await conta.redefinirCodigosCartao()
        const contaDAO = new ContaDAO(conta)

        await contaDAO.updateContaDB().then(dados =>{
            return response.json(dados)
        })
    }

    async updateLimite(request: Request, response: Response){
        const {id, limite} = request.body

        const conta = new Conta()

        conta.id = Number(id)
        conta.limite = Number(limite)
  
        const contaDAO = new ContaDAO(conta)

        await contaDAO.updateContaDB().then(dados =>{
            return response.json(dados)
        })
    }

    async delete(request: Request, response: Response){
        const {id} = request.params

        const conta = new Conta()
        conta.id = Number(id)
        const contaDAO = new ContaDAO(conta)

        await contaDAO.deleteContaDB().then(dados =>{
            return response.json(dados)
        })
    }
}

export default ContaController