export = {
  up: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.bulkInsert('Stacks',
    [
      {
        stackId: 1,
        appName: 'social-game-v1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stackId: 2,
        appName: 'stream-app-2022',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        stackId: 3,
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
