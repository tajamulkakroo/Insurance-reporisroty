const faker = require('faker');

export const childDepandant = () => ({
    firstNameLocator: faker.random.word({ count: 8 }),
    lastNameLocator: faker.random.word({ count: 7 }),
    genderLocator: faker.random.arrayElement(['Male', 'Female']),
    smokerLocator: faker.random.arrayElement(['Yes', 'No']),
});