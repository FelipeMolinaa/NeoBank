import knex from '../../database/connection'

export default class Usuario{
    private nome: string;
    private senha: string
    private telefone: string;
    private cpf: string;
    private email: string;
    private cep: string;

    constructor(nome: string, telefone: string,CPF: string,email: string, CEP: string, senha: string){
        this.nome = nome
        this.telefone = telefone
        this.cpf = CPF
        this.email = email
        this.cep = CEP
        this.senha = senha
    }

    public async createUsuarioDB(){
        try{
            await knex('usuarios').insert(this)
            const status = {
                mensagem: 'Sucesso ao cadastrar o usuario no banco de dados'
            }
            return status
        }catch(err){
            const status = {
                mensagem: 'Ocorreu um erro ao cadastrar o usuario no banco de dados',
                ...err
            }
            return status
        }

        
    }

    public static async getUsuarioDB(id: number){
        try{
            const usuario = await knex('usuarios').where('id', id)
            return usuario
        }catch(err){
            return err
        }
    }

    public static async getUsuariosDB(){
        let usuarios
        try {
            usuarios = await knex('usuarios')
        } catch (err) {
            return err
        }
        
        return {
            total: usuarios.length,
            usuarios
        }
    }

    public async updateUsuariosDB(id: number){
        try {
            await knex('usuarios').where('id', id).update(this)
        } catch (err) {
            return err
        }

        return {
            message: 'Alteração feita com sucesso', 
            usuario: {id,...this}
        }
    }

    public static async deleteUsuarioDB(id: number){
        try {
            await knex('usuarios').where('id', id).del()
        } catch (err) {
            return err
        }

        return {message: 'Usuario deletado com sucesso'}
    }




    // get e set \\
    public get Nome() : string {
        return this.nome
    }

    public get Telefone() : string {
        return this.telefone
    }
    
    public get CPF() : string {
        return this.cpf
    }
    
    public get Email() : string {
        return this.email
    }

    public get CEP() : string {
        return this.cep
    }

    public get Senha() : string {
        return this.senha
    }
}