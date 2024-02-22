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
    userIdLocator: faker.datatype.number({count: 8}).toString(),
    passwordLocator: faker.internet.password(10, false, /\w/, '!Aa0'),
    confirmPasswordLocator: faker.internet.password(10, false, /\w/, '!Aa0'),
    answerLocator: faker.random.word({ count: 4 }), // TODO: Implement a real question/answer mechanism here

});

