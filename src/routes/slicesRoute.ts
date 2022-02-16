import { Router, Request, Response } from "express"
import { verifyAuthorization } from "../middleware/authorization";
import Slices from "../models/slices";
import Transactions from "../models/transactions";
const slicesRoute = Router()

interface Query {
    page: number;
    size: number;
}

/**
 * @openapi
 *  components:
 *    schemas:
 *      Slices:
 *         type: object
 *         required:
 *            - sliceId
 *            - actionName
 *         properties:
 *             sliceId:
 *                  type: number
 *                  description: Action id or slice id
 *             actionName:
 *                   type: string
 *                   description: Action name
 */

/**
 * @swagger
 * tags:
 *   name: Slices
 *   description: Retrieve Slices (Action) records
*/

/**
 * @swagger
 * /slices:
 *   get:
 *     summary: Retrieve list of Actions with pagination (filter).
 *     description: Retrieve list of Slices.
 *     tags: [Slices]
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
 *         description: List of Slices.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Slices'
 *               properties:
 *                 data:
 *                   type: array
 *
 *
*/

slicesRoute.get('/', verifyAuthorization, (req: Request, res: Response) => {
    const { page, size } = req.query as unknown as Query;
    const offset = (page -1) * size;
    Slices.findAndCountAll(
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
 * /slices/{sliceId}:
 *   get:
 *     summary: Retrieve a Slice by action id.
 *     description: Retrieve a single Slice.
 *     tags: [Slices]
 *     parameters:
 *       - in: header
 *         name: jwt_token
 *         type: apiKey
 *         required: true
 *       - in: path
 *         name: sliceId
 *         required: true
 *         description: ID of the Slice to retrieve.
 *     responses:
 *       200:
 *         description: A single Slice data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Slices'
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

slicesRoute.get('/:sliceId', verifyAuthorization, (req: Request | any, res: Response) => {
    Slices.findAll({
        where : {sliceId: req.params.sliceId},
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

export = slicesRoute