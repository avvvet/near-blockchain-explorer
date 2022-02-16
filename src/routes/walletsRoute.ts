import { Router, Request, Response } from "express"
import asyncHandler from "express-async-handler"
import { PaginationQuery } from "./commons/paginationQuery"
import { WalletService } from "../services/";

const walletsRoute = Router()
const walletService = new WalletService();



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

walletsRoute.get('/', asyncHandler ( async (req: Request, res: Response) => {
    const { page, size } = req.query as unknown as PaginationQuery;
    const resposne = await walletService.getAllPaginated(page, size);
    res.status(200).json(resposne);
}));

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

walletsRoute.get('/:walletId', asyncHandler( async (req: Request | any, res: Response) => {

    const response = await walletService.getById(req.params.walletId);
    res.status(200).json(response);

}));

export = walletsRoute