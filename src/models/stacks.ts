import { Model, DataTypes } from 'sequelize';
import { sequelize } from '.'
import Transactions from './transactions';

class Stacks extends Model {
      declare stackId: string
      declare appName: string
}

Stacks.init({
  stackId: { 
    type : DataTypes.STRING,
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