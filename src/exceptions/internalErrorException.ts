import HttpException from "./httpException";

export class InternalErrorException extends HttpException {

    constructor(meesagge: string) {
        super(500, `${meesagge}`);
    }
}