const data = require('../data/zoo_data');
// ************************************************************************************* */
// Contribuição: https://github.com/tryber/sd-016-b-project-zoo-functions/pull/53/commits/dbcdf3216f17646ba9ad1de47ca7560a7f5c7c9e
// Gabriel Pinheiro
// Israel Santana
// ***************************************************************************************

const {
  species,
  employees,
} = data;

// **************************************************************************** */
// Passando ID do Funcionario: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'
// Retorno: O primeiro animal que faz parte dos cuidados do gerente(funcionario)
// *******************************************************************************
// Saída : 0938aa23-f153-4937-9f88-4858b24d6bce
function filterEmployees(idFuncionario) {
  const returnFirstAnimal = employees.find((item) => item.id === idFuncionario).responsibleFor[0];
  return returnFirstAnimal;
}

// ************************************* */
// passando ID do Animal:['0938aa23-f153-4937-9f88-4858b24d6bce']
// Retornar:um array com nome, sexo e idade do animal mais velho dessa espécie
// *****************************************************************************
// Saída sem utilizar o método sort:
// ****************************************************************************
// [ { name: 'Zena', sex: 'female', age: 12 },
//   { name: 'Maxwell', sex: 'male', age: 15 },
//   { name: 'Dee', sex: 'female', age: 14 } ]
// ****************************************************************************
// Saída pedida pelo Projeto: Retornar um array com o [nome,idade,sexo] do
// animal mais velho:{ name: 'Maxwell', sex: 'male', age: 15 }
// *****************************************************************************
function findOldest(idAnimal) {
  const oldAnimal = species.find((specie) => specie.id === idAnimal).residents
    .sort((a, b) => b.age - a.age)[0];
  return oldAnimal;
}
// *********************************************************************** */
// Comentando a função getOldestFromFirstSpecies. Pontos a Serem Observados:
// **************************************************************************
// 1º Ponto: A Função getOldestFromFirstSpecies(idEmployee)
// recebe em seu parâmetro um ID de um funcionario qualquer. Para esse exercício
// em específico ele virá no formato de string.
//

function getOldestFromFirstSpecies(idEmployee) {
  // Utilizar um object entries porque o exercício pede um retorno como array de um objejto
  const result = Object.values(findOldest(filterEmployees(idEmployee)));
  return result;
}

// **************************************************************************** */
// Passando ID do Funcionario: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'
// Retorno: O primeiro animal que faz parte dos cuidados do gerente(funcionario)
// *******************************************************************************
// console.log(filterEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

// eslint-disable-next-line sonarjs/no-use-of-empty-return-value

// ************************************* */
// passando ID do Funcionario = ['c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1']
// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

// ************************************* */
// passando ID do Animal:['0938aa23-f153-4937-9f88-4858b24d6bce']
// Retornar:um array com nome, sexo e idade do animal mais velho dessa espécie
// *****************************************************************************
// Saída sem utilizar o método sort:
// ****************************************************************************
// [ { name: 'Zena', sex: 'female', age: 12 },
//   { name: 'Maxwell', sex: 'male', age: 15 },
//   { name: 'Faustino', sex: 'male', age: 7 },
//   { name: 'Dee', sex: 'female', age: 14 } ]
// ****************************************************************************
// Saída pedida pelo Projeto: Retornar um array com o [nome,idade,sexo] do
// animal mais velho:{ name: 'Maxwell', sex: 'male', age: 15 }
// *****************************************************************************
// console.log(compare('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getOldestFromFirstSpecies;
