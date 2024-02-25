// [M1S05] Ex 5 - Ordenação Crescente

// Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros.
// Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.

const prompt = require("prompt-sync")();
const numerosOrdenados = [];

for (let i = 0; i < 5; i++) {
  numerosOrdenados.push(
    parseInt(prompt("Digite 5 números (<Enter> após cada um deles): "))
  );
}
console.log("O array completo é:", numerosOrdenados);

const resultado = numerosOrdenados.sort((a, b) => a - b);

console.log("O array ordenado é:", resultado);
