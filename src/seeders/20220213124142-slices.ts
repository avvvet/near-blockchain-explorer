export = {
  up: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.bulkInsert('Slices', 
    [
      {
        sliceId: 'uu9da4b0-79e1-4089-a124-0568b31f54jh',
        actionName: 'purchased nft 98775444',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        sliceId: '559da4b0-79e1-4089-a124-0568b31f54cc',
        actionName: 'download start war app v2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.bulkDelete('Slices', null, {});
  }
};
