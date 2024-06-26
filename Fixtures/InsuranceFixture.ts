const faker = require('faker');

export const HealthPartners = () => ({
    lastNameLocator: faker.random.word({ count: 7 }).replace(/[^a-zA-Z]/g, ''),
    genderLocator: faker.random.arrayElement(['Male']),
    smokerLocator: faker.random.arrayElement(['No']),
    dependentFirstNameLocator: faker.random.word({ count: 7 }),
    dependentLastNameLocator: faker.random.word({ count: 6 }),
    relationshipLocator: faker.random.arrayElement(['Child']),
    childGenderLocator: faker.random.arrayElement(['Male', 'Female']),
    childSmokerLocator: faker.random.arrayElement(['No']),
    emailLocator: faker.internet.email(),
    userIdLocator: faker.datatype.number({ min: Math.pow(10, 15), max: Math.pow(10, 16) - 1 }).toString(),
    passwordLocator: faker.internet.password(9, false, /^[a-zA-Z0-9]+$/), // Excludes special characters
    confirmPasswordLocator: faker.internet.password(9, false, /^[a-zA-Z0-9]+$/), // Excludes special characters
    answerLocator: faker.random.word({ count: 4, alpha: true }), 
    addressLocator: faker.random.word({ count: 12 }),
    cityLocator: faker.random.word({ count: 10 }).replace(/[^a-zA-Z]/g, ''), // Excludes special characters
    phoneLocator: faker.phone.phoneNumber(),
    creditCardFirstNameLocator: faker.random.word({ count: 8 }),
    creditCardLastNameLocator:  faker.random.word({ count: 8 }),
    applicantFirstNameLocator: faker.random.word({ Count: 8 }),
    applicantLastNameLocator: faker.random.word({ Count: 8 }),
    confirmFirstNameLocator: faker.random.word({ Count: 8 }),
    confirmLastNameLocator: faker.random.word({ Count: 8 }),
});
