export = {
    async up(queryInterface: any, Sequelize: any) {
        await queryInterface.createTable('wallets',
            {
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
                total_transactions: {
                    type: Sequelize.DECIMAL(20,4),
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
        await queryInterface.dropTable('wallets');
    }
}