export = {
    async up(queryInterface: any, Sequelize: any) {
        await queryInterface.createTable('Stacks',
            {
                stackId: {
                    type: Sequelize.BIGINT,
                    allowNull: false,
                    primaryKey: true,
                    unique: true
                },
                appName: {
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
        await queryInterface.dropTable('Stacks');
    }
}