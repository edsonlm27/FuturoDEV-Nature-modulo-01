// [M1S06] Ex 1 - Promisse

// Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa
// as validações dentro de uma promise para que caso seja uma par retorne para o then a
// mensagem: "Número validado é par”.

// Caso o valor seja ímpar, retorne para o catch a mensagem: “Error: número informado é impar”.

// OBS: Se for par ele deve chamar o “resolve”, se não for par ele irá chamar o “reject”.
// Não esqueça de enviar a mensagem como parâmetro

let promise = new Promise((resolve, reject) => {
  function verificarParidadeNumero(numero) {
    if (numero % 2 == 0) {
      resolve("Número validado é par.");
    } else {
      reject("Número informado é ímpar.");
    }
  }
  verificarParidadeNumero(4);
});

promise
  .then((mensagem) => {
    document.write("Mensagem sucesso: " + mensagem);
  })
  .catch((mensagem) => {
    document.write("Error: " + mensagem);
  });
