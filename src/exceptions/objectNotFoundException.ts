import HttpException from "./httpException";

export class ObjectNotFoundException extends HttpException {
    constructor(objectName: string, id: string) {
        super(404,
            `${objectName} - ${id} not found`);
    }
}
