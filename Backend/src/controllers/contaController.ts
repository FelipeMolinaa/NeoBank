import {Request, Response} from 'express'
import contaDAO from '../DAOController/contaDAO';
import { ContaCreate, ContaEditaCodigos, ContaEditaLimite } from '../model/conta/contaInterfaces';
import ContaHelper from '../model/conta/contaHelper';
import UsuarioDAO from '../DAOController/UsuarioDAO';

class ContaController{
    async index(request: Request, response: Response){
        const {id} = request.params;

        const responseDB = await contaDAO.getConta_DAO(id)

        return response.json(responseDB)
    }

    async create(request: Request, response: Response){
        const {idUsuario} = request.body
        const usuario = await UsuarioDAO.getUsuarioByID_DAO(idUsuario)
        if(usuario == undefined){
            return response.json({
                message: 'Ocorreu um erro... O usuario no qual quer criar a conta, não existe'
            })
        }
        const conta: ContaCreate = {
            idUsuario,
            numeroConta: await ContaHelper.geraNumeroConta(4),
            codigoSeguranca: await ContaHelper.geraSenhaConta(3),
            dataExpedicao: await ContaHelper.getDataFormatada(),
            limite: 300,
            saldo: 0
        }

        const responseDB = await contaDAO.createConta_DAO(conta)
        return response.json(responseDB)
    }

    async updateCodigos(request: Request, response: Response){
        const {id} = request.body

        const conta: ContaEditaCodigos = {
            id,
            numeroConta: await ContaHelper.geraNumeroConta(4),
            codigoSeguranca: await ContaHelper.geraSenhaConta(3),
        }

        const responseDB = await contaDAO.upgradeConta_DAO(conta)
        return response.json(responseDB)
    }

    async update(request: Request, response: Response){
        const {id, limite} = request.body

        const conta: ContaEditaLimite = {
            id,
            limite
        }

        const responseDB = await contaDAO.upgradeConta_DAO(conta)
        return response.json(responseDB)
    }

    async delete(request: Request, response: Response){
        const {id} = request.params

        const

        return response.json(responseDB)
    }
}

export default ContaController