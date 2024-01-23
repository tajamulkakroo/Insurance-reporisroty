const faker = require('faker');

export const HealthPartners = () => ({
    firstNameLocator: faker.random.word({ count: 8 }),
    lastNameLocator: faker.random.word({ count: 7 }),
    birthDateLocator: faker.date.between('1950-01-01', '2000-12-31'), // Adjust the date range as needed
    genderLocator: faker.random.arrayElement(['Male', 'Female']),
    smokerLocator: faker.random.boolean(['Yes', 'No']),
    dependentFirstNameLocator: faker.random.word({ count: 7 }),
    dependentLastNameLocator: faker.random.word({ count: 6 }),
    dependentBirthDateLocator: faker.date.between('2000-01-01', '2022-12-31'), // Adjust the date range as needed
    emailLocator: faker.internet.email(),
});