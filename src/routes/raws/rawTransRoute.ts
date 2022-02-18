import { Router, Request, Response, NextFunction } from "express"
import asyncHandler from "express-async-handler"
import { TransactionService } from '../../services/serviceRaw/transactionService'
import { PaginationQuery } from "../commons/paginationQuery"

const rawTransRoute = Router();
const transactionService = new TransactionService();


/**
 * @openapi
 *  components:
 *    schemas:
 *      RawTransactions:
 *         type: object
 *         required:
 *            - transaction_hash
 *            - included_in_block_hash
 *            - included_in_chunk_hash
 *            - index_in_chunk
 *            - block_timestamp
 *         properties:
 *             transaction_hash:
 *                  type: string
 *                  description: Transaction hash
 *             included_in_block_hash:
 *                   type: string
 *                   description: block hash
 *             included_in_chunk_hash:
 *                   type: number
 *                   description: chunk hash
 *             index_in_chunk:
 *                   type: string
 *                   description: index
 *             block_timestamp:
 *                   type: number
 *                   description: block timestamp
 *             signer_account_id:
 *                   type: string
 *                   description: Account id
 *             signer_public_key:
 *                   type: string
 *                   description: Signer public key
 *             nonce:
 *                   type: string
 *             receiver_account_id:
 *                   type: string
 *             signature:
 *                   type: string
 *             status:
 *                   type: string
 *             converted_into_receipt_id:
 *                   type: string
 *             receipt_conversion_gas_burnt:
 *                   type: number
 *             receipt_conversion_tokens_burnt:
 *                   type: number
 */

/**
 * @swagger
 * tags:
 *   name: Raw Transactions
 *   description: Retrieve Raw Transactions
*/

/**
 * @swagger
 * /raws/transactions:
 *   get:
 *     summary: Retrieve list of Raw Transactions.
 *     description: Retrieve Raw transactions.
 *     tags: [Raw Transactions]
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
 *         description: List of Raw Transaction.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RawTransactions'
 *               properties:
 *                 data:
 *                   type: array
 *                   properties:
 *                     transactionHash:
 *                       type: string
 *                       description: The transaction id.
 *                       example: DqozjvmrhrZ1Gnn9WMToRswNmadGU5SHoK13ug1LoEQF
 *
*/

rawTransRoute.get('/', asyncHandler( async (req: Request, res: Response) => {
    const { page, size } = req.query as unknown as PaginationQuery;

    const response = await transactionService.getAllPaginated(page, size);
    res.status(200).json(response);

}));

/**
 * @swagger
 * /raws/transactions/{transaction_hash}:
 *   get:
 *     summary: Retrieve a Raw Transaction.
 *     description: Retrieve a single Raw Transaction.
 *     tags: [Raw Transactions]
 *     parameters:
 *       - in: header
 *         name: jwt_token
 *         type: apiKey
 *         required: true
 *       - in: path
 *         name: transaction_hash
 *         required: true
 *         description: ID of the raw transaction to retrieve.
 *     responses:
 *       200:
 *         description: A single raw transaction.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RawTransactions'
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     transaction_hash:
 *                       type: string
 *                       description: The raw transaction id.
 *                       example: DqozjvmrhrZ1Gnn9WMToRswNmadGU5SHoK13ug1LoEQF
*/

rawTransRoute.get('/:transaction_hash' , asyncHandler( async (req: Request | any, res: Response) => {

    const transaction_hash = req.params.transaction_hash;

    const response = await transactionService.getByTransactionHash(transaction_hash);

    res.status(200).json(response);

}))

export = rawTransRoute