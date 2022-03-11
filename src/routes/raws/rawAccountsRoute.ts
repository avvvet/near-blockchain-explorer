import { Router, Request, Response, NextFunction } from "express"
import asyncHandler from "express-async-handler"
import { AccountService } from '../../services/serviceRaw/accountService'

const rawAccountsRoute = Router();
const rawAccountService = new AccountService();

/**
 * @openapi
 *  components:
 *    schemas:
 *      Accounts:
 *         type: object
 *         required:
 *            - account_id
 *         properties:
 *             account_id:
 *                  type: string
 *                  description: account id (wallet id)
 *             created_by_receipt_id:
 *                   type: string
 *                   description: created by receipt id
 *             deleted_by_receipt_id:
 *                   type: string
 *                   description: receipt id
 *             total_transactions:
 *                   type: string
 *                   description: Total Transaction
 */

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: Retrieve user account (wallet)
*/

/**
 * @swagger
 * /accounts/{account_id}:
 *   get:
 *     summary: Retrieve a User wallet (account) by account id.
 *     description: Retrieve a single account.
 *     tags: [Accounts]
 *     parameters:
 *       - in: header
 *         name: jwt_token
 *         type: apiKey
 *         required: true
 *       - in: path
 *         name: account_id
 *         required: true
 *         description: ID of the wallet to retrieve.
 *     responses:
 *       200:
 *         description: A single Account (wallet) data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Wallets'
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     account_id:
 *                       type: string
 *                       description: The wallet id.
 *                       example: yzyz.near
*/

rawAccountsRoute.get('/:account_id',
    asyncHandler( async (req: Request | any, res: Response) => {

        const response = await rawAccountService.getByAccountId(req.params.account_id);
        res.status(200).json(response);

    }));

export = rawAccountsRoute