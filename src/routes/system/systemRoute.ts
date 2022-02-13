import { Router } from "express"

const systemRoute = Router()

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
 * @swagger
 * tags:
 *   name: System 
 *   description: API to get system related information and health.
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

systemRoute.get('/status', (req, res)  => {
    res.status(200).send({
        name: 'indexer service api is running ...',
        date: new Date().toString(),
        version: '1.0.0',
       });
})

export = systemRoute