// [M1S05] Ex 7 -

// Utilizando o array quadrados utilizado nos exercícios anteriores, crie um novo array chamado
// quadrados que contenha o quadrado de cada número do array quadrados. Imprima o array quadrados
// no console. Use o método map para realizar a criação de um novo array.

const prompt = require("prompt-sync")();
const quadrados = [];

for (let i = 0; i < 5; i++) {
  quadrados.push(
    parseInt(prompt("Digite 5 números (<Enter> após cada um deles): "))
  );
}
console.log("O array completo é:", quadrados);

const resultado = quadrados.map((quadrados) => {
  return quadrados * quadrados;
});

console.log("O quadrado dos valores é:", resultado);
