export = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable('Transactions', {
      transactionHash: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      receiptId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sliceId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      walletId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tagsJson: {
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
    await queryInterface.dropTable('Transactions');
  }
}