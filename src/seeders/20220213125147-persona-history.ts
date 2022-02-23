export = {
    up: async (queryInterface: any, Sequelize: any) => {
        await queryInterface.bulkInsert('persona_histories',
            [
                {
                    personaId: 'a09da4b0-79e1-4089-a124-0568b31f549b',
                    personaName: 'game centric statistical',
                    walletId: 'xyxy.near',
                    memberDate: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {});
    },

    down: async (queryInterface: any, Sequelize: any) => {
        await queryInterface.bulkDelete('persona_histories',
            null,
            {});
    }
};