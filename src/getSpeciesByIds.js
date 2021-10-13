const data = require('../data/zoo_data');

const {
  species,
} = data; // base de dados que irei trabalhar

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
console.log(getSpeciesByIds(species[0].id, species[1].id));

module.exports = getSpeciesByIds;
