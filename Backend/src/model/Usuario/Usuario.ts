export default class Usuario{
    private Nome: string;
    private Telefone: string;
    private CPF: string;
    private Email: string;
    private CEP: string;

    constructor(nome: string, telefone: string,CPF: string,email: string, CEP: string){
        this.Nome = nome
        this.Telefone = telefone
        this.CPF = CPF
        this.Email = email
        this.CEP = CEP
    }

    public get nome() : string {
        return this.Nome
    }
    public get telefone() : string {
        return this.Telefone
    }
    
    public get cpf() : string {
        return this.CPF
    }
    
    public get email() : string {
        return this.Email
    }

    public get cep() : string {
        return this.CEP
    }
}