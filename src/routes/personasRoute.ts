import { Router, Request, Response } from "express"
import asyncHandler from "express-async-handler"
import { PaginationQuery } from "./commons/paginationQuery"
import { PersonaService } from "../services";
const personaRoute = Router();
const personaService = new PersonaService();

/**
 * @openapi
 *  components:
 *    schemas:
 *      Personas:
 *         type: object
 *         required:
 *            - personaId
 *            - personaName
 *            - memberCount
 *         properties:
 *             personaId:
 *                  type: number
 *                  description: Persona id
 *             personaName:
 *                   type: string
 *                   description: Persona name
 *             memberCount:
 *                   type: number
 *                   description: Persona member count
 */

/**
 * @swagger
 * tags:
 *   name: Personas
 *   description: Retrieve personas
*/

/**
 * @swagger
 * /Personas:
 *   get:
 *     summary: Retrieve list of Personas with pagination (filter).
 *     description: Retrieve list of Personas.
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
 *         description: List of Personas.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Personas'
 *               properties:
 *                 data:
 *                   type: array
*/

personaRoute.get('/', asyncHandler( async (req: Request, res: Response) => {
    const { page, size } = req.query as unknown as PaginationQuery;

    const response = await personaService.getAllPaginated(page, size);

    res.status(200).json(response);
}))

/**
 * @swagger
 * /personas/{personaId}:
 *   get:
 *     summary: Retrieve a Persona by persona id.
 *     description: Retrieve a single Persona.
 *     tags: [Personas]
 *     parameters:
 *       - in: header
 *         name: jwt_token
 *         type: apiKey
 *         required: true
 *       - in: path
 *         name: personaId
 *         required: true
 *         description: ID of the Persona to retrieve.
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
 *                       type: number
 *                       description: The Persona id.
 *                       example: 1
*/

personaRoute.get('/:personaId', asyncHandler ( async (req: Request | any, res: Response) => {

    const response =  await personaService.getById(req.params.personaId);

    res.status(200).json(response);
}))

export = personaRoute