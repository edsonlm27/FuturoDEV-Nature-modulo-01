// [M1S06] Ex 4 - LocalStorage

// Crie uma função que irá pedir 3 informações através do prompt, o nome, a idade e o email.
// Monte essas informações em um objeto igual ao do exercício 03, após isso salve esse objeto
// com a chave “user” no localStorage.

let nome = prompt("Digite o seu nome: ", "Nome");
let idade = prompt("Digite a sua idade: ");
let cidade = prompt("Digite a sua cidade: ");

let pessoa = {
  name: nome,
  age: Number(idade),
  city: cidade,
};

let pessoaString = JSON.stringify(pessoa);

localStorage.setItem("user", pessoaString);
