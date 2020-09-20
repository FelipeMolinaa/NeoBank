import { Response, Request } from "express";
import contaDAO from "../DAOController/contaDAO";

export default class ContaOperacoesController{
    async transferencia(request: Request, response: Response){
        const {idContaEnvia, numeroContaRecebe, valor} = request.body

        const contaEnvia = await contaDAO.getConta_DAO(idContaEnvia)
        const contaRecebe = await contaDAO.getContaByNumeroConta_DAO(numeroContaRecebe)

        const ResponseDB = await contaDAO.TranferenciaConta_DAO(contaEnvia, contaRecebe, valor)

        return response.json(ResponseDB)
    }
}