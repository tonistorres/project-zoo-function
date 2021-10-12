const data = require('../data/zoo_data');

const {
  species,
} = data; // base de dados que irei trabalhar

function getSpeciesByIds(...ids) {
  const arrayObj = [];
  for (let i = 0; i < species.length; i += 1) {
    for (let j = 0; j < ids.length; j += 1) {
      if (species[i].id === ids[j]) {
        arrayObj.push(species[i]);
      }
    }
  }
  return arrayObj;
}

// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
console.log(getSpeciesByIds(species[0].id, species[1].id));

module.exports = getSpeciesByIds;
