export = {
    up: async (queryInterface: any, Sequelize: any) => {
        await queryInterface.bulkInsert('wallets', 
            [
                {
                    walletId: 'xyxy.near',
                    email: 'abc@primelab.io',
                    phone: '+12028518274',
                    total_transactions: '7454787.34',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {});
    },

    down: async (queryInterface: any, Sequelize: any) => {
        await queryInterface.bulkDelete('wallets',
            null,
            {});
    }
};
