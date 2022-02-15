export = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable('Slices', {
      sliceId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      actionName: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Slices');
  }
}