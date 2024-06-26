const faker = require('faker');

export const SpouseFixture = () => ({
    lastNameLocator: faker.random.word({ count: 7 }),
    genderLocator: faker.random.arrayElement(['Male']),
    smokerLocator: faker.random.arrayElement(['Yes', 'No']),
    dependentFirstNameLocator: faker.random.word({ count: 7 }),
    dependentLastNameLocator: faker.random.word({ count: 6 }),
    relationshipLocator: faker.random.arrayElement(['Spouse']),
    childGenderLocator: faker.random.arrayElement(['Female']),
    childSmokerLocator: faker.random.arrayElement(['No']),
    emailLocator: faker.internet.email(),
    userIdLocator: faker.datatype.number({ min: Math.pow(10, 15), max: Math.pow(10, 16) - 1 }).toString(),
    passwordLocator: faker.internet.password(9, false, /[a-zA-Z0-9]/),
    confirmPasswordLocator: faker.internet.password(9, false, /[a-zA-Z0-9]/),
    answerLocator: faker.random.word({ count: 4, alpha: true }), 
    addressLocator: faker.random.word({ count: 12}),
    cityLocator: faker.random.word({ count: 10 }),
    phoneLocator: faker.phone.phoneNumber(),
    creditCardFirstNameLocator: faker.random.word({ count: 8 }),
    creditCardLastNameLocator:  faker.random.word({ count: 8 }),
    applicantFirstNameLocator: faker.random.word({ Count: 8}),
    applicantLastNameLocator: faker.random.word({ Count: 8}),
    confirmFirstNameLocator: faker.random.word({ Count: 8}),
    confirmLastNameLocator: faker.random.word({ Count: 8}),
});
