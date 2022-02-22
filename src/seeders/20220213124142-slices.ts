export = {
    up: async (queryInterface: any, Sequelize: any) => {
        await queryInterface.bulkInsert('Slices',
            [
                {
                    sliceId: '1',
                    actionName: 'purchased nft 98775444',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    sliceId: '2',
                    actionName: 'download start war app v2',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {});
    },

    down: async (queryInterface: any, Sequelize: any) => {
        await queryInterface.bulkDelete('Slices',
            null,
            {});
    }
};
