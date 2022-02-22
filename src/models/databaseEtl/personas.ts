import { Model, DataTypes } from 'sequelize';
import { dbInstance } from '..'

class Personas extends Model {
    declare personaId: number
    declare personaName: string
    declare memberCount: number
}

Personas.init({
    personaId: {
        type : DataTypes.BIGINT,
        primaryKey: true
    },
    personaName: DataTypes.STRING,
    memberCount: DataTypes.BIGINT
},
{
    sequelize: dbInstance['databaseEtl'],
    modelName: 'Personas',
});

export default Personas