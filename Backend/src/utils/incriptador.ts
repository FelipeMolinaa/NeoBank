import bcrypt from 'bcrypt'

export default class Encriptador{
    public static async encriptaSenha(senha: string){
        const salt = bcrypt.genSaltSync(10);
        const senhaCriptografada = bcrypt.hashSync(senha, salt)
        return senhaCriptografada
    }

    public static async comparaSenha(senha: string, senhaCriptografada: string){
        return bcrypt.compareSync(senha, senhaCriptografada)
    }
}