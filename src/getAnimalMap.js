const data = require('../data/zoo_data');

const {
  species,
} = data; // base de dados que irei trabalhar

// Documentação:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// O método filter() cria um novo array com todos os elementos que
function seachMappíng() {
  const obj = {};
  const resultNE = species.filter((specie) => specie.location === 'NE').map((item) => item.name);
  const resultNW = species.filter((specie) => specie.location === 'NW').map((item) => item.name);
  const resultSE = species.filter((specie) => specie.location === 'SE').map((item) => item.name);
  const resultSW = species.filter((specie) => specie.location === 'SW').map((item) => item.name);
  obj.NE = resultNE;
  obj.NW = resultNW;
  obj.SE = resultSE;
  obj.SW = resultSW;
  return obj;
}
// {
// NE: [{
//   lions: ['Zena', 'Maxwell', 'Faustino', 'Dee']
// },
// {
//   giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard']
// },
// ],
// }

function seachIncludeNames(obj) {
  // const objeto = {};

  const resultNEFilter = species
    .filter((specie) => specie.location === 'NE').map((item) => item).map((item) => item.residents);

  for (let i = 0; i < resultNEFilter.length; i += 1) {
    console.log(resultNEFilter[i].residents);
  }
  // console.log(Object.keys(resultNEFilter));

  // resultNEFilter.filter((item) => item).filter((item) => item).filter((item)=>itemI);
  return resultNEFilter;
}

function getAnimalMap(options) {
  // console.log(options);
  if (!options || options.sex) return seachMappíng();
}
// Bem o Segundo testa que eu posso receber do meu usuário ou de alguma api
// o seguinte parâmetro que é um objeto com a seguinte estrutura {sex:'female'} e devo
// retornar a seguinte resposta depos de implementar minha fução que irá fazer essa busca
// na minha base de dados que em nosso caso é um objeto e deve retornar a seguite resposta
// de acordo com o test do jest
// const expected =
// {
//   NE: ['lions', 'giraffes'],
//   NW: ['tigers', 'bears', 'elephants'],
//   SE: ['penguins', 'otters'],
//   SW: ['frogs', 'snakes'],
// };

console.log(seachIncludeNames({
  includeNames: true,
}));
// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
// eslint-disable-next-line no-undef
// console.log(getAnimalMap({
//   sex: 'female',
// }));
// console.log(getAnimalMap({ includeNames:s false, sex: 'female' }));
// console.log(getAnimalMap());

module.exports = getAnimalMap;
