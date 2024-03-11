// [M1S07] Ex 7 - Criando classe Pessoa
// Crie uma nova classe chamada de Pessoa que deve ter os seguintes atributos:
// nome
// idade
// profissao
// Esta classe deve possuir um construtor para receber os valores para cada um dos atributos.

// [M1S07] Ex 8 - Criando classe Cliente
// Crie uma nova classe chamada de Cliente. Esta classe deve herdar a classe Pessoa.
// Além disso ela deve possuir os seguintes atributos:
// telefone
// email
// clienteDesde - deve ser uma string no formato “ANO-MES-DIA”
// Crie um construtor para receber os valores para todos os atributos da classe Cliente e
// também da classe Pessoa, sendo necessário passar parâmetros para o construtor base da
// classe Pessoa.

class Pessoa {
  nome;
  idade;
  profissao;

  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}

class Cliente extends Pessoa {
  telefone;
  email;
  clienteDesde;

  constructor(nome, idade, profissao, telefone, email, clienteDesde) {
    super(nome, idade, profissao);
    this.telefone = telefone;
    this.email = email;
    this.clienteDesde = clienteDesde;
  }
}

const clienteTeste = new Cliente(
  "Alessandra",
  27,
  "Designer",
  "48987654321",
  "alessandra@email.com",
  "2024-03-08"
);
console.log(clienteTeste);
