export = {
    async up(queryInterface: any, Sequelize: any) {
        await queryInterface.createTable('transactions',
            {
                transactionId: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    primaryKey: true,
                    unique: true
                },
                receiptId: {
                    type: Sequelize.STRING,
                    references : {
                        model : 'receipts',
                        key : 'receiptId'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
                stackId: {
                    type: Sequelize.STRING
                },
                sliceId: {
                    type: Sequelize.STRING
                },
                walletId: {
                    type: Sequelize.STRING,
                    references : {
                        model : 'wallets',
                        key : 'walletId'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
                tagsJson: {
                    type: Sequelize.JSON,
                    allowNull: false
                },
                status: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    default: 'pending'
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
        await queryInterface.dropTable('transactions');
    }
}