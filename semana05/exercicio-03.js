// [M1S05] Ex 3 - Iteração Básica

// Crie um array chamado numeros contendo cinco números inteiros. Utilize um loop
// for para imprimir cada número do array no console.

// Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.

const prompt = require("prompt-sync")();
const numeros = [];

for (let i = 0; i < 5; i++) {
  numeros.push(
    parseInt(prompt("Digite 5 números (<Enter> após cada um deles): "))
  );
}

for (const numero of numeros) {
  console.log(numero);
}

console.log("O array completo é:", numeros);
