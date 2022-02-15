export = {
  up: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.bulkInsert('Stacks', 
    [
      {
        stackId: 'b09da4b0-79e1-4089-a124-0568b31f549b',
        appName: 'social-game-v1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stackId: '779da4b0-79e1-4089-a124-0568b31f54cc',
        appName: 'stream-app-2022',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stackId: '809da4b0-79e1-4089-a124-0568b31f549j',
        appName: 'start-war-app-v.12.4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.bulkDelete('Stacks', null, {});
  }
};
