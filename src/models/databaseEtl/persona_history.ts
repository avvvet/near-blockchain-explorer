import { Model, DataTypes } from 'sequelize';
import { Wallets } from '.';
import { dbInstance } from '..'

class PersonaHistory extends Model {
    declare personaId: number
    declare personaName: string
    declare walletId: string
    declare memeberDate: number
}

PersonaHistory.init({
    personaId: {
        type : DataTypes.BIGINT,
        primaryKey: true
    },
    personaName: DataTypes.STRING,
    walletId: DataTypes.STRING,
    memberDate: DataTypes.DATE
},
{
    sequelize: dbInstance['databaseEtl'],
    modelName: 'persona_histories',
});


export default PersonaHistory