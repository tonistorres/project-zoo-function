const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const ottersId = '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae';
const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
const snakesId = '78460a91-f4da-4dea-a469-86fd2b8ccc84';
const frogsId = '89be95b3-47e4-4c5b-b687-1fabf2afa274';
const bearsId = 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d';
const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

module.exports = {
  species: [ // array de objetos
    { // objeto lions temos um Array com quatro objeto especificando nome, sexo e era
      id: lionId,
      name: 'lions',
      popularity: 4,
      location: 'NE',
      availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'], // dias disponívies para visitaçoes
      residents: [
        {
          name: 'Zena',
          sex: 'female', // fêmea
          age: 12, // era
        },
        {
          name: 'Maxwell',
          sex: 'male', // macho
          age: 15, // era
        },
        {
          name: 'Faustino',
          sex: 'male', // macho
          age: 7,
        },
        {
          name: 'Dee',
          sex: 'female', // fêmea
          age: 14, // era
        },
      ],
    },
    { //  objeto tigers temos um Array com dois objeto especificando nome, sexo e era
      id: tigersId,
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      availability: ['Wednesday', 'Friday', 'Saturday', 'Tuesday'],
      residents: [
        {
          name: 'Shu',
          sex: 'female', // fêmea
          age: 19, // era
        },
        {
          name: 'Esther',
          sex: 'female', // fêmea
          age: 17, // era
        },
      ],
    },
    {
      id: bearsId, // objeto bears(ursas) tem um Array com três objetos especificando nome, sexo e era
      name: 'bears',
      popularity: 5,
      location: 'NW',
      availability: ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'],
      residents: [
        {
          name: 'Hiram',
          sex: 'male', // macho
          age: 4, // era
        },
        {
          name: 'Edwardo',
          sex: 'male', // macho
          age: 4, // era
        },
        {
          name: 'Milan',
          sex: 'male', // macho
          age: 4, // era
        },
      ],
    },
    {
      id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b', // objeto penguins tem um Array com quatro objetos especificando nome, sexo e era
      name: 'penguins',
      popularity: 4,
      location: 'SE',
      availability: ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'],
      residents: [
        {
          name: 'Joe',
          sex: 'male', // macho
          age: 10, // era
        },
        {
          name: 'Tad',
          sex: 'male', // macho
          age: 12, // era
        },
        {
          name: 'Keri',
          sex: 'female', // fêmea
          age: 2, // era
        },
        {
          name: 'Nicholas',
          sex: 'male', // macho
          age: 2, // era
        },
      ],
    },
    {
      id: ottersId, // objeto otters (lontras) tem um Array com quatro objetos especificando nome, sexo e era
      name: 'otters',
      popularity: 4,
      location: 'SE',
      availability: ['Friday', 'Thursday', 'Wednesday', 'Saturday'],
      residents: [
        {
          name: 'Neville',
          sex: 'male', // macho
          age: 9, // era
        },
        {
          name: 'Lloyd',
          sex: 'male', // macho
          age: 8, // era
        },
        {
          name: 'Mercedes',
          sex: 'female', // femea
          age: 9, // era
        },
        {
          name: 'Margherita',
          sex: 'female', // femea
          age: 10, // era
        },
      ],
    },
    {
      id: frogsId, // objeto frogs (rãs) tem um Array com dois objetos especificando nome, sexo e era
      name: 'frogs',
      popularity: 2,
      location: 'SW',
      availability: ['Saturday', 'Friday', 'Thursday', 'Wednesday'],
      residents: [
        {
          name: 'Cathey',
          sex: 'female', // femea
          age: 3, // era
        },
        {
          name: 'Annice',
          sex: 'female', // femea
          age: 2, // era
        },
      ],
    },
    {
      id: snakesId, // objeto snakes (cobra) tem um Array com dois objetos especificando nome, sexo e era
      name: 'snakes',
      popularity: 3,
      location: 'SW',
      availability: ['Sunday', 'Saturday', 'Friday', 'Thursday'],
      residents: [
        {
          name: 'Paulette',
          sex: 'female', // femea
          age: 5, // era
        },
        {
          name: 'Bill',
          sex: 'male', // macho
          age: 6, // era
        },
      ],
    },
    {
      id: elephantsId, // objeto elephants (elefantes) tem um Array com quatro objetos especificando nome, sexo e era
      name: 'elephants',
      popularity: 5,
      location: 'NW',
      availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
      residents: [
        {
          name: 'Ilana',
          sex: 'female', // femea
          age: 11, // era
        },
        {
          name: 'Orval',
          sex: 'male', // macho
          age: 15, // era
        },
        {
          name: 'Bea',
          sex: 'female', // fêmea
          age: 12, // era
        },
        {
          name: 'Jefferson',
          sex: 'male', // macho
          age: 4, // era
        },
      ],
    },
    {
      id: '01422318-ca2d-46b8-b66c-3e9e188244ed', // objeto giraffes tem um Array com seis objetos especificando nome, sexo e era
      name: 'giraffes',
      popularity: 4,
      location: 'NE',
      availability: ['Wednesday', 'Thursday', 'Tuesday', 'Friday'],
      residents: [
        {
          name: 'Gracia',
          sex: 'female', // femea
          age: 11, // era
        },
        {
          name: 'Antone',
          sex: 'male', // macho
          age: 9, // era
        },
        {
          name: 'Vicky',
          sex: 'female', // femea
          age: 12, // era
        },
        {
          name: 'Clay',
          sex: 'male', // macho
          age: 4, // era
        },
        {
          name: 'Arron',
          sex: 'male', // macho
          age: 7, // era
        },
        {
          name: 'Bernard',
          sex: 'male', // macho
          age: 6, // era
        },
      ],
    },
  ],
  employees: [ // objeto funcionarios temos um Array com oito objeto especificando primeiro nome, ultimo nome, um array com nomes gerentes
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      firstName: 'Nigel',
      lastName: 'Nelson',
      managers: [burlId, olaId], // gerenteID
      responsibleFor: [lionId, tigersId], // e as respectivas responsabilidades do gerente
    },
    {
      id: burlId,
      firstName: 'Burl',
      lastName: 'Bethea',
      managers: [stephanieId], // gerernteID
      responsibleFor: [
        lionId,
        tigersId,
        bearsId,
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b'], // e as respectivas responsabilidades do gerente
    },
    {
      id: olaId,
      firstName: 'Ola',
      lastName: 'Orloff',
      managers: [stephanieId], // gerenteID
      responsibleFor: [
        ottersId,
        frogsId,
        snakesId,
        elephantsId,
      ], // e as respectivas responsabilidades do gerente
    },
    {
      id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
      firstName: 'Wilburn',
      lastName: 'Wishart',
      managers: [burlId, olaId], // gereteID
      responsibleFor: [snakesId, elephantsId], // e as respectivas responsabilidades do gerente
    },
    {
      id: stephanieId,
      firstName: 'Stephanie',
      lastName: 'Strauss',
      managers: [], // gerenteID
      responsibleFor: [
        ottersId,
        '01422318-ca2d-46b8-b66c-3e9e188244ed',
      ], // e as respectivas responsabilidades do gerente
    },
    {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      firstName: 'Sharonda',
      lastName: 'Spry',
      managers: [burlId, olaId], // gerenteID
      responsibleFor: [ottersId, frogsId], // e as respectivas responsabilidades do gerente
    },
    {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      firstName: 'Ardith',
      lastName: 'Azevado',
      managers: ['b0dc644a-5335-489b-8a2c-4e086c7819a2'], // geretesID
      responsibleFor: [
        tigersId,
        bearsId,
      ], // e as respectivas responsabilidades do gerente
    },
    {
      id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
      firstName: 'Emery',
      lastName: 'Elser',
      managers: [stephanieId], // gereteID
      responsibleFor: [
        lionId,
        bearsId,
        elephantsId,
      ], // e as respectivas responsabilidades do gerente
    },
  ],
  hours: {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  },
  prices: {
    adult: 49.99,
    senior: 24.99,
    child: 20.99,
  },
};
