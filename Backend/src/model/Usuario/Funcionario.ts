import Usuario from './Usuario'

export class Funcionario extends Usuario{
    private salario: number

    constructor(salario: number, nome: string, telefone: string,CPF: string,email: string, CEP: string){
        super(nome, telefone, CPF, email, CEP);
        this.salario = salario
    }

    public set Promoção(valor: number){
        this.salario += valor
    }


    public get Salario() : number {
        return this.salario
    }
    
    public get SalarioToString() : string {
        return this.salario + "N¢"
    }

}