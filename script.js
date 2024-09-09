let filmes = [
  {
    titulo: "Harry Potter e a Pedra Filosofal",
  descricao: "Descobrindo ser um bruxo, Harry Potter embarca em uma aventura em Hogwarts para impedir que Lord Voldemort obtenha a Pedra Filosofal e a imortalidade.",
  link: "https://harrypotter.fandom.com/pt-br/wiki/Pedra_Filosofal",
  tags: "pedra filosofal feitiço proibido magia escola de magia",
  },
  {
    titulo: "Harry Potter e a Câmara Secreta",
    descricao:
      "Em 'Harry Potter e a Câmara Secreta', o segundo livro da saga escrita por J.K. Rowling, Harry Potter retorna para Hogwarts, a Escola de Magia e Bruxaria, para mais um ano repleto de aventuras e mistérios. No entanto, algo sinistro paira sobre o castelo: a lenda da Câmara Secreta, um lugar onde um monstro aterroriza os alunos trouxas (não-magos).",
    link: "https://harrypotter.fandom.com/pt-br/wiki/C%C3%A2mara_Secreta",
    tags: "basilisco cobra tom riddle canos"
  },
  {
    titulo: "Harry Potter e o Prisioneiro de Azkaban",
    descricao: "Um prisioneiro de Azkaban escapa e Harry e seus amigos descobrem que ele pode ser inocente.",
    link: "https://harrypotter.fandom.com/pt-br/wiki/Prisioneiro_de_Azkaban",
    tags: "dementor mapa do maroto Sirius Black Remus Lupin patrono vira-tempo vira tempo",
  },
  {
    titulo: "Harry Potter e o Cálice de Fogo",
    descricao:
      "Em 'Harry Potter e o Cálice de Fogo', Harry Potter é misteriosamente inscrito no Torneio Tribruxo, uma competição mágica entre três das maiores escolas de magia da Europa. Acompanhe Harry em uma jornada repleta de desafios e perigos enquanto ele luta para sobreviver.",
    link: "https://harrypotter.fandom.com/pt-br/wiki/C%C3%A1lice_de_Fogo",
    tags: "labirinto desafios provas baile de inverno"
  },
  {
    titulo: "Harry Potter e a Ordem da Fênix",
    descricao: "Com Voldemort de volta ao poder, Harry lidera um exército de estudantes para aprender a se defender contra as Artes das Trevas.",
    link: "https://harrypotter.fandom.com/pt-br/wiki/Ordem_da_F%C3%A9nix",
    tags: "ministério da magia umbridge exército de dumbledore",
  },
  {
    titulo: "Harry Potter e o Enigma do Príncipe",
    descricao:
      "Em 'Harry Potter e o Enigma do Príncipe', Lord Voldemort intensifica sua busca pelo poder, e Harry e seus amigos devem se preparar para a batalha final. Descubra os segredos do passado de Voldemort e ajude Harry a desvendar o enigma do Príncipe Mestiço.",
    link: "https://harrypotter.fandom.com/pt-br/wiki/Enigma_do_Pr%C3%ADncipe",
    tags: "snape dumbledore regulus black horcrux horcruxes"
  },
  {
    titulo: "Harry Potter e as Relíquias da Morte - Parte 1",
  descricao: "Com Voldemort no poder, Harry e seus amigos embarcam em uma perigosa missão para encontrar e destruir as Horcruxes, as partes da alma de Voldemort.",
  link: "https://harrypotter.fandom.com/pt-br/wiki/Rel%C3%ADquias_da_Morte_-_Parte_1",
  tags: "horcrux relíquias da morte fuga ordem da fenix",
  },
  {
    titulo: "Harry Potter e as Relíquias da Morte - Parte 2",
  descricao: "A batalha final entre o bem e o mal se aproxima. Harry Potter enfrenta Lord Voldemort em uma batalha épica para salvar o mundo mágico.",
  link: "https://harrypotter.fandom.com/pt-br/wiki/Rel%C3%ADquias_da_Morte_-_Parte_2",
  tags: "batalha de hogwarts horcrux relíquias da morte",
  }
];

function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML =
      "<p class='sem-resultados'>Nada foi encontrado, digite alguma palavra.</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of filmes) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
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
    resultados = "<p class='sem-resultados'>Nada foi encontrado.</p>";
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}
let campoPesquisa = document.getElementById("campo-pesquisa");

campoPesquisa.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        pesquisar();
    }
});
