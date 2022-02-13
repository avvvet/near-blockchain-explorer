
/**
 * @openapi
 *  components: 
 *    schemas:
 *      System:
 *         type: object
 *         required:
 *            - status
 *            - date
 *         properties:
 *             status:
 *                  type: string
 *                  description: The status of the indexer server api
 *             date:
 *                   type: string
 *                   description: service response timestamp
 *                   format: date
 */


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
 *                   type: string
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
 *   name: System 
 *   description: API to get system related information and health.
*/

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: API to get Transactions.
*/


/**
 * @openapi
 * /system/status:
 *   get:
 *     description: Get indexer service api status
 *     tags: [System]
 *     responses:
 *       200:
 *         description: Returns api status information.
 *         content:
 *           application/json:
 *              schema:
 *                 $ref: '#/components/schemas/System'
 */

/**
 * @openapi
 * /Transactions/{transactionHash}:
 *   get:
 *     description: Get transaction by transactionHash
 *     tags: [Transactions]
 *     responses:
 *       200:
 *         description: Returns specific transaction.
 *         content:
 *           application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Transactions'
 */
