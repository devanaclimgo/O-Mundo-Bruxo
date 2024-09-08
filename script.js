let filmes = [
  {
    titulo: "Harry Potter e a Câmara Secreta",
    descricao:
      "Em 'Harry Potter e a Câmara Secreta', o segundo livro da saga escrita por J.K. Rowling, Harry Potter retorna para Hogwarts, a Escola de Magia e Bruxaria, para mais um ano repleto de aventuras e mistérios. No entanto, algo sinistro paira sobre o castelo: a lenda da Câmara Secreta, um lugar onde um monstro aterroriza os alunos trouxas (não-magos).",
    link: "https://harrypotter.fandom.com/pt-br/wiki/C%C3%A2mara_Secreta",
  },
  {
    titulo: "Harry Potter e o Cálice de Fogo",
    descricao:
      "Em 'Harry Potter e o Cálice de Fogo', Harry Potter é misteriosamente inscrito no Torneio Tribruxo, uma competição mágica entre três das maiores escolas de magia da Europa. Acompanhe Harry em uma jornada repleta de desafios e perigos enquanto ele luta para sobreviver.",
    link: "https://harrypotter.fandom.com/pt-br/wiki/C%C3%A1lice_de_Fogo",
  },
  {
    titulo: "Harry Potter e o Enigma do Príncipe",
    descricao:
      "Em 'Harry Potter e o Enigma do Príncipe', Lord Voldemort intensifica sua busca pelo poder, e Harry e seus amigos devem se preparar para a batalha final. Descubra os segredos do passado de Voldemort e ajude Harry a desvendar o enigma do Príncipe Mestiço.",
    link: "https://harrypotter.fandom.com/pt-br/wiki/Enigma_do_Pr%C3%ADncipe",
  },
];

function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML =
      "<p>Nada foi encontrado.</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of filmes) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      // cria um novo elemento
      resultados += `
      <div class="item-resultados">
        <h2>${dado.titulo}</h2>
        <p>${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações ↗</a>
      </div>
      `;
    }
  }
  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }
  
  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}

