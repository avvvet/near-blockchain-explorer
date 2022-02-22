import HttpException from "./httpException";

export class NotAuthorizedException extends HttpException {

    constructor(objectName: string) {
        super(401,
            `${objectName}`);
    }

}