import knex from '../../database/connection'
const quantidadeCaracteres = 10000;
export default class HelperConta{

    public static generateDataExpedicao(){
        const data = new Date()
        let dataFormatada;
        const anoFormatado = data.getFullYear().toString().substr(-2)
        if(data.getMonth().toString().length == 1){
            dataFormatada = "0" + (data.getMonth() + 1)
        }else{
            dataFormatada = (data.getMonth() + 1)
        }
        const dataString = `${dataFormatada}/${anoFormatado}`
        return dataString
    }

    public static generateCodigoSeguranca(){
        while(true){
            const codigo = Math.trunc(Math.random() * quantidadeCaracteres).toString()
            if(codigo.length == 3){
                return Number(codigo)
            }
        }
    }

    public static async generateNumeroConta(){
        while(true){
            const primeriosDigitos = Math.trunc(Math.random() * quantidadeCaracteres).toString()
            const ultimosDigitos = Math.trunc(Math.random() * quantidadeCaracteres).toString()
            if(primeriosDigitos.length !== 4 || ultimosDigitos.length !== 4){
                continue;
            }
            const numeroConta = primeriosDigitos + "-" + ultimosDigitos
    
            const resultado = await knex('contas').where('numeroConta', numeroConta).first()

            if(resultado === undefined){
                const numeroConta = (primeriosDigitos + "-" + ultimosDigitos)
                return numeroConta
            }
        }
    }
}
