export = {
  async up(queryInterface:any, Sequelize:any) {
    await queryInterface.createTable('contracts', {
      contractId: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      contractName: {
        type: Sequelize.STRING
      },
      executionCount: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface:any, Sequelize:any) {
    await queryInterface.dropTable('contracts');
  }
};