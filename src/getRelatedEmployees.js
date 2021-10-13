const data = require('../data/zoo_data');

const {
  employees,
} = data; // base de dados que irei trabalhar

// 1 - isManager - que será responsável por verificar se uma pessoa colaboradora
// é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;

function isManager(id) {
  if (employees.some((employee) => employee.managers.includes(id))) {
    return true;
  }
  return false;
}

// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

// * Se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error
// da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".
// throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
// para isso usaremos a função acima descrita que já faz o teste isManager

// * Bem nessa função você deve passar um id e deve retornar um array com o respectivo gerente daquele array passaqdo
// Como tem que retornar um array e filtrando o gerente pelo id passado a hof mais adequada é filter para usar nesses
// casos
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  // bem nesse ponto a função filter irá retornar um array com o gerente filtrado dentro
  const filterManager = employees.filter((employee) => employee.managers.includes(managerId));
  // já que filterManager é um array com um elemento filtrado por meio do managerId então utilizaremos
  // uma hof que pode iterar um array e retornar um array modificando com a saída que desejamos nesse caso
  // é a hof map
  return filterManager
    .map((filt) => `${filt.firstName} ${filt.lastName}`);
}

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = {
  isManager,
  getRelatedEmployees,
};
