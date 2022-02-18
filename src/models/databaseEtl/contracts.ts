import { Model, DataTypes } from 'sequelize';
import { dbInstance } from '..'

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
  sequelize: dbInstance['databaseEtl'],
  modelName: 'Contracts',
});

export default Contracts;
