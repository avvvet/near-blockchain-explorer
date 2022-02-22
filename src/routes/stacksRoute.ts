import { Router, Request, Response } from "express"
import asyncHandler from "express-async-handler"
import { PaginationQuery } from "./commons/paginationQuery"
import { StackService } from '../services/'

const stacksRoute = Router();
const stackService = new StackService();


/**
 * @openapi
 *  components:
 *    schemas:
 *      Stacks:
 *         type: object
 *         required:
 *            - stackId
 *            - appName
 *         properties:
 *             stackId:
 *                  type: number
 *                  description: App id or stack id
 *             appName:
 *                   type: string
 *                   description: App name
 */

/**
 * @swagger
 * tags:
 *   name: Stacks
 *   description: Retrieve Stacks (App) records
*/

/**
 * @swagger
 * /stacks:
 *   get:
 *     summary: Retrieve list of App with pagination (filter).
 *     description: Retrieve list of Apps.
 *     tags: [Stacks]
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
 *         description: List of Apps.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Stacks'
 *               properties:
 *                 data:
 *                   type: array
*/

stacksRoute.get('/',
    asyncHandler( async (req: Request, res: Response) => {

        const { page, size } = req.query as unknown as PaginationQuery;

        const response = await stackService.getAllPaginated(page,
            size);

        res.status(200).json(response);
    }))

/**
 * @swagger
 * /stacks/{stackId}:
 *   get:
 *     summary: Retrieve a Stack by app/stack id.
 *     description: Retrieve a single App.
 *     tags: [Stacks]
 *     parameters:
 *       - in: header
 *         name: jwt_token
 *         type: apiKey
 *         required: true
 *       - in: path
 *         name: stackId
 *         required: true
 *         description: ID of the App to retrieve.
 *     responses:
 *       200:
 *         description: A single App data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Stacks'
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     stackId:
 *                       type: number
 *                       description: The stack id.
 *                       example: 1
 *
*/

stacksRoute.get('/:stackId',
    asyncHandler (async (req: Request | any, res: Response) => {

        const response =  await stackService.getById(req.params.stackId);

        res.status(200).json(response);

    }))

export = stacksRoute