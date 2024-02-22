// [M1S05] Ex 2 - Adicionar e Remover Elementos

// Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array
// frutas. Em seguida, remova a primeira fruta do array. Imprima o array
// atualizado no console.

const prompt = require("prompt-sync")();
const frutas = [];

// Recebendo cada uma das frutas:
for (let i = 0; i < 3; i++) {
  let fruta = prompt(
    `Digite o nome da fruta ${i + 1} sem acento e sem caracteres especiais: `
  );
  frutas.push(fruta);
}
console.log("O array inicial é: ", frutas);
frutas.push(prompt("Digite mais uma fruta adicional: "));
frutas.shift();
console.log("O array atualizado é: ", frutas);
