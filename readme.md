# Indexer service api
Backend service API for indexer. This service receives all the updates from the indexer-explorer and expose API so other projects can use the block-chain data.

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

[Link to schemas](https://lucid.app/lucidchart/ed1f4261-259a-4142-9c8d-62e77e1c95e5/edit?invitationId=inv_7cc5aa93-db24-4ad2-b2f4-2dcd301e24d9&page=0_0#)


|Model           | Description                   |
|----------------|-------------------------------|
|Contract        |           |
|Persona         |           |
|Slice           | A slice encompasses all of the screens and back-end functionality requiring to take a single action on the Near blockchain Ex: purchasing wifi with near tokens. |
|Stack           |Is a product that comprises multiple slices to provide a more complex experience to the consumer|
|Wallet          ||

## Contract
```json
{
        "transactionHash": "1VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzzq",
        "receiptId": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near",
        "sliceId": "1",
        "walletId": "yzyz.near",
        "tagsJson": {
            "gas": 30000000000000,
            "deposit": "0",
            "args_json": {
                "memo": "",
                "amount": 10000000000000000000,
                "account_id": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near"
            },
            "args_base64": "eyJhY2NvdW50X2lkIjoiYTA5ZGE0YjAtNzllMS00MDg5LWExMjQtMDU2OGIzMWY1NDliLmZlaXl1Lm5lYXIiLCJhbW91bnQiOjEwMDAwMDAwMDAwMDAwMDAwMDAwLCJtZW1vIjoiIn0=",
            "method_name": "send_tokens"
        },
        "status": "UNKNOWN",
        "createdAt": "2022-02-17T18:41:57.016Z",
        "updatedAt": "2022-02-17T18:41:57.016Z",
        "stackId": "1",
        "Wallet": {
            "walletId": "yzyz.near",
            "email": "abc@primelab.io",
            "phone": "+12028518274",
            "personaId": "a09da4b0-79e1-4089-a124-0568b31f549b",
            "nearValue": "00000000000",
            "transxRate": 0.34,
            "createdAt": "2022-02-17T18:41:56.632Z",
            "updatedAt": "2022-02-17T18:41:56.632Z"
        },
        "Slice": {
            "sliceId": "1",
            "actionName": "purchased nft 98775444",
            "createdAt": "2022-02-17T18:41:56.894Z",
            "updatedAt": "2022-02-17T18:41:56.894Z"
        },
        "Stack": {
            "stackId": "1",
            "appName": "social-game-v1",
            "createdAt": "2022-02-17T18:41:56.758Z",
            "updatedAt": "2022-02-17T18:41:56.758Z"
        }
    }

```

## Persona

```json
    {
        "personaId": "1",
        "personaName": "game centric statistical",
        "memberCount": "200000",
        "createdAt": "2022-02-18T13:04:11.964Z",
        "updatedAt": "2022-02-18T13:04:11.964Z"
    }
```

## Slice

```json
    {
        "sliceId": "1",
        "actionName": "purchased nft 98775444",
        "createdAt": "2022-02-18T13:04:11.450Z",
        "updatedAt": "2022-02-18T13:04:11.450Z",
        "Transactions": [
            {
                "transactionHash": "1VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzzq",
                "receiptId": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near",
                "sliceId": "1",
                "walletId": "yzyz.near",
                "tagsJson": {
                    "gas": 30000000000000,
                    "deposit": "0",
                    "args_json": {
                        "memo": "",
                        "amount": 10000000000000000000,
                        "account_id": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near"
                    },
                    "args_base64": "eyJhY2NvdW50X2lkIjoiYTA5ZGE0YjAtNzllMS00MDg5LWExMjQtMDU2OGIzMWY1NDliLmZlaXl1Lm5lYXIiLCJhbW91bnQiOjEwMDAwMDAwMDAwMDAwMDAwMDAwLCJtZW1vIjoiIn0=",
                    "method_name": "send_tokens"
                },
                "status": "UNKNOWN",
                "createdAt": "2022-02-18T13:04:11.570Z",
                "updatedAt": "2022-02-18T13:04:11.570Z",
                "stackId": "1"
            },
            {
                "transactionHash": "2VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzzb",
                "receiptId": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near",
                "sliceId": "1",
                "walletId": "bmw.near",
                "tagsJson": {
                    "gas": 30000000000000,
                    "deposit": "0",
                    "args_json": {
                        "memo": "",
                        "amount": 10000000000000000000,
                        "account_id": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near"
                    },
                    "args_base64": "eyJhY2NvdW50X2lkIjoiYTA5ZGE0YjAtNzllMS00MDg5LWExMjQtMDU2OGIzMWY1NDliLmZlaXl1Lm5lYXIiLCJhbW91bnQiOjEwMDAwMDAwMDAwMDAwMDAwMDAwLCJtZW1vIjoiIn0=",
                    "method_name": "send_tokens"
                },
                "status": "UNKNOWN",
                "createdAt": "2022-02-18T13:04:11.570Z",
                "updatedAt": "2022-02-18T13:04:11.570Z",
                "stackId": "1"
            },
            {
                "transactionHash": "5VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzze",
                "receiptId": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near",
                "sliceId": "1",
                "walletId": "bmw.near",
                "tagsJson": {
                    "gas": 30000000000000,
                    "deposit": "0",
                    "args_json": {
                        "memo": "",
                        "amount": 10000000000000000000,
                        "account_id": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near"
                    },
                    "args_base64": "eyJhY2NvdW50X2lkIjoiYTA5ZGE0YjAtNzllMS00MDg5LWExMjQtMDU2OGIzMWY1NDliLmZlaXl1Lm5lYXIiLCJhbW91bnQiOjEwMDAwMDAwMDAwMDAwMDAwMDAwLCJtZW1vIjoiIn0=",
                    "method_name": "send_tokens"
                },
                "status": "UNKNOWN",
                "createdAt": "2022-02-18T13:04:11.570Z",
                "updatedAt": "2022-02-18T13:04:11.570Z",
                "stackId": "2"
            }
        ]
    }
```

## Stack

```json
    {
        "stackId": "1",
        "appName": "social-game-v1",
        "createdAt": "2022-02-18T13:04:11.330Z",
        "updatedAt": "2022-02-18T13:04:11.330Z",
        "Transactions": [
            {
                "transactionHash": "1VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzzq",
                "receiptId": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near",
                "sliceId": "1",
                "walletId": "yzyz.near",
                "tagsJson": {
                    "gas": 30000000000000,
                    "deposit": "0",
                    "args_json": {
                        "memo": "",
                        "amount": 10000000000000000000,
                        "account_id": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near"
                    },
                    "args_base64": "eyJhY2NvdW50X2lkIjoiYTA5ZGE0YjAtNzllMS00MDg5LWExMjQtMDU2OGIzMWY1NDliLmZlaXl1Lm5lYXIiLCJhbW91bnQiOjEwMDAwMDAwMDAwMDAwMDAwMDAwLCJtZW1vIjoiIn0=",
                    "method_name": "send_tokens"
                },
                "status": "UNKNOWN",
                "createdAt": "2022-02-18T13:04:11.570Z",
                "updatedAt": "2022-02-18T13:04:11.570Z",
                "stackId": "1"
            },
            {
                "transactionHash": "2VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzzb",
                "receiptId": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near",
                "sliceId": "1",
                "walletId": "bmw.near",
                "tagsJson": {
                    "gas": 30000000000000,
                    "deposit": "0",
                    "args_json": {
                        "memo": "",
                        "amount": 10000000000000000000,
                        "account_id": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near"
                    },
                    "args_base64": "eyJhY2NvdW50X2lkIjoiYTA5ZGE0YjAtNzllMS00MDg5LWExMjQtMDU2OGIzMWY1NDliLmZlaXl1Lm5lYXIiLCJhbW91bnQiOjEwMDAwMDAwMDAwMDAwMDAwMDAwLCJtZW1vIjoiIn0=",
                    "method_name": "send_tokens"
                },
                "status": "UNKNOWN",
                "createdAt": "2022-02-18T13:04:11.570Z",
                "updatedAt": "2022-02-18T13:04:11.570Z",
                "stackId": "1"
            }
        ]
    }
```

## Wallet

```json
    {
        "walletId": "yzyz.near",
        "email": "abc@primelab.io",
        "phone": "+12028518274",
        "personaId": "a09da4b0-79e1-4089-a124-0568b31f549b",
        "nearValue": "00000000000",
        "transxRate": 0.34,
        "createdAt": "2022-02-18T13:04:11.205Z",
        "updatedAt": "2022-02-18T13:04:11.205Z",
        "Transactions": [
            {
                "transactionHash": "1VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzzq",
                "receiptId": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near",
                "sliceId": "1",
                "walletId": "yzyz.near",
                "tagsJson": {
                    "gas": 30000000000000,
                    "deposit": "0",
                    "args_json": {
                        "memo": "",
                        "amount": 10000000000000000000,
                        "account_id": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near"
                    },
                    "args_base64": "eyJhY2NvdW50X2lkIjoiYTA5ZGE0YjAtNzllMS00MDg5LWExMjQtMDU2OGIzMWY1NDliLmZlaXl1Lm5lYXIiLCJhbW91bnQiOjEwMDAwMDAwMDAwMDAwMDAwMDAwLCJtZW1vIjoiIn0=",
                    "method_name": "send_tokens"
                },
                "status": "UNKNOWN",
                "createdAt": "2022-02-18T13:04:11.570Z",
                "updatedAt": "2022-02-18T13:04:11.570Z",
                "stackId": "1"
            },
            {
                "transactionHash": "3VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzzc",
                "receiptId": "a09da4b0-79e1-4089-a124-0568b31f549b.yellow.near",
                "sliceId": "2",
                "walletId": "yzyz.near",
                "tagsJson": {
                    "gas": 30000000000000,
                    "deposit": "0",
                    "args_json": {
                        "memo": "",
                        "amount": 10000000000000000000,
                        "account_id": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near"
                    },
                    "args_base64": "eyJhY2NvdW50X2lkIjoiYTA5ZGE0YjAtNzllMS00MDg5LWExMjQtMDU2OGIzMWY1NDliLmZlaXl1Lm5lYXIiLCJhbW91bnQiOjEwMDAwMDAwMDAwMDAwMDAwMDAwLCJtZW1vIjoiIn0=",
                    "method_name": "send_tokens"
                },
                "status": "FAILURE",
                "createdAt": "2022-02-18T13:04:11.570Z",
                "updatedAt": "2022-02-18T13:04:11.570Z",
                "stackId": "2"
            },
            {
                "transactionHash": "4VdQ4GkGVuRTuNXiqUchQGLxMydP9nDBKH91Nj4QCzzd",
                "receiptId": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near",
                "sliceId": "2",
                "walletId": "yzyz.near",
                "tagsJson": {
                    "gas": 30000000000000,
                    "deposit": "0",
                    "args_json": {
                        "memo": "",
                        "amount": 10000000000000000000,
                        "account_id": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near"
                    },
                    "args_base64": "eyJhY2NvdW50X2lkIjoiYTA5ZGE0YjAtNzllMS00MDg5LWExMjQtMDU2OGIzMWY1NDliLmZlaXl1Lm5lYXIiLCJhbW91bnQiOjEwMDAwMDAwMDAwMDAwMDAwMDAwLCJtZW1vIjoiIn0=",
                    "method_name": "send_tokens"
                },
                "status": "UNKNOWN",
                "createdAt": "2022-02-18T13:04:11.570Z",
                "updatedAt": "2022-02-18T13:04:11.570Z",
                "stackId": "2"
            },
            {
                "transactionHash": "DqozjvmrhrZ1Gnn9WMToRswNmadGU5SHoK13ug1LoEQF",
                "receiptId": "a09da4b0-79e1-4089-a124-0568b31f549b.yellow.near",
                "sliceId": "2",
                "walletId": "yzyz.near",
                "tagsJson": {
                    "gas": 30000000000000,
                    "deposit": "0",
                    "args_json": {
                        "memo": "",
                        "amount": 10000000000000000000,
                        "account_id": "a09da4b0-79e1-4089-a124-0568b31f549b.feiyu.near"
                    },
                    "args_base64": "eyJhY2NvdW50X2lkIjoiYTA5ZGE0YjAtNzllMS00MDg5LWExMjQtMDU2OGIzMWY1NDliLmZlaXl1Lm5lYXIiLCJhbW91bnQiOjEwMDAwMDAwMDAwMDAwMDAwMDAwLCJtZW1vIjoiIn0=",
                    "method_name": "send_tokens"
                },
                "status": "UNKNOWN",
                "createdAt": "2022-02-18T13:04:11.570Z",
                "updatedAt": "2022-02-18T13:04:11.570Z",
                "stackId": "3"
            }
        ]
    }
```