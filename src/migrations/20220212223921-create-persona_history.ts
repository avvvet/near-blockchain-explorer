export = {
    async up(queryInterface: any, Sequelize: any) {
        await queryInterface.createTable('persona_histories',
            {
                personaId: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    primaryKey: true,
                    unique: true
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
                personaName: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                memberDate: {
                    type: Sequelize.DATE,
                    allowNull: false,
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
        await queryInterface.dropTable('persona_histories');
    }
}