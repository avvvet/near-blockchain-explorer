import { Model, DataTypes } from 'sequelize'
import { dbInstance } from '..'
import Transactions from '../databaseEtl/transactions'

class Wallets extends Model {
    declare walletId: string
    declare email: string
    declare phone: string
    declare personaId: string
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
    personaId: DataTypes.STRING,
    nearValue: DataTypes.STRING,
    transxRate: DataTypes.STRING
},
{
    sequelize: dbInstance['databaseEtl'],
    modelName: 'Wallets',
});

Wallets.hasMany(Transactions,
    {
        foreignKey: 'walletId'
    })

Transactions.belongsTo(Wallets,
    {
        foreignKey : 'walletId',
    })

export default Wallets