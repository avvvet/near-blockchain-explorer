import { Model, DataTypes } from 'sequelize';
import { Transactions } from '.';

import { dbInstance } from '..'
import Blocks from './blocks';

class Chunks extends Model {
    declare chunk_hash: string
    declare included_in_block_hash: string
    declare shard_id: number
    declare signature: string
    declare gas_limit: number
    declare gas_used: number
    declare author_account_id: string
}

Chunks.init({
    chunk_hash: {
        type : DataTypes.STRING,
        primaryKey: true
    },
    included_in_block_hash: DataTypes.STRING,
    shard_id: DataTypes.DECIMAL(20, 0),
    signature: DataTypes.DECIMAL(20, 0),
    gas_limit: DataTypes.DECIMAL(20, 0),
    gas_used: DataTypes.DECIMAL(20, 0),
    author_account_id: DataTypes.STRING,
},
{
    sequelize: dbInstance['databaseRaw'],
    modelName: 'chunks',
    timestamps: false
});

export default Chunks