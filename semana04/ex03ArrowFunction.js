// Crie uma arrow function que recebe um array de números e calcula a média deles.
// OBS: para pegar o tamanho de um array use nomeDoArray.length

const lista = (array) => {
  let soma = 0;
  for (let numero of array) {
    soma += numero; // soma = soma + numero
  }
  let media = soma / array.length;
  return media;
};

let arrayNumeros = [10, 5, 8, 7];
console.log(lista(arrayNumeros));
