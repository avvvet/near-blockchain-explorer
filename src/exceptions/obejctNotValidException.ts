import HttpException from "./httpException";

export class ObjectNotValidException extends HttpException {

    constructor(objectName: string) {
        super(403, `${objectName}`);
    }

}