import { Model, DataTypes } from 'sequelize';

import { dbInstance } from '..'

class Transactions extends Model {
    declare transactionId: string
    declare receiptId: string
    declare sliceId: string
    declare walletId: string
    declare tagsJson: object
    declare status: string
}

Transactions.init({
    transactionId: {
        type : DataTypes.STRING,
        primaryKey: true
    },
    receiptId: DataTypes.STRING,
    sliceId: DataTypes.STRING,
    walletId: DataTypes.STRING,
    tagsJson: DataTypes.JSON,
    status: DataTypes.STRING
},
{
    sequelize: dbInstance['databaseEtl'],
    modelName: 'transactions',
});

export default Transactions