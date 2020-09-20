export interface contaProps {
    id: number,
    idUsuario: number,
    nomeConta: string,
    numeroConta: string,
    codigoSeguranca: string,
    validade: string,
    saldo: string,
    limite: string
}

export interface contaPropsUserName {
    nome: string,
    conta:{
        id: number,
        idUsuario: number,
        nomeConta: string,
        numeroConta: string,
        codigoSeguranca: string,
        validade: string,
        saldo: string,
        limite: string,
        nome: string
    } 
}