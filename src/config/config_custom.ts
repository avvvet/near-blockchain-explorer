import dotenv from 'dotenv'
dotenv.config()
export = {
    "development": {
        "databaseEtl": {
            "username": process.env.DB_ETL_USERNAME,
            "password": process.env.DB_ETL_PASSWORD,
            "database": process.env.DB_ETL_DATABASE,
            "host": process.env.DB_ETL_HOST,
            "dialect": process.env.DB_ETL_DIALECT,
            "operatorsAliases": "Sequelize.Op"
        },
        "databaseRaw": {
            "username": process.env.DB_RAW_USERNAME,
            "password": process.env.DB_RAW_PASSWORD,
            "database": process.env.DB_RAW_DATABASE,
            "host": process.env.DB_RAW_HOST,
            "dialect": process.env.DB_RAW_DIALECT,
            "operatorsAliases": "Sequelize.Op"
        }
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "databaseEtl": {
            "username": process.env.DB_USERNAME,
            "password": process.env.DB_PASSWORD,
            "database": process.env.DB_DATABASE,
            "host": process.env.DB_HOST,
            "dialect": process.env.DB_DIALECT,
            "operatorsAliases": "Sequelize.Op"
        },
        "databaseRaw": {
            "username": process.env.DB_RAW_USERNAME,
            "password": process.env.DB_RAW_PASSWORD,
            "database": process.env.DB_RAW_DATABASE,
            "host": process.env.DB_RAW_HOST,
            "dialect": process.env.DB_RAW_DIALECT,
            "operatorsAliases": "Sequelize.Op"
        }
    }
};