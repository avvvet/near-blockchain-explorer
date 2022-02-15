import { Model, DataTypes } from 'sequelize';
import { sequelize } from '.'

class Transactions extends Model {
      declare transactionHash: string
      declare receiptId: string
      declare sliceId: number
      declare walletId: string
      declare tagsJson: object
}

Transactions.init({
  transactionHash: {
    type : DataTypes.STRING,
    primaryKey: true
  },
  receiptId: DataTypes.STRING,
  sliceId: DataTypes.BIGINT,
  walletId: DataTypes.STRING,
  tagsJson: DataTypes.JSON
}, {
  sequelize,
  modelName: 'Transactions',
});

export default Transactions