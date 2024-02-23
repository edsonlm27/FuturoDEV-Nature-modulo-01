// [M1S05] Ex 4 - Soma de Elementos

// Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os
// elementos do array. Utilize o reduce para realizar a soma.

const prompt = require("prompt-sync")();
const numeros = [];

for (let i = 0; i < 5; i++) {
  numeros.push(
    parseInt(prompt("Digite 5 números (<Enter> após cada um deles): "))
  );
}
console.log("O array completo é:", numeros);

const resultado = numeros.reduce((soma, numAtual) => {
  return soma + numAtual;
}, 0);

console.log("A soma dos valores é:", resultado);
