export = {
  up: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.bulkInsert('Personas',
    [
      {
        personaId: 1,
        personaName: 'game centric statistical',
        memberCount: 200000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        personaId: 2,
        personaName: 'social qualitative',
        memberCount: 700000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.bulkDelete('Personas', null, {});
  }
};