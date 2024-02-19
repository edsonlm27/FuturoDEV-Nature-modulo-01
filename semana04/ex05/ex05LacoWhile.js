// Utilizando um while, repita uma mini entrevista com 4 usuários perguntando qual a
// nota para avaliação da série "Stranger Things”, será apenas aceita três tipos de
// avaliação: ruim, bom e excelente. Depois verifique quantas pessoas classificaram
// a série como ruim.

let avalRuim = 0;
let contador = 1;
while (contador < 5) {
  let avaliacao = prompt(
    "Qual a sua avaliação da série 'Stranger Things'? (bom), (ruim), (excelente)"
  );
  if (avaliacao == "ruim") {
    avalRuim++;
  }
  contador++;
}

console.log(
  `Total de entrevistados que avaliou a série como ruim: ${avalRuim}`
);
