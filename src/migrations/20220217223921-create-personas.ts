export = {
    async up(queryInterface: any, Sequelize: any) {
        await queryInterface.createTable('Personas',
            {
                personaId: {
                    type: Sequelize.BIGINT,
                    allowNull: false,
                    primaryKey: true,
                    unique: true
                },
                personaName: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                memberCount: {
                    type: Sequelize.BIGINT,
                    allowNull: false,
                    default: 0
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
        await queryInterface.dropTable('Personas');
    }
}