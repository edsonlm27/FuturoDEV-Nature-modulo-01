// [M1S06] Ex 3 - Fetch API

// Crie um arquivo JSON chamado data.json com a seguinte estrutura interna:

// {
//   "nome": "João",
//   "idade": 30,
//   "email": "joao@example.com"
// }
// ‌
// Após isso, utilize a fetch API para obter o arquivo JSON e, em seguida, a resposta deve ser
// convertida para o formato JSON usando o método .json() . O conteúdo JSON deve ser então
// exibido na página HTML.

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((responseApi) => {
    responseApiString = JSON.stringify(responseApi);
    document.write(responseApiString);
  })
  .catch((error) => {
    console.log(error);
  });
