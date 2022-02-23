export = {
    up: async (queryInterface: any, Sequelize: any) => {
        await queryInterface.bulkInsert('receipts',
            [
                {
                    receiptId: '21KEhNErCLrFDWWCJ4JfdkbutqVaG18NoFJtTSSMGuFc',
                    blockHash: '1184Pp7mJ1aoZ7DDTX3LMMWngPUrW8ikbYsoarMtmZi',
                    status: 'COMPLETE',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {});
    },

    down: async (queryInterface: any, Sequelize: any) => {
        await queryInterface.bulkDelete('receipts',
            null,
            {});
    }
};
