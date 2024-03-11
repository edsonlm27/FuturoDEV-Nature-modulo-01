// [M1S07] Ex 3 - Criando método Vender
// Crie um método para a classe Produto chamado de Vender().
// Este método deve receber como parâmetro a quantidade vendida e deve reduzir (deduzir) da
// quantidade do produto. Porém, para ser possível essa venda a quantidade vendida não pode
// ser maior que a quantidade disponível.
// Caso não haja quantidade suficiente, exiba uma mensagem de “Estoque insuficiente”.

// [M1S07] Ex 4 - Criando método Repor
// Crie um método chamado Repor() dentro da classe Produto.
// Este método deve receber como parâmetro a quantidade reposta e adicionar o montante à
// quantidade do produto.

// [M1S07] Ex 5 - Criando método MostrarEstoque
// Crie um método chamado de MostrarEstoque() dentro da classe Produto.
// Este método deve exibir uma mensagem parecida com a seguinte:
// “O produto CANETA BIC AZUL possui 5 unidades disponíveis”

// [M1S07] Ex 6 - Criando método AtualizarPreco
// Crie um método chamada de AtualizarPreco dentro da classe Produto.
// Este método deve receber como parâmetro o novo valor do produto e atualizar o preço atual.

class Produto {
  nome;
  preco;
  quantidade;

  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  Vender(qtdVendida) {
    if (this.quantidade < qtdVendida) {
      console.log("Estoque insuficiente");
      console.log(`A quantidade de ${produto.nome} é ${produto.quantidade}`);
    } else {
      this.quantidade = this.quantidade - qtdVendida;
    }
  }

  Repor(qtdReposta) {
    this.quantidade += qtdReposta;
  }

  MostrarEstoque() {
    console.log(
      `O produto ${produto.nome} possui ${produto.quantidade} unidades disponíveis`
    );
  }

  AtualizarPreco(novoPreco) {
    this.preco = novoPreco;
  }
}

// Instanciando e testando:
let produto = new Produto("caderno", 20, 5);
produto.Vender(3);
produto.Repor(8);
produto.MostrarEstoque();
produto.AtualizarPreco(25);
console.log(`O preco atual do produto ${produto.nome} é ${produto.preco} `);
