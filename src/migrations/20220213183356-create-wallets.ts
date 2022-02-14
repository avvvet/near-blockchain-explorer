export = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable('Wallets', {
      walletId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      personaId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nearValue: {
        type: Sequelize.STRING,
        allowNull: false
      },
      transxRate: {
        type: Sequelize.JSON,
        allowNull: false
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
  async down(queryInterface: any, Sequelize: any) {
    await queryInterface.dropTable('Wallets');
  }
}