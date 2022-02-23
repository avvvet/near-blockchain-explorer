export = {
    async up(queryInterface: any, Sequelize: any) {
        await queryInterface.createTable('receipts',
            {
                receiptId: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    primaryKey: true,
                    unique: true
                },
                blockHash: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                status: {
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
        await queryInterface.dropTable('receipts');
    }
}