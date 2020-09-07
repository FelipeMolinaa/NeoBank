import {Request, Response} from 'express'
import Usuario from '../model/Usuario/Usuario'

class UserControllers{
    async index(request: Request, response: Response){
        const {id} = request.params

        Usuario.getUsuarioDB(Number(id)).then(usuario =>{
            return response.json(usuario)
        })
    }

    async show(request: Request, response: Response){

        Usuario.getUsuariosDB().then(Usuarios =>{
            return response.json(Usuarios)
        })
    }

    async create(request: Request, response: Response){
        const {nome, telefone, cpf, email, cep, senha} = request.body
        
        const usuario = new Usuario(nome, telefone, cpf, email, cep, senha)

        usuario.createUsuarioDB().then(mensagem => {
            console.log(mensagem)
            return response.json(mensagem)
        })   
    }

    async update(request: Request, response: Response){
        const {id, nome, telefone, cpf, email, cep, senha} = request.body
        const usuario = new Usuario(nome, telefone, cpf, email, cep, senha)

        usuario.updateUsuariosDB(id).then(usuario =>{
            return response.json(usuario)
        })
    }

    async delete(request: Request, response: Response){
        const {id} = request.params

        Usuario.deleteUsuarioDB(Number(id)).then(usuario =>{
            return response.json(usuario)
        })
    }
}

export default UserControllers