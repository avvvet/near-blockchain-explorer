import { Router, Request, Response } from "express"
import { verifyAuthorization } from "../middleware/authorization";
import Trans from '../models/transactions'
const transRoute = Router()

interface Query {
    page: number;
    size: number;
}

/**
 * @openapi
 *  components:
 *    schemas:
 *      Transactions:
 *         type: object
 *         required:
 *            - transactionHash
 *            - receiptId
 *            - sliceId
 *            - walletId
 *            - tagsJson
 *         properties:
 *             transactionHash:
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
 *                     transactionHash:
 *                       type: string
 *                       description: The transaction id.
 *                       example: DqozjvmrhrZ1Gnn9WMToRswNmadGU5SHoK13ug1LoEQF
 *
*/

transRoute.get('/', verifyAuthorization, (req: Request, res: Response) => {
    const { page, size } = req.query as unknown as Query;
    const offset = (page -1) * size;
    Trans.findAndCountAll(
        {
            offset: offset, limit: size,
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
 * /transactions/{transactionHash}:
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
 *         name: transactionHash
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

transRoute.get('/:transactionHash', verifyAuthorization, (req: Request | any, res: Response) => {
    Trans.findAll({
        where : {transactionHash: req.params.transactionHash},
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

export = transRoute