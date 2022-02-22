import { Model, DataTypes } from 'sequelize';
import { dbInstance } from '..'
import Transactions from '../databaseEtl/transactions';

class Slices extends Model {
    declare stackId: number
    declare appName: string
}

Slices.init({
    sliceId: {
        type : DataTypes.BIGINT,
        primaryKey: true
    },
    actionName: DataTypes.STRING
},
{
    sequelize: dbInstance['databaseEtl'],
    modelName: 'Slices',
});

Slices.hasMany(Transactions,
{
    foreignKey: 'sliceId'
})

Transactions.belongsTo(Slices,
{
    foreignKey : 'sliceId',
})

export default Slices