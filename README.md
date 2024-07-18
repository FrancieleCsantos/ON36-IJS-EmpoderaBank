# Empodera Bank

Empodera Bank é uma solução bancária desenvolvida para apoiar o crescimento de negócios liderados por mulheres, oferecendo crédito e suporte financeiro. O sistema é projetado para gerenciar contas bancárias e clientes, proporcionando funcionalidades como depósitos, saques e transferências de forma eficiente e segura.

## Estrutura do Projeto (Andamento Semana 02)

### Interfaces e Classes - (Criadas na semana 02)

- **Cliente**
  
  - **Propriedades**

    - `nomeCompleto`: Nome completo do cliente.
    - `id`: Identificador único do cliente.
    - `endereco`: Endereço do cliente.
    - `telefone`: Número de telefone do cliente.

- **ClienteImpl**

  - Implementa a interface `Cliente`.
  - **Construtor**:
    - `nomeCompleto`
    - `id`
    - `endereco`
    - `telefone`

- **ContaBancaria**

  - Define a interface para operações bancárias básicas.
  - **Propriedades**:
    - `numeroDaConta`: Número da conta bancária.
    - `saldo`: Saldo atual da conta.
  - **Métodos**:
    - `depositar(valor: number)`: Deposita um valor na conta.
    - `sacar(valor: number)`: Saca um valor da conta. Retorna `true` se o saque for bem-sucedido, `false` caso contrário.
    - `transferir(valor: number, contaDestino: ContaBancaria)`: Transfere um valor para outra conta. Retorna `true` se a transferência for bem-sucedida, `false` caso contrário.

- **ContaBancariaImpl**

  - Implementa a interface `ContaBancaria`.
  - **Construtor**:
    - `numeroDaConta`
    - `saldo` (opcional, padrão: 0)
  - **Métodos**:
    - `depositar(valor: number)`: Implementação padrão de depósito.
    - `sacar(valor: number)`: Implementação padrão de saque.
    - `transferir(valor: number, contaDestino: ContaBancaria)`: Implementação padrão de transferência.

- **ContaCorrente**

  - Estende `ContaBancariaImpl` para representar uma conta corrente com limite de cheque especial.
  - **Propriedades**:
    - `limiteChequeEspecial`: Limite de cheque especial da conta.
  - **Construtor**:
    - `numeroDaConta`
    - `saldo` 
    - `limiteChequeEspecial` 
  - **Método sobrescrito**:
    - `sacar(valor: number)`: Permite saques além do saldo disponível, considerando o limite de cheque especial.
