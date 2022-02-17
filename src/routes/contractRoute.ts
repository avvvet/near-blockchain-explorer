import { Router, Request, Response } from "express"
import asyncHandler from "express-async-handler"
import { PaginationQuery } from "./commons/paginationQuery"
import { ContractService } from "../services"

const contractRoute = Router();
const contractService = new ContractService();


/**
 * @openapi
 *  components:
 *    schemas:
 *      Contracts:
 *         type: object
 *         required:
 *            - contractName
 *            - executionCount
 *         properties:
 *             id:
 *                  type: number
 *                  description: Contract id
 *             contractName:
 *                   type: string
 *                   description: The name of this contracts
 *             executionCount:
 *                   type: number
 *                   description: The number of times this contract has been executed
 */

/**
 * @swagger
 * tags:
 *   name: Contracts
 *   description: Retrieve Contracts records
*/

/**
 * @swagger
 * /contracts:
 *   get:
 *     summary: Retrieve list of Contracts with pagination (filter).
 *     description: Retrieve list of Contracts.
 *     tags: [Contracts]
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
 *               $ref: '#/components/schemas/Contracts'
 *               properties:
 *                 data:
 *                   type: array
 *
 *
*/

contractRoute.get('/', asyncHandler( async (req: Request, res: Response) => {
    const { page, size } = req.query as unknown as PaginationQuery;

    const response = await contractService.getAllPaginated(page, size);

    res.status(200).json(response);
}))

/**
 * @swagger
 * /contracts/{contractId}:
 *   get:
 *     summary: Retrieve a Contract by id.
 *     description: Retrieve a single Contract.
 *     tags: [Contracts]
 *     parameters:
 *       - in: header
 *         name: jwt_token
 *         type: apiKey
 *         required: true
 *       - in: path
 *         name: contractId
 *         required: true
 *         description: ID of the Contract to retrieve.
 *     responses:
 *       200:
 *         description: A single Contract data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contracts'
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     contractId:
 *                       type: string
 *                       description: The contract id.
 *                       example: 25a617ec-3736-4f02-b88f-6dcae69a7e80
 *
*/

contractRoute.get('/:contractId', asyncHandler ( async (req: Request | any, res: Response) => {

    const response =  await contractService.getById(req.params.contractId);

    res.status(200).json(response);
}))

export = contractRoute