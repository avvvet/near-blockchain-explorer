# Indexer service api
Backend service API for Indexer.

## Basic Structure

This API is service use sequelize as ORM and we are using Postgres as our main database.

## Run Locally

First create and .env file locally and fill with you local data.

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

## Init project
 `npm install`

## Run the project in development mode
 `npm run serve`

## Build typescript for production
  `npm run build`

## Start the project for production mode requires built project
  `npm run start`


## Swagger API documenation
  See what end points are available locally: `http://127.0.0.1:2707/api-docs` or in our dev enviroment: `http://54.91.216.243:2707/api-docs`

## Testing in dev environment

You can test this API in our dev url: `http://54.91.216.243:2707/` test any of the endpoints in the api-docs

You can use this JWT TOKEN for testing:

```json
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ._SkVeJ_2H8eGm1EexNcNGQ83gr8krD8TK-eEvaWT4Xg
```


# Sequelize Cheatsheet

## Model creation
`npx sequelize model:generate  --name contracts  --attributes  id:string,contractName:string,executionCount:number;`

## Migration

  `npx sequelize db:create` will create new PostgreSQL db

  `npx sequelize db:drop` will drop new PostgreSQL db ATENTION

  `npx sequelize db:migrate` creates models

  `npx sequelize db:seed:all` to seed the test data

  `npx sequelize db:migrate:undo` undo a migration

  `npx sequelize db:seed --seed 20220217122511-contracts.js`seed a specific file

# Main Models

[Link to main models](https://growthlab.atlassian.net/wiki/spaces/EKB/pages/21266448/Models)

