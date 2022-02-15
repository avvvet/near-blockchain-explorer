import { Router, Request, Response } from "express"
import { verifyAuthorization } from "../middleware/authorization";
import Transactions from "../models/transactions";
import Wallets from '../models/wallets'
const walletsRoute = Router()

interface Query {
    page: number;
    size: number;
}

/**
 * @openapi
 *  components: 
 *    schemas:
 *      Wallets:
 *         type: object
 *         required:
 *            - walletId
 *            - email
 *            - phone
 *            - personaId
 *            - nearValue
 *            - transxRate
 *         properties:
 *             walletId:
 *                  type: string
 *                  description: Wallet id or user id
 *             email:
 *                   type: string
 *                   description: User email
 *             phone:
 *                   type: string
 *                   description: User phone
 *             personaId:
 *                   type: string
 *                   description: Persona id associated
 *             nearValue:
 *                   type: string
 *                   description: Near value
 *             transxRate:
 *                   type: string
 *                   description: Transaction rate
 */

/**
 * @swagger
 * tags:
 *   name: Wallets
 *   description: Retrieve wallet (user) records
*/

/**
 * @swagger
 * /wallets:
 *   get:
 *     summary: Retrieve list of wallets with pagination (filter).
 *     description: Retrieve list of wallets.
 *     tags: [Wallets]
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
 *         description: List of wallets.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Wallets'
 *               properties:
 *                 data:
 *                   type: array
*/

walletsRoute.get('/', verifyAuthorization, (req: Request, res: Response) => {
    const { page, size } = req.query as unknown as Query;
    const offset = (page -1) * size;
    Wallets.findAndCountAll(
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
 * /wallets/{walletId}:
 *   get:
 *     summary: Retrieve a User wallet by wallet id.
 *     description: Retrieve a single wallet.
 *     tags: [Wallets]
 *     parameters:
 *       - in: header
 *         name: jwt_token
 *         type: apiKey
 *         required: true
 *       - in: path
 *         name: walletId
 *         required: true
 *         description: ID of the wallet to retrieve.
 *     responses:
 *       200:
 *         description: A single wallet data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Wallets'
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     walletId:
 *                       type: string
 *                       description: The wallet id.
 *                       example: yzyz.near   
*/

walletsRoute.get('/:walletId', verifyAuthorization, (req: Request | any, res: Response) => {
    Wallets.findAll({
        where : {walletId: req.params.walletId}, 
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

export = walletsRoute