import express, {Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import dontenv from 'dotenv'
import systemRoute from './routes/system/systemRoute'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc  from 'swagger-jsdoc'
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
    servers: [
      {
        url: "http://127.0.0.1:2707",
      },
    ],
  },
  apis: ["./dist/routes/*/*.js"],
};

const specs = swaggerJsdoc(options);

app.use(helmet())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true}))
app.use('/system', systemRoute)

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('service is running')
})

app.listen(PORT, () => {
    console.log(`indexer service running on port ${PORT}`)
})