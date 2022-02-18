import { STRING } from 'sequelize';
import { BIGINT } from 'sequelize';
import { Model, DataTypes } from 'sequelize';

import { dbInstance } from '..'

class Transactions extends Model {
      declare transaction_hash: string
      declare included_in_block_hash: string
      declare included_in_chunk_hash: string
      declare index_in_chunk: number
      declare block_timestamp: number
      declare signer_account_id: string
      declare signer_public_key: string
      declare nonce: string
      declare receiver_account_id: string
      declare signature: string
      declare status: string
      declare converted_into_receipt_id: string
      declare receipt_conversion_gas_burnt: number
      declare receipt_conversion_tokens_burnt: number
}

Transactions.init({
  transaction_hash: {
    type : DataTypes.STRING,
    primaryKey: true
  },
  included_in_block_hash: DataTypes.STRING,
  included_in_chunk_hash: DataTypes.STRING,
  index_in_chunk: DataTypes.BIGINT,
  block_timestamp: DataTypes.STRING,
  signer_account_id: DataTypes.STRING,
  signer_public_key: DataTypes.STRING,
  nonce: DataTypes.BIGINT,
  receiver_account_id: DataTypes.STRING,
  signature: DataTypes.STRING,
  status: DataTypes.STRING,
  converted_into_receipt_id: STRING,
  receipt_conversion_gas_burnt: BIGINT,
  receipt_conversion_tokens_burnt: BIGINT
}, {
  sequelize: dbInstance['databaseRaw'],
  modelName: 'transactions',
  timestamps: false
});

export default Transactions