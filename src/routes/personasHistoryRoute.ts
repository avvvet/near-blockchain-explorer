import { Router, Request, Response } from "express"
import asyncHandler from "express-async-handler"
import { PaginationQuery } from "./commons/paginationQuery"
import { PersonaHistoryService } from "../services";
const personaHistoryRoute = Router();
const personaHistoryService = new PersonaHistoryService();

/**
 * @openapi
 *  components:
 *    schemas:
 *      Personas:
 *         type: object
 *         required:
 *            - personaId
 *            - personaName
 *            - wlletId
 *            - memberDate
 *         properties:
 *             personaId:
 *                  type: number
 *                  description: Persona id
 *             personaName:
 *                   type: string
 *                   description: Persona name
 *             walletId: 
 *                   type: string
 *                   description: wallet reference
 *             memberDate:
 *                   type: date
 *                   description: Member date
 */

/**
 * @swagger
 * tags:
 *   name: Personas
 *   description: Retrieve wallet persona history
*/

/**
 * @swagger
 * /personas:
 *   get:
 *     summary: Retrieve list of persona history with pagination (filter).
 *     description: Retrieve list of Personas for wallets.
 *     tags: [Personas]
 *     parameters:
 *       - in: header
 *         name: jwt_token
 *         type: apiKey
 *         required: true
 *       - in: query
 *         name: page
 *         required: true
 *         description: page number.
 *       - in: query
 *         name: size
 *         required: true
 *         description: page size or limit.
 *     responses:
 *       200:
 *         description: List of Persona history for wallets.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Personas'
 *               properties:
 *                 data:
 *                   type: array
*/

personaHistoryRoute.get('/',
    asyncHandler( async (req: Request, res: Response) => {
        const { page, size } = req.query as unknown as PaginationQuery;

        const response = await personaHistoryService.getAllPaginated(page,
            size);

        res.status(200).json(response);
    }))

/**
 * @swagger
 * /personas/{walletId}:
 *   get:
 *     summary: Retrieve a Persona by wallet id.
 *     description: Retrieve a single wallet Persona.
 *     tags: [Personas]
 *     parameters:
 *       - in: header
 *         name: jwt_token
 *         type: apiKey
 *         required: true
 *       - in: path
 *         name: walletId
 *         required: true
 *         description: ID of the wallet to retrieve persona.
 *     responses:
 *       200:
 *         description: A single Persona data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Personas'
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     personaId:
 *                       type: string
 *                       description: The wallet id.
 *                       example: axyszslsl-sayxyls
*/

personaHistoryRoute.get('/:walletId',
    asyncHandler ( async (req: Request | any, res: Response) => {

        const response =  await personaHistoryService.getById(req.params.walletId);

        res.status(200).json(response);
    }))

export = personaHistoryRoute