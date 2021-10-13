const data = require('../data/zoo_data');

const {
  employees,
} = data; // base de dados que irei trabalhar

function isManager(id) {
  console.log(id);
}

// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
console.log(isManager(employees[0].managers[0]));

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = {
  isManager,
  getRelatedEmployees,
};
