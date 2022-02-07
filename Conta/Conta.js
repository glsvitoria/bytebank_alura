export class Conta {
    /*== CONSTRUCTOR ===*/
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
        if(this.constructor == Conta){
            throw new Error("Você não deveria instaciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata")
        }
    }

    /*=== GETTERS E SETTERS - CLIENTE ===*/
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente
    }


    /*=== GETTERS - SALDO ===*/
    get saldo(){ 
        return this._saldo
    }


    /*=== TRANSAÇÕES DO BANCO ===*/
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado

            return valorSacado
        }

        return 0;
    }
    
    depositar(valor){
        if(valor <= 0){
            return;
        }

        this._saldo += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}