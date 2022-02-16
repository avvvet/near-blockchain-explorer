import { Model, DataTypes } from 'sequelize';
import { sequelize } from '.'

class Transactions extends Model {
      declare transactionHash: string
      declare receiptId: string
      declare sliceId: number
      declare walletId: string
      declare tagsJson: object
      declare status: string
}

Transactions.init({
  transactionHash: {
    type : DataTypes.STRING,
    primaryKey: true
  },
  receiptId: DataTypes.STRING,
  sliceId: DataTypes.BIGINT,
  walletId: DataTypes.STRING,
  tagsJson: DataTypes.JSON,
  status: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Transactions',
});

export default Transactions