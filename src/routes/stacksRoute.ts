import { Router, Request, Response } from "express"
import { verifyAuthorization } from "../middleware/authorization";
import Stacks from '../models/stacks'
import Transactions from "../models/transactions";
const stacksRoute = Router()

interface Query {
    page: number;
    size: number;
}

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
 *                  type: string
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
 *                   
 *          
*/

stacksRoute.get('/', verifyAuthorization, (req: Request, res: Response) => {
    const { page, size } = req.query as unknown as Query;
    const offset = (page -1) * size;
    Stacks.findAndCountAll(
        { 
            offset: offset, limit: size,
            include: [
                {
                    model: Transactions,
                    required: true
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ],
            raw: true,
            nest: true
        }
    ).then((result) => {
        if(result) {
            const total_pages = Math.ceil(result.count / size);
            result.count = total_pages
            if(page > total_pages) return res.status(404).json();
            return res.status(200).json(result);
        }
        return res.status(404).json();
    }).catch((error) => {
        return res.status(500).send({message : error.message});
    });
})

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
 *                       type: string
 *                       description: The stack id.
 *                       example: 809da4b0-79e1-4089-a124-0568b31f549j
 *         
*/

stacksRoute.get('/:stackId', verifyAuthorization, (req: Request | any, res: Response) => {
    Stacks.findAll({
        where : {stackId: req.params.stackId}, 
        include: [
            {
                model: Transactions,
                required: true
            }
        ],
        order: [
            ['createdAt', 'DESC']
          ],
          raw: true,
          nest: true
    }).then((results) => {
        if(results) return res.status(200).json(results)
    }).catch((error) => {
        return res.status(500).send({message : error.message});
    });
})

export = stacksRoute