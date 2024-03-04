// [M1S06] Ex 6 - Projeto (parte 1)
// Para treinar um pouco mais requisições fetch inicie uma comunicação com a API via cep
// (Documentação - ViaCEP - Webservice CEP e IBGE gratuito ).
// OBS:
// - Crie uma página html para imprimir o endereço através do cep.
// - Utilize este endpoint: https://viacep.com.br/ws/{cep_informado}/json
// - Caso a api retorne sucesso imprima em um alert o endereço formatado da seguinte forma:
//     “logradouro, complemento - bairro - localidade/uf”
// - o cep_informado será passado por prompt pelo usuário.

// [M1S06] Ex 7 - Projeto (parte 2)
// Continuando o exercício 06 iremos além de informar através do alert o endereço informado
// pelo cep iremos perguntar também se os dados informados estão corretos, caso esteja tudo
// correto salve esses dados no localStorage na chave “endereco”.
// OBS: Revise o conteudo do localStorage para relembrar o comando para salvar no localStorage.

// [M1S06] Ex 8 - Projeto (parte 3)
// Para validar ainda mais o mini projeto criado a partir dos exercícios 06 e 07 iremos adaptar
// melhor nossa aplicação. Antes de tudo, assim que executar a aplicação você irá verificar no
// localStorage se já existe a chave “endereco” caso haja, deverá ser informado que já existe
// um endereço na nossa base de dados e se o usuário deseja fazer uma nova requisição para um
// novo endereço, após disponibilizar o prompt para a captura do novo cep, salve os dados na
// mesma chave “endereco” existente no localStorage. Caso não haja a chave o fluxo deve ser
// feito como no exercício 06 e 07, ou seja, você irá capturar o cep pelo prompt, fazer a
// requisição, e salvar os dados no localStorage.

// OBS: Lembre-se dos comandos para criar ou editar e pegar um item no Local Storage.

let endereco = localStorage.getItem("endereco");

if (endereco == null) {
  cadastrarEndereco();
} else {
  let atualizacao = prompt(
    "O endereço já foi informado na base de dados. Deseja alterar? S/N"
  );

  if (atualizacao == "S") {
    cadastrarEndereco();
  } else {
    alert("Execução finalizada!");
  }
}

function cadastrarEndereco() {
  let cep = prompt("Digite o seu CEP: ");
  const infos = { method: "GET" };

  fetch(`https://viacep.com.br/ws/${cep}/json/`, infos)
    .then((retornoFetch) => {
      return retornoFetch.json();
    })
    .then((retornoApi) => {
      // “logradouro, complemento - bairro - localidade/uf”
      alert(
        `${retornoApi.logradouro}, ${retornoApi.complemento} - ${retornoApi.bairro} - ${retornoApi.localidade}/${retornoApi.uf}`
      );

      let confirmacao = prompt("Os dados informados estão corretos?");

      if (confirmacao.toLowerCase() == "sim") {
        localStorage.setItem("endereco", JSON.stringify(retornoApi));
      }
    });
}
