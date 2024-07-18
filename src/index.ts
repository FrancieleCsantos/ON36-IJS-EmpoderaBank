import { ClienteImpl } from './Cliente/cliente';
import { ContaCorrente } from './Conta/contaCorrente';

// Criando um cliente
const cliente1 = new ClienteImpl(
    'Maria da Silva',
    1,
    'Rua das Flores, 123',
    '1234-5678'
);

// Criando contas bancárias
const contaCorrente1 = new ContaCorrente(1001, 500, 1000);
const contaCorrente2 = new ContaCorrente(1002, 300, 500);

// Exibindo informações iniciais
console.log(`Cliente: ${cliente1.nomeCompleto}`);
console.log(`Conta 1 - Saldo Inicial: ${contaCorrente1.saldo}`);
console.log(`Conta 2 - Saldo Inicial: ${contaCorrente2.saldo}`);

// Depositando dinheiro
contaCorrente1.depositar(200);
console.log(`Conta 1 - Saldo após depósito: ${contaCorrente1.saldo}`);

// Sacando dinheiro
const saqueSucesso = contaCorrente1.sacar(600);
console.log(`Saque de 600 na Conta 1 ${saqueSucesso ? 'realizado com sucesso' : 'falhou'}`);
console.log(`Conta 1 - Saldo após saque: ${contaCorrente1.saldo}`);

// Transferindo dinheiro
const transferenciaSucesso = contaCorrente1.transferir(200, contaCorrente2);
console.log(`Transferência de 200 da Conta 1 para Conta 2 ${transferenciaSucesso ? 'realizada com sucesso' : 'falhou'}`);
console.log(`Conta 1 - Saldo após transferência: ${contaCorrente1.saldo}`);
console.log(`Conta 2 - Saldo após transferência: ${contaCorrente2.saldo}`);
