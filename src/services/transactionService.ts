import { BaseService } from './baseService';
import { ObjectNotValidException } from '../exceptions';

import Transanction from '../models/transactions'

class TransactionService extends BaseService {

    constructor(){
        super(Transanction);
    }

    public async getAllPaginated(page: number, size: number): Promise<any>{
        return await super.getAllPaginated(page, size, []);
    }

    public async getByTransactionHash(transactionHash: string): Promise<any>{

        if(!transactionHash) throw new ObjectNotValidException('transactionHash is required');

        return await super.getAllBy({transactionHash},[]);
    }

}

export {
    TransactionService
}