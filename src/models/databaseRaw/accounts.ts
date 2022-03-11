import { Model, DataTypes } from 'sequelize';

import { dbInstance } from '..'

class Accounts extends Model {
    declare id: number
    declare account_id: string
    declare created_by_receipt_id: string
    declare deleted_by_receipt_id: string
}

Accounts.init({
    id: {
        type : DataTypes.BIGINT,
        primaryKey: true
    },
    account_id: DataTypes.STRING,
    created_by_receipt_id: DataTypes.STRING,
    deleted_by_receipt_id: DataTypes.BIGINT
},
{
    sequelize: dbInstance['databaseRaw'],
    modelName: 'accounts',
    timestamps: false
});


export default Accounts