import { Model, DataTypes } from 'sequelize';
import { dbInstance } from '..'
import Transactions from './transactions';

class Receipts extends Model {
    declare receiptId: number
    declare blockHash: string
    declare status: string
}

Receipts.init({
    receiptId: {
        type : DataTypes.BIGINT,
        primaryKey: true
    },
    blockHash: DataTypes.STRING,
    status: DataTypes.STRING
},
{
    sequelize: dbInstance['databaseEtl'],
    modelName: 'receipts',
});

Receipts.hasMany(Transactions,
{
    foreignKey: 'receiptId'
})

Transactions.belongsTo(Receipts,
{
    foreignKey : 'receiptId',
})

export default Receipts