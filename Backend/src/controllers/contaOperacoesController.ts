import { Response, Request } from "express";
import Conta from '../model/conta/conta'
import ContaDAO from '../model/conta/contaDAO'


export default class ContaOperacoesController{
    async pagar(request: Request, response: Response){
        
    }

    async transferencia(request: Request, response: Response){
        const {idContaEnvia, idContaRecebe, valor} = request.body

        const contaEnvia = new Conta()
        contaEnvia.id = idContaEnvia
        const contaRecebe = new Conta()
        contaRecebe.id = idContaRecebe

        const contaEnviaDAO = new ContaDAO(contaEnvia)
        const contaRecebeDAO = new ContaDAO(contaRecebe)

        await contaEnviaDAO.getSaldoContaDB().then(dados =>{
            contaEnvia.saldo = dados.saldo
            contaEnvia.limite = dados.limite
        })

        await contaRecebeDAO.getSaldoContaDB().then(dados =>{
            contaRecebe.saldo = dados.saldo
            contaRecebe.limite = dados.limite
        })

        contaEnvia.transferir(contaRecebe, Number(valor)).then(dados =>{
            return response.json(dados)

        })

        
    }
}