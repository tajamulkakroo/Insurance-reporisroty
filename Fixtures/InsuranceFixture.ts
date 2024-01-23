const faker = require('faker');
import { faker } from '@faker-js/faker';
export const healthPartners = () => ({

    firstNameLocator:faker.random.word({count:8}),
    lastNameLocator:faker.random.word({count:7}),
    birthDateLocator:faker.random.birthDate(),
    genderLocator:faker.random.gender(),
    dependentFirstNameLocator:faker.random.word({count:7}),
    dependentLastNameLocator:faker.random.word({count:6}),
    dependentBirthDateLocator:faker.random.birthDate(),
    emailLocator:faker.randon.emailAddress()});