export class Cliente{
    /*=== GETTERS - CPF ===*/
    get cpf(){
        return this._cpf
    }


    /*=== CONSTRUCTOR ===*/
    constructor(nome, cpf, senha){
        this.nome = nome
        this._cpf = cpf
        this._senha = senha
    } 

    autenticar(){
        return true
    }
}