import express, {Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import dontenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc  from 'swagger-jsdoc'
import systemRoute from './routes/system/systemRoute'
import {
    transRoute,
    walletsRoute,
    receiptsRoute,
    personasHistoryRoute,
    contractRoute
} from './routes'
import rawTransRoute from './routes/raws/rawTransRoute'
import { verifyAuthorization } from './middleware/authorization'
import cors from 'cors'
import errorMiddleware from './middleware/error.middleware';

const app:Express = express()
const PORT = process.env.PORT || 2707

dontenv.config()
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "indexer service API",
            version: "1.0.0",
            description:
        "microservice indexer service api, api documentation.",
            license: {
                name: "",
                url: "",
            },
            contact: {
                name: "team-indexer",
                url: "primelab.io",
                email: "info@primelab.io",
            },
        },
        schemes: ["http", "https"],
        servers: [
            {
                url: "http://127.0.0.1:2707",
            },
        ],
    },
    apis: ["**/*.ts"]
};

const specs = swaggerJsdoc(options);

// this fix the problem with the swagger-ui-express in http
// see https://github.com/scottie1984/swagger-ui-express/issues/237 once we have the https in our app
// we can remove this config
// and go back to app.use(helmet());
app.use(
    helmet({
        contentSecurityPolicy: false,
    }))


app.use(cors({ origin: true, credentials: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())


app.use('/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs,
        { explorer: false}))
app.use('/system',
    systemRoute)


/**
 *  put end points that need authorization bellow this
 */
app.use(verifyAuthorization)

app.use('/transactions', transRoute)
app.use('/wallets', walletsRoute)
app.use('/receipts', receiptsRoute)
app.use('/contracts', contractRoute)
app.use('/personas', personasHistoryRoute)
app.use('/raws/transactions', rawTransRoute)

app.use(errorMiddleware);

app.get('/', (req: Request, res: Response) => {
        res.status(200).send('service is running')
})

app.listen(PORT, () => {
        console.log(`indexer service running on port ${PORT}`)
})