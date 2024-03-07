// [M1S07] Ex 2 - Criando construtor da classe Produto

// Crie um construtor para a classe Produto que permita receber os valores base para cada um
// dos parâmetros.

class Produto {
  nome;
  preco;
  quantidade;

  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}
