## indexer service api
  what is it ? backend service API for indexer.

## init project
 `npm install` 

## build typscript
  `npm run build` 

## to start the project 
  `npm run start`

## swagger API documenation
  * see what end points are available. 
  `http://127.0.0.1:2707/api-docs`

## .env 
 create .env file in the root dir. make sure the credential are correct before moving on.

 ```
  ACCESS_TOKEN_SALT=""
  DB_USERNAME=""
  DB_PASSWORD=""
  DB_DATABASE="near_api"
  DB_HOST="aws-aa-bb"
  DB_DIALECT="postgres"

 ```
## database 
  ` - create new RDS for PostgreSQL or your choice db`
  ` - create new user account with create database role`

## migration
  
  `npx sequelize db:create` will create new PostgreSQL db

  `npx sequelize db:migrate` creates models

