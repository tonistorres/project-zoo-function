const data = require('../data/zoo_data');

const {
  prices,
} = data; //

// ***********************
// 1ª Parte do Enunciado *
// ********************************************************************
// Esta função irá receber um array de visitantes no seguinte formato:
// *********************************************************************
// const entrants = [{
//     name: 'Lara Carvalho',
//     age: 5,
//   },
//   {
//     name: 'Frederico Moreira',
//     age: 5,
//   },
//   {
//     name: 'Pedro Henrique Carvalho',
//     age: 5,
//   },
//   {
//     name: 'Maria Costa',
//     age: 18,
//   },
//   {
//     name: 'Núbia Souza',
//     age: 18,
//   },
//   {
//     name: 'Carlos Nogueira',
//     age: 50,
//   },
// ];

// Você deve isolar a parte da lógica na função
// countEntrants que se encontra no mesmo arquivo
// da função calculateEntry. Ela deverá receber o
// array de visitantes e retornar um objeto com a
// contagem de acordo com os seguintes critérios de
// classificação
// * Pessoas com idade menor que 18 anos são classificadas como crianças (child);

function countEntrants(entrantsCount) {
  const obj = {};
  const resultChild = entrantsCount.filter((item) => item.age < 18).length;
  const resultAdult = entrantsCount.filter((item) => item.age >= 18 && item.age < 50).length;
  const resultSenior = entrantsCount.filter((item) => item.age >= 50).length;
  obj.child = resultChild;
  obj.adult = resultAdult;
  obj.senior = resultSenior;
  return obj;
}
// Documentando:
// O método Object.keys() retorna um array de propriedades
// enumeraveis de um determinado objeto, na mesma ordem em
// que é fornecida por um laço for...in (a diferença é que
// um laço for-in  enumera propriedades que estejam na cadeia
// de protótipos).
// Contribuição:Thauler - Turma 16 - Tribo B
// Assunto: Como pegar um objeto vazio e convertê-lo
// Num array e só então peguntar o tamanho desse array
// Usando o méto object keys para essa soluçao

function calculateEntry(entrantsEntry) {
  if (!entrantsEntry) return 0;
  if (Object.keys(entrantsEntry).length === 0) return 0;
  // nesse ponto eu passo o array passado por parâmentro pela FUNÇÃO PRINCIPAL: calculateEntry(entrantsEntry)
  // para a minha segunda função responsável por fazer o filtro dos grupos de pessoas
  // entrantes no zoologico bem como contar por faixa etária definida pelo projeto
  // quantas pessoas da respectiva faixa etárias são entrantes no zoologico. FUNÇÃO AUXILIAR:countEntrants(entrantsCount)
  // Saída de resultFilter: { child: 3, adult: 2, senior: 1 } um objeto chave valor
  // MENTORIA:[Trybe] Gian Fritsche - que me pediu para simplificar o problema não fazendo a soma abaixo de forma
  // dinâmica mais sim estática, pois, não era requesito do problema fazê-lo de forma dinâmica
  const resultFilter = countEntrants(entrantsEntry);
  const result = (resultFilter.adult * prices.adult)
    + (resultFilter.child * prices.child)
    + (resultFilter.senior * prices.senior);
  return result;
}

// 'retorna 0 se nenhum argumento for passado'
// console.log(calculateEntry());
// 'retorna 0 se um objeto vazio for passado'
// console.log(calculateEntry({}));
// console.log(calculateEntry(entrants));
// console.log(countEntrants(entrants));
// console.log(calculateEntry(entrants));

module.exports = {
  calculateEntry,
  countEntrants,
};
