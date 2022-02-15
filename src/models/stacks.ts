import { Model, DataTypes } from 'sequelize';
import { sequelize } from '.'
import Transactions from './transactions';

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
  sequelize,
  modelName: 'Stacks',
});

Stacks.hasMany(Transactions, {
  foreignKey: 'stackId'
})

Transactions.belongsTo(Stacks, {
  foreignKey : 'stackId',
})

export default Stacks