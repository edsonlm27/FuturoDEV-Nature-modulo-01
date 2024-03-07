// [M1S06] Ex 5 - Fetch API

// Construa uma comunicação com a fetch API para a url
// (https://api.thecatapi.com/v1/images/search?limit=10 ).
// em um document.write todas as imagens com a seguinte formatação:
// “<img src=’${url_da_imagem}’/> <br />”

// OBS:
// - Para fazer a interação pela lista utilize forEach ou o laço for of.
// - A ideia será passar pelo array apenas para pegar a url_da_imagem e ir imprimindo em um
//     document.write() a tag com a formatação dada acima.
// - a url_da_imagem virá em cada objeto dentro do array na propriedade url.
// - Para acessar a documentação da API acesse: Report Wrapper - Report Dashboards
// - (opcional) Caso queira uma visualização melhor coloque na tag img o atributo width:
// Ex: width='200'

const infos = { method: "GET" };

fetch("https://api.thecatapi.com/v1/images/search?limit=10", infos)
  .then((response) => {
    return response.json();
  })
  .then((responseApi) => {
    responseApi.forEach((image) => {
      document.write(`<img src='${image.url}' width='200'/> <br/>`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
