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
      stackId: {
        type: Sequelize.STRING,
        references : {
          model : 'Stacks',
          key : 'stackId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      sliceId: {
        type: Sequelize.STRING,
        references : {
          model : 'Slices',
          key : 'sliceId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      walletId: {
        type: Sequelize.STRING,
        references : {
          model : 'Wallets',
          key : 'walletId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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