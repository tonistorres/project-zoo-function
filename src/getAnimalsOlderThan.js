const data = require('../data/zoo_data');

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.
// arr.every(callback[, thisArgs

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

console.log(getAnimalsOlderThan('tigers', 12));
module.exports = getAnimalsOlderThan;
