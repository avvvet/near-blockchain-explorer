import express, {Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import dontenv from 'dotenv'
import systemRoute from './routes/system/systemRoute'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc  from 'swagger-jsdoc'
import transRoute from './routes/transRoute'
import walletsRoute from './routes/walletsRoute'
import stacksRoute from './routes/stacksRoute'
import slicesRoute from './routes/slicesRoute'
import cors from 'cors'

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

app.use(helmet())
app.use(cors({ origin: true, credentials: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: false}))
app.use('/system', systemRoute)
app.use('/transactions', transRoute)
app.use('/wallets', walletsRoute)
app.use('/stacks', stacksRoute)
app.use('/slices', slicesRoute)

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('service is running')
})

app.listen(PORT, () => {
    console.log(`indexer service running on port ${PORT}`)
})