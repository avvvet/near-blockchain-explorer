import { Router, Request, Response, NextFunction } from "express"
import asyncHandler from "express-async-handler"
import { TransactionService } from '../services/'
import { PaginationQuery } from "./commons/paginationQuery"

const transRoute = Router();
const transactionService = new TransactionService();


/**
 * @openapi
 *  components:
 *    schemas:
 *      Transactions:
 *         type: object
 *         required:
 *            - transactionId
 *            - receiptId
 *            - sliceId
 *            - walletId
 *            - tagsJson
 *            - status
 *         properties:
 *             transactionId:
 *                  type: string
 *                  description: Transaction hash
 *             receiptId:
 *                   type: string
 *                   description: Receipt account
 *             sliceId:
 *                   type: number
 *                   description: Slice
 *             walletId:
 *                   type: string
 *                   description: Wallet account
 *             tagsJson:
 *                   type: object
 *                   description: Variable data
 *             status: 
 *                   type: string
 *                   description: Transaction status
 */

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Retrieve transactions
*/

/**
 * @swagger
 * /transactions:
 *   get:
 *     summary: Retrieve list of transactions.
 *     description: Retrieve transactions.
 *     tags: [Transactions]
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
 *         description: List of transaction.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transactions'
 *               properties:
 *                 data:
 *                   type: array
 *                   properties:
 *                     transactionId:
 *                       type: string
 *                       description: The transaction id.
 *                       example: DqozjvmrhrZ1Gnn9WMToRswNmadGU5SHoK13ug1LoEQF
 *
*/

transRoute.get('/',
    asyncHandler( async (req: Request, res: Response) => {

        const { page, size } = req.query as unknown as PaginationQuery;

        const response = await transactionService.getAllPaginated(page,
            size);

        res.status(200).json(response);

    }));

/**
 * @swagger
 * /transactions/{transactionId}:
 *   get:
 *     summary: Retrieve a transaction.
 *     description: Retrieve a single transaction.
 *     tags: [Transactions]
 *     parameters:
 *       - in: header
 *         name: jwt_token
 *         type: apiKey
 *         required: true
 *       - in: path
 *         name: transactionId
 *         required: true
 *         description: ID of the transaction to retrieve.
 *     responses:
 *       200:
 *         description: A single transaction.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transactions'
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     transactionHash:
 *                       type: string
 *                       description: The transaction id.
 *                       example: DqozjvmrhrZ1Gnn9WMToRswNmadGU5SHoK13ug1LoEQF
 *
*/

transRoute.get('/:transactionId' ,
    asyncHandler( async (req: Request | any, res: Response) => {

        const transactionId = req.params.transactionId;

        const response = await transactionService.getByTransactionId(transactionId);

        res.status(200).json(response);

    }))

export = transRoute