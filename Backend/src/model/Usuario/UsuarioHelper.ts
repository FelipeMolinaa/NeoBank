export default class UsuarioHelper{
    static verificaSeVazio(campos: string[]) : boolean{

        if(campos.find(campo => campo == '') == ''){
            return true
        }

        return false

    }
}