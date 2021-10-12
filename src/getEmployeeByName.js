const data = require('../data/zoo_data');

const {
  employees,
} = data; // base de dados que irei trabalhar

function getEmployeeByName(employeeName) {
  if (employeeName === undefined || employeeName === null || employeeName === '') return {};
  return employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}
console.log(getEmployeeByName(''));

module.exports = getEmployeeByName;
