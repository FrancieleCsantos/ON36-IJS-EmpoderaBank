interface ContaBancaria{
    numerDaConta: number;
    saldo: number;
    depositar(valor: number): void;
    sacar(valor: number):boolean;
    transferir(valor: number, contaDestino:ContaBancaria):boolean;
}

