const faker = require('faker');

export const HealthPartners = () => ({
    firstNameLocator: faker.random.word({ count: 8 }),
    lastNameLocator: faker.random.word({ count: 7 }),
    genderLocator: faker.random.arrayElement(['Male', 'Female']),
    smokerLocator: faker.random.arrayElement(['Yes', 'No']),
    dependentFirstNameLocator: faker.random.word({ count: 7 }),
    dependentLastNameLocator: faker.random.word({ count: 6 }),
    relationshipLocator: faker.random.arrayElement(['Spouse', 'Child']),
    childGenderLocator: faker.random.arrayElement(['Male', 'Female']),
    childSmokerLocator: faker.random.arrayElement(['Yes', 'No']),
    emailLocator: faker.internet.email(),
    userIdLocator: faker.random.integer({count: 7}),
    passwordLocator: faker.internet.password({ length: 8, memorable: true }),
    confirmPasswordLocator: faker.internet.password({ length: 8, memorable: true }),


});

