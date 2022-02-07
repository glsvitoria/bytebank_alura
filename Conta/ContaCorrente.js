import { Conta } from "./Conta/Conta.js"

export class ContaCorrente extends Conta{
    /*=== ATRIBUTOS ESTÁTICOS ===*/
    static numeroDeContas = 0


    /*=== CONSTRUCTOR ===*/
    constructor(cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1
    }


    /*=== TRANSAÇÕES DO BANCO ===*/
    sacar(valor){
        let taxa = 1.1
        return super._sacar(valor, taxa)
    }
}