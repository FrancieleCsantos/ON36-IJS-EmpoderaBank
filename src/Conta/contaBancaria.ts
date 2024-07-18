interface ContaBancaria {
    numeroDaConta: number;
    saldo: number;
    depositar(valor: number): void;
    sacar(valor: number): boolean;
    transferir(valor: number, contaDestino: ContaBancaria): boolean;
}

abstract class ContaBancariaImpl implements ContaBancaria {

    constructor(
        public numeroDaConta: number,
        public saldo: number = 0
    ) { }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): boolean {
        if (valor <= this.saldo) {
            this.saldo -= valor
            return true
        }
        console.log("Saldo insuficiênte para realizar saque")
        return false
    }

    transferir(valor: number, contaDestino: ContaBancaria): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true
        }
        console.log("Saldo insuficiênte para completar transferência")
        return false
    }
}
export { ContaBancariaImpl };