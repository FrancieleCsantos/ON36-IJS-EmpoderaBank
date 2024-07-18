import {ContaBancariaImpl } from '../Conta/contaBancaria'

class ContaCorrente extends ContaBancariaImpl {
    constructor(
        numeroDaConta: number,
        saldo: number = 0,
        public limiteChequeEspecial: number = 0
    ) {
        super(numeroDaConta, saldo)
    }

    sacar(valor: number): boolean {
        if (valor <= this.saldo + this.limiteChequeEspecial) {
            this.saldo -= valor;

         return true;
        }
        console.log("Saldo insuficiênte para realizar saque")
        return false;
    }
}

export {ContaCorrente};