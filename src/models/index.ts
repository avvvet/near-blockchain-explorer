import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()
const env = process.env.NODE_ENV || 'development';

const config = require(__dirname + './../config/config_custom.js')[env];

const dbInstance : any = {}

const databases = Object.keys(config)

for(let i = 0; i < databases.length; i++) {
  let database = databases[i]
  let dbConfig = config[database]
  dbInstance[database] = new Sequelize( dbConfig.database, dbConfig.username, dbConfig.password, dbConfig )
}

export { dbInstance };