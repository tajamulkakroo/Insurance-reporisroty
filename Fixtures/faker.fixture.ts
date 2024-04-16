const faker = require('faker');

export const consumerData = () => ({
    
    /*****************************************************************************************************************************
     * Note to Prashanth:
     * 
     * We need to make sure when we select random words it does not have special chars.
     * For example: 24/7 or supply-chains
     * 
     ****************************************************************************************************************************/

    p_firstName: faker.random.word({ count: 8 }),
    p_lastName: faker.random.word({ count: 8 }),
    p_gender: faker.random.arrayElement(['Male', 'Female']),
    p_tobaccoUse: faker.random.arrayElement(['Yes', 'No']),
    dependentFirstName: faker.random.word({ count: 7 }),
    dependentLastName: faker.random.word({ count: 6 }),
    relationship: faker.random.arrayElement(['Child']),
    childGender: faker.random.arrayElement(['Male', 'Female']),
    dependentTobaccoUse: faker.random.arrayElement(['Yes', 'No']),

    email: faker.random.word({ count: 10}), 
    userId: faker.datatype.number({ min: Math.pow(10, 15), max: Math.pow(10, 16) - 1 }).toString(),
    answer: faker.random.word({ count: 4, alpha: true }),
    
    address: faker.random.word({ count: 20}), //we need real address to match with the zip code that was entered from the shopping page, so we can see address validation popup screen.
    city: faker.random.word({ count: 10 }),
    phone: faker.phone.phoneNumber(),

    insName: faker.random.word({ count: 10 }),
    insAddress: faker.random.word({ count: 10 }),
    insCity: faker.random.word({ count: 10 }), //we need to use a real city to match with state
    policyID: faker.random.word({ count: 10 }),

    acctHolderName: faker.random.word({ count: 10 }), //Account holder name should = to policy holder's first name
    bankName: faker.random.word({ count: 10 }),

    creditCardFirstName: faker.random.word({ count: 8 }), //CC first name should = to firstname (primary applicant)
    creditCardLastName:  faker.random.word({ count: 8 }), //CC last name should = to lastname (primary applicant)

});