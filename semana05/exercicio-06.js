// [M1S05] Ex 6 - Filtragem de Elementos

// Crie um array chamado pares que contenha apenas os números pares do array pares criado
// nos exercícios anteriores. Em seguida, imprima esse novo array no console. Utilize o método
// filter para realizar a operação de filtragem.

const prompt = require("prompt-sync")();
const pares = [];

for (let i = 0; i < 5; i++) {
  pares.push(
    parseInt(prompt("Digite 5 números (<Enter> após cada um deles): "))
  );
}
console.log("O array completo é:", pares);

const resultado = pares.filter((n) => {
  return n % 2 == 0;
}, 0);

console.log("O(s) valor(es) par(es) é(são):", resultado);
