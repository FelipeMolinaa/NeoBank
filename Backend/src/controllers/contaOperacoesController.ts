import { Response, Request } from "express";

export default class ContaOperacoesController{
    async transferencia(request: Request, response: Response){
        const {idContaEnvia, idContaRecebe, valor} = request.body
    }
}