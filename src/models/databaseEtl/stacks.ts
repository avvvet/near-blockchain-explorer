import { Model, DataTypes } from 'sequelize';
import { dbInstance } from '..'
import Transactions from '../databaseEtl/transactions';

class Stacks extends Model {
      declare stackId: number
      declare appName: string
}

Stacks.init({
  stackId: {
    type : DataTypes.BIGINT,
    primaryKey: true
  },
  appName: DataTypes.STRING
}, {
  sequelize: dbInstance['databaseEtl'],
  modelName: 'Stacks',
});

Stacks.hasMany(Transactions, {
  foreignKey: 'stackId'
})

Transactions.belongsTo(Stacks, {
  foreignKey : 'stackId',
})

export default Stacks