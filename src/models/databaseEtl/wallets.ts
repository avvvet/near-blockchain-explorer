import { Model, DataTypes } from 'sequelize'
import { dbInstance } from '..'
import Transactions from '../databaseEtl/transactions'
import PersonaHistory from './persona_history'

class Wallets extends Model {
    declare walletId: string
    declare email: string
    declare phone: string
    declare personaId: number
    declare nearValue: string
    declare transxRate: string
}

Wallets.init({
    walletId: { 
        type : DataTypes.STRING,
        primaryKey: true
    },
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    total_transactions: DataTypes.DECIMAL(10,4),
},
{
    sequelize: dbInstance['databaseEtl'],
    modelName: 'wallets',
});

Wallets.hasMany(Transactions,
{
    foreignKey: 'walletId'
})

Transactions.belongsTo(Wallets,
{
    foreignKey : 'walletId',
})

Wallets.hasMany(PersonaHistory,
{
    foreignKey: 'walletId'
})
    
PersonaHistory.belongsTo(Wallets,
{
    foreignKey : 'walletId',
})

export default Wallets