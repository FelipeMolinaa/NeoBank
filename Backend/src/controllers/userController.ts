import {Request, Response} from 'express'
import UsuarioDAO from '../DAOController/UsuarioDAO'
import bcrypt from '../utils/incriptador'
import { UsuarioCompleto } from '../model/Usuario/UsuarioInterfaces'

class UserControllers{
    async index(request: Request, response: Response){
        const {cpf} = request.params

        const Usuario = await UsuarioDAO.getUsuarioByCPF_DAO(cpf)  

        return response.json(Usuario)
    }

    async show(request: Request, response: Response){
        const Usuarios = await UsuarioDAO.getUsuarios_DAO()  

        return response.json(Usuarios)
    }

    async create(request: Request, response: Response){
        const {nome, telefone, cpf, email, cep, senha} = request.body

        const UsuarioExiste = await UsuarioDAO.getUsuarioByCPF_DAO(cpf)
        if(UsuarioExiste !== undefined){
            return response.json('Ja existe um usuario cadastrado com esse CPF')
        }

        const Usuario: UsuarioCompleto = {
            nome,
            telefone,
            cpf,
            email,
            cep,
            senha: await bcrypt.encriptaSenha(senha)
        }

        const usuario = await UsuarioDAO.createUsuario_DAO(Usuario)  

        return response.json(usuario)
    }

    async update(request: Request, response: Response){
        const {id, telefone, email, cep, senha} = request.body
        
        const usuario = {
            id,
            telefone,
            email,
            cep,
            senha
        }

        const Usuario = await UsuarioDAO.updateUsuario_DAO(usuario)  

        return response.json(Usuario)
    }

    async delete(request: Request, response: Response){
        const {id} = request.params

        const retorno = await UsuarioDAO.deleteUsuario_DAO(id)

        return response.json(retorno)
    }
}

export default UserControllers