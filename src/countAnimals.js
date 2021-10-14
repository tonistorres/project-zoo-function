const data = require('../data/zoo_data');

const {
  species,
} = data; // base de dados que irei trabalhar

// ****************************************************** /
// COMO PARTE DA SOLUÇÃO IREI UTILIZAR O MÉTODO FOREACH
// ******************************************************* /
// O método forEach() executa uma dada função em cada elemento de um array.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// ***********************************************************
// Sintaxe:arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
// Retorno:undefined.
// *************************************************************************************
// Se nenhum argumento for passado, retorna um objeto
// cujo o nome de cada espécie é uma chave desse objeto,
// e o total de animais dessa espécie é o seu valor;
// *************************************************************************************
// CONTRIBUIÇÃO MENTORIAS: THALES E ZEZE ;
// CONTRIBUIÇÃO COLEGAS DE CLASSE: Visualização do Problema - Gabriel Pinheiro.
// *********************************************************************************** */

const parameterNull = () => {
  const objeto = {};
  species.forEach((specie) => {
    objeto[`${specie.name}`] = specie.residents.length;
  });
  return objeto;
};

// Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
const passOjectParameter = (obj) => {
  const retorno = species
    .find((specie) => specie.name === obj.specie).residents.length;
  return retorno;
};

// Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino.
const passObjectSexParameter = (obj) => {
  const retorno = species
    .find((specie) => specie.name === obj.specie).residents
    .filter((item) => item.sex === obj.sex).length;
  return retorno;
};

// FUNÇÃO PRINCIPAL

function countAnimals(animal) {
  if (!animal) {
    return parameterNull();
  }
  if (!animal.sex) {
    return passOjectParameter(animal);
  }
  return passObjectSexParameter(animal);
}

// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
// console.log(countAnimals());
// console.log(passOjectParameter({
//   specie: 'penguins',
// }));
// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
// console.log(passOjectParameter({
//   specie: 'giraffes'
// }));

// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
