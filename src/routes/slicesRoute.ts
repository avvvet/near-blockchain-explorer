import { Router, Request, Response } from "express"
import asyncHandler from "express-async-handler"
import { PaginationQuery } from "./commons/paginationQuery"
import { SliceService } from "../services";
const slicesRoute = Router();
const sliceService = new SliceService();

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

slicesRoute.get('/', asyncHandler( async (req: Request, res: Response) => {
    const { page, size } = req.query as unknown as PaginationQuery;

    const response = await sliceService.getAllPaginated(page, size);

    res.status(200).json(response);
}))

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

slicesRoute.get('/:sliceId', asyncHandler ( async (req: Request | any, res: Response) => {

    const response =  await sliceService.getById(req.params.sliceId);

    res.status(200).json(response);
}))

export = slicesRoute