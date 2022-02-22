export = {
    up: async (queryInterface: any, Sequelize: any) => {
        await queryInterface.bulkInsert('Wallets', 
            [
                {
                    walletId: 'yzyz.near',
                    email: 'abc@primelab.io',
                    phone: '+12028518274',
                    personaId: 'a09da4b0-79e1-4089-a124-0568b31f549b',
                    nearValue: '00000000000',
                    transxRate: '0.34',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    walletId: 'bmw.near',
                    email: 'jon@primelab.io',
                    phone: '+12028518274',
                    personaId: '779da4b0-79e1-4089-a124-0568b31f549b',
                    nearValue: '00000000009',
                    transxRate: '0.755',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
      
            ],
            {});
    },

    down: async (queryInterface: any, Sequelize: any) => {
        await queryInterface.bulkDelete('Wallets',
            null,
            {});
    }
};
