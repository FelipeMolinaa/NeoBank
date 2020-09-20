import contaDAO from "../../DAOController/contaDAO"
import bcrypt from '../../utils/incriptador'

export default class ContaHelper{

    public static async geraNumeroConta(quantidadeNumero: number){
        let Numeros: string[] = []
        let numeroControle = '1';
        for(let i = 1; i <= quantidadeNumero; i ++){
            numeroControle += '0'
        }

        while(true){
            let parteNumero = Math.trunc(Math.random() * Number(numeroControle))
            if(parteNumero >= 1000){
                Numeros.push(String(parteNumero))
                if(Numeros.length == 4){
                    const numeroFormatado = 
                        `${Numeros[0]}-${Numeros[1]}-${Numeros[2]}-${Numeros[3]}`
                    const existeDB = await contaDAO.getContaByNumeroConta_DB(numeroFormatado)

                    if(existeDB){
                        return String(numeroFormatado)
                    }
                }
            }
        }   
    }

    public static async geraSenhaConta(quantidadeNumero: number){
        let numeroControle = '1';
        for(let i = 1; i <= quantidadeNumero; i ++){
            numeroControle += '0'
        }

        while(true){
            const senha = Math.trunc(Math.random() * Number(numeroControle))
            if(senha >= 100){
                return String(senha)
            }
        }
    }

    public static async getDataFormatada(){
        const data = new Date()
        const mes = data.getMonth() + 1
        const mesFormatado = (String(mes).length == 2) ? (mes) : ('0' + mes)
        const ano = String(data.getFullYear()+7)
        return `${mesFormatado}/${(ano.slice(-2))}`
    }
}