import { Model, DataTypes } from 'sequelize';
import { sequelize } from '.'

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
}, {
  sequelize,
  modelName: 'Personas',
});

export default Personas