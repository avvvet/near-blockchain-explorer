import { Router, Request, Response } from "express"
import asyncHandler from "express-async-handler"
import { PaginationQuery } from "./commons/paginationQuery"
import { ReceiptService } from "../services";
const receiptsRoute = Router();
const receiptService = new ReceiptService();

/**
 * @openapi
 *  components:
 *    schemas:
 *      Receipts:
 *         type: object
 *         required:
 *            - receiptId
 *            - blockHash
 *            - status
 *         properties:
 *             receiptId:
 *                  type: number
 *                  description: Receipt id 
 *             blockHash:
 *                   type: string
 *                   description: Transaction block hash
 *             status: 
 *                   type: string
 *                   description: status of receipt
 */

/**
 * @swagger
 * tags:
 *   name: Receipts
 *   description: Retrieve receipts
*/

/**
 * @swagger
 * /receipts:
 *   get:
 *     summary: Retrieve list of receipts with pagination (filter).
 *     description: Retrieve list of receipts.
 *     tags: [Receipts]
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
 *         description: List of receipts.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Receipts'
 *               properties:
 *                 data:
 *                   type: array
 *
 *
*/

receiptsRoute.get('/',
    asyncHandler( async (req: Request, res: Response) => {
        const { page, size } = req.query as unknown as PaginationQuery;

        const response = await receiptService.getAllPaginated(page,
            size);

        res.status(200).json(response);
    }))

/**
 * @swagger
 * /receipts/{receiptId}:
 *   get:
 *     summary: Retrieve a receipt by id.
 *     description: Retrieve a single Receipt.
 *     tags: [Receipts]
 *     parameters:
 *       - in: header
 *         name: jwt_token
 *         type: apiKey
 *         required: true
 *       - in: path
 *         name: receiptId
 *         required: true
 *         description: ID of the Receipt to retrieve.
 *     responses:
 *       200:
 *         description: A single Receipt data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Receipts'
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     receiptId:
 *                       type: number
 *                       description: The receipt id.
 *                       example: 1
 *
*/

receiptsRoute.get('/:receiptId',
    asyncHandler ( async (req: Request | any, res: Response) => {

        const response =  await receiptService.getById(req.params.receiptId);

        res.status(200).json(response);
    }))

export = receiptsRoute