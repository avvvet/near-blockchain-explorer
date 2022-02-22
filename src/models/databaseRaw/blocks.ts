import { Model, DataTypes } from 'sequelize';
import { Transactions } from '.';

import { dbInstance } from '..'
import Chunks from './chunks';

class Blocks extends Model {
    declare block_hash: string
    declare block_height: number
    declare prev_block_hash: string
    declare block_timestamp: number
    declare total_supply: number
    declare gas_price: number
    declare author_account_id: string
}

Blocks.init({
    block_hash: {
        type : DataTypes.STRING,
        primaryKey: true
    },
    block_height: DataTypes.DECIMAL(20,
        0),
    prev_block_hash: DataTypes.DECIMAL(20,
        0),
    block_timestamp: DataTypes.DECIMAL(20,
        0),
    total_supply: DataTypes.DECIMAL(45,
        0),
    gas_price: DataTypes.DECIMAL(45,
        0),
    author_account_id: DataTypes.STRING,
},
{
    sequelize: dbInstance['databaseRaw'],
    modelName: 'blocks',
    timestamps: false
});

Transactions.belongsTo(Blocks,
    {
        foreignKey : 'included_in_block_hash',
    })

Blocks.hasOne(Chunks,
    {
        foreignKey: 'included_in_block_hash'
    })
export default Blocks