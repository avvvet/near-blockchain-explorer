
export = {
  async up (queryInterface:any, Sequelize:any) {

    await queryInterface.bulkInsert('contracts',
    [
      {
        contractId: '62093767-3364-4aec-8cdb-6fb721c597f1',
        contractName: 'The first contract',
        executionCount: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        contractId: '8575b73e-068a-4f6e-9278-1c5d262d6121',
        contractName: 'The second contract',
        executionCount: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        contractId: '25a617ec-3736-4f02-b88f-6dcae69a7e80',
        contractName: 'The Third contract',
        executionCount: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },


  async down (queryInterface:any, Sequelize:any) {
    await queryInterface.bulkDelete('contracts', null, {});
  }
};
