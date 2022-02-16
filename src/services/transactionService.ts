import { BaseService } from './baseService';
import { ObjectNotValidException } from '../exceptions';

import Transanction from '../models/transactions';
import Wallets from '../models/wallets';
import Stacks from '../models/stacks';
import Slices from '../models/slices';




class TransactionService extends BaseService {


    private includeModels : any[] =  [
        {
            model: Wallets ,
            required: true
        },
        {
            model: Slices ,
            required: true
        },
        {
            model: Stacks ,
            required: true
        },
    ];

    constructor(){
        super(Transanction);
    }

    public async getAllPaginated(page: number, size: number): Promise<any>{
        return await super.getAllPaginated(page, size, this.includeModels);
    }

    public async getByTransactionHash(transactionHash: string): Promise<any>{

        if(!transactionHash) throw new ObjectNotValidException('transactionHash is required');

        return await super.getAllBy({transactionHash},this.includeModels);
    }

}

export {
    TransactionService
}