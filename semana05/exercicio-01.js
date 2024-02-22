// [M1S05] Ex 1 - Acesso simples

// Crie um array chamado frutas contendo três frutas diferentes. Em seguida,
// imprima no console a segunda fruta do array.

// Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.

const prompt = require("prompt-sync")();
const frutas = [];

// Recebendo cada uma das frutas:
for (let i = 0; i < 3; i++) {
  let fruta = prompt(
    `Digite o nome da fruta ${i + 1} sem acento e sem caracteres especiais: `
  );
  frutas.push(fruta);
}
console.log("Segunda fruta do array:", frutas[1]);
