// Você foi contratado por um supermercado para catalogar a compra de uma cliente.
// Assim que a aplicação começa deverá ser perguntado em um prompt qual produto o
// cliente deseja comprar, só serão aceitas as seguintes respostas:

// (1)Hortifruti
// (2)Laticínios
// (3)Carnes
// (4)Peixes
// (5)Aves
// (6)Fechar pedido

// Após fazer a seleção do produto pergunte a quantidade de itens que o cliente irá comprar.
// Apenas se o cliente selecionar a opção 6 é que a pergunta deverá parar de ser repetida.
// Ao selecionar a opção 6 imprima o produto que o cliente pegou em maior quantidade.

let somaProdutos = [0, 0, 0, 0, 0];
let opção;

do {
  opção = parseInt(
    prompt(
      "Qual produto deseja comprar (opções)? (1)Hortifruti (2)Laticínios (3)Carnes (4)Peixes (5)Aves (6)Fechar pedido"
    )
  );

  if (opção < 1 || opção > 6) {
    alert("Você selecionou uma opção inválida. A opção deve ser entre 1 e 6");
    break;
  }

  if (opção === 6) {
    break;
  }

  let quantidade = parseInt(
    prompt("Informe quantas unidades do produto deseja comprar: ")
  );

  somaProdutos[opção - 1] += quantidade;
} while (opção != 6);
{
  if (somaProdutos.length === 0) {
    alert("Não foi comprado nenhum produto!");
  } else {
    let maiorQuantidade = 0;
    let indiceMaiorQuantidade = 0;

    for (let i = 0; i < somaProdutos.length; i++) {
      if (somaProdutos[i] > maiorQuantidade) {
        maiorQuantidade = somaProdutos[i];
        indiceMaiorQuantidade = i;
      }
    }
    switch (indiceMaiorQuantidade + 1) {
      case 1:
        nomeDoProduto = "Hortifruti";
        break;
      case 2:
        nomeDoProduto = "Laticínios";
        break;
      case 3:
        nomeDoProduto = "Carne";
        break;
      case 4:
        nomeDoProduto = "Peixes";
        break;
      case 5:
        nomeDoProduto = "Aves";
        break;

      default:
        break;
    }
  }
  alert(`O produto com maior quantidade é ${nomeDoProduto}`);
}
