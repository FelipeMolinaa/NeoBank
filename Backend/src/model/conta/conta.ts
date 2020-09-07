import knex from '../../database/connection'
import HelperConta from './contaHelper'
import ContaDAO from './contaDAO'

export default class Conta{
    id?: number;
    idUsuario?: number;
    numeroConta?: string;
    codigoSeguranca?: number;
    dataExpedicao?: string
    saldo?: number;
    limite?: number;

    constructor(){
        
    }

    public async novaConta(idUsuario: number){
        this.idUsuario = idUsuario
        this.saldo = 0;
        this.limite = 300;
        this.dataExpedicao = HelperConta.generateDataExpedicao()
        await this.redefinirCodigosCartao()
    }

    public async resgataConta(id: number){
        this.id = id
        const contaDAO = new ContaDAO(this);
        await contaDAO.getContaDB().then(dados =>{
            this.numeroConta = dados.numeroConta;
            this.idUsuario = dados.idUsuario;
            this.limite = dados.limite;
            this.dataExpedicao = dados.dataExpedicao;
            this.saldo = Number(dados.saldo);
            this.codigoSeguranca = dados.codigoSeguranca
        })  
    }

    public async redefinirCodigosCartao(){
        this.codigoSeguranca = HelperConta.generateCodigoSeguranca()
        await HelperConta.generateNumeroConta().then(valor =>{
            this.numeroConta = valor
        })
    }

    public async transferir(conta: Conta, valor: number){
        if(this.saldo !== undefined && conta.saldo !== undefined && this.limite !== undefined){
            if((this.saldo - valor) >= -this.limite){
                this.saldo -= valor;
                conta.saldo += valor;

                const contaEnvia = new ContaDAO(this)
                const contaRecebe = new ContaDAO(conta)

                try{
                    contaEnvia.updateContaDB()
                    contaRecebe.updateContaDB()
                }catch(err){
                    return {mensagem: "erro ao fazer a tranferencia"}
                }

                return {mensagem: "Tranferencia feita com sucesso!!!", conta: this}
            }else{

                return {mensagem:'O valor de transferencia supera o limite da conta'}
            }
        }else{
            return 'erro'
        }
    }
}