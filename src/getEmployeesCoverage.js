const data = require('../data/zoo_data');
// ***************************** */
// Contribuição:Alissandra Lima
// Link:https://github.com/tryber/sd-016-b-project-zoo-functions/pull/103/commits/7ca7ba22248d11359c0001c24c1439ad0014326a
// ***************************** */
const {
  employees,
} = data;
// **************************************************** /
// Solução: Ao ser chamada sem argumentos,
// deverá retornar um array com a cobertura
// de todas as pessoas funcionárias:
// ************************************************** */
//  MONTAR A ESTRUTURA DO OBJETO DENTRO DO LAÇO MAP
// ********************************************************************************************** /
// Test:Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias (2ms)
// ********************************************************************************************** /
const allModelBd = () => employees.map((object) => ({
  id: object.id,
  fullName: `${object.firstName} ${object.lastName}`,
  species: object.responsibleFor
    .map((id) => data.species
      .find((specie) => specie.id === id).name),
  locations: object.responsibleFor
    .map((id) => data.species
      .find((specie) => specie.id === id).location),
}));

// ********************************************************************************************* */
// Test:
// ✓  se o objeto de opções tiver a propriedade name retorna somente a pessoa correspondente (7ms)
// ✓ a propriedade name do objeto de opções também funciona usando o segundo nome (1ms)
// ✓ se o objeto de opções tiver a propriedade id retorna somente a pessoa correspondente (1ms)
// ********************************************************************************************* */
// {
//   id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
//   fullName: 'Sharonda Spry',
//   species: [ 'otters', 'frogs' ],
//   locations: [ 'SE', 'SW' ],
// }

function parameterIdDoesNotExist(buscar) {
  const bdModel = allModelBd();
  const result = bdModel
    .some((employee) => employee.id === buscar.id);
  if (result === false) {
    throw new Error('Informações inválidas');
  }
}

function parameterName(buscar) {
  const bdModel = allModelBd();
  const result = bdModel
    .find((employee) => employee.fullName.includes(buscar.name) || employee.id === buscar.id);
  if (result === undefined) {
    return parameterIdDoesNotExist(buscar);
  }
  return result;
}

function getEmployeesCoverage(objectCoverage) {
  if (!objectCoverage) {
    return allModelBd();
  }
  return parameterName(objectCoverage);
}
// Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias (2ms)
// eslint-disable-next-line spaced-comment
// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({
//   name: 'Sharonda',
// }));
// // console.log(parameterIdDoesNotExist({
// //   id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1P',
// // }));

// console.log(getEmployeesCoverage({
//   id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1T',
// }));
module.exports = getEmployeesCoverage;
