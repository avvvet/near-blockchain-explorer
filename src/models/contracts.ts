import { Model, DataTypes } from 'sequelize';
import { sequelize } from '.'

class Contracts extends Model {
    declare contractName: string
    declare executionCount: number
}
Contracts.init({
  contractId: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  contractName: DataTypes.STRING,
  executionCount: DataTypes.BIGINT
}, {
  sequelize,
  modelName: 'contracts',
});

export default Contracts;
