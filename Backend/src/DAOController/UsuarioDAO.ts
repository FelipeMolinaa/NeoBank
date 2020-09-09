import knex from '../database/connection'
import {UsuarioCompleto, UsuarioUpdate} from '../model/Usuario/UsuarioInterfaces'

export default class UsuarioDAO{
    public static async getUsuarioByID_DAO(id: string){
        let status
        try{
            const usuario = await knex('usuarios').where('id', id).first()
            status = usuario
        }catch(err){
            status = {
                mensagem: 'Ocorreu um erro ao pegar o usuario no banco de dados',
                ...err
            }
        } 
        return status
    }

    public static async getUsuarioByCPF_DAO(cpf: string){
        let status
        try{
            const usuario = await knex('usuarios').where('cpf', cpf).first()
            status = usuario
        }catch(err){
            console.log(err)
            status = {
                mensagem: 'Ocorreu um erro ao pegar o usuario no banco de dados',
                ...err
            }
        } 
        return status
    }

    public static async getUsuarios_DAO(){
        let status
        try{
            const usuarios = await knex('usuarios')
            status = {
                usuarios
            }
        }catch(err){
            status = {
                mensagem: 'Ocorreu um erro ao pegar os usuarios no banco de dados',
                ...err
            }
        } 
        return status
    }

    public static async createUsuario_DAO(usuario: UsuarioCompleto){
        let status
        try{
            const id = await knex('usuarios').insert(usuario)
            status = {
                id: id[0],
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

    public static async updateUsuario_DAO(usuario: UsuarioUpdate){
        let status
        try{
            const usuarioDado: UsuarioCompleto = await knex('usuarios').where('id', usuario.id).first()

            const UsuarioParametros = {
                id: usuario.id,
                telefone: usuario.telefone === null ? usuarioDado.telefone : usuario.telefone,
                email: usuario.email === null ? usuarioDado.email : usuario.email,
                cep: usuario.cep === null ? usuarioDado.cep : usuario.cep,
                senha: usuario.senha === null ? usuarioDado.senha : usuario.senha,
                nome: usuarioDado.nome,
                cpf: usuarioDado.cpf
            }

            await knex('usuarios').update(UsuarioParametros).where('id', usuario.id)
            status = {
                ...UsuarioParametros
            }
        }catch(err){
            status = {
                mensagem: 'Ocorreu um erro ao atualizar o usuario no banco de dados',
                ...err
            }
        } 
        return status
    }

    public static async deleteUsuario_DAO(id: string){
        let status
        try{
            const usuarioAtualizado = await knex('usuarios').where('id', id).del()
            if(!usuarioAtualizado){
                status = {
                    mensagem: "Houve um erro... esse usuario não existe"
                }
            }else{
                status = {
                    mensagem: "Usuario excluido com sucesso"
                }
            }
            
        }catch(err){
            status = {
                mensagem: 'Ocorreu um erro ao cadastrar o usuario no banco de dados',
                ...err
            }
        } 
        return status
    }
}