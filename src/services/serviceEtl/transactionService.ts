import { BaseService } from '../baseService';
import { ObjectNotValidException } from '../../exceptions';
import { 
    Transactions,
    Wallets,
    Stacks,
    Slices
} from '../../models/databaseEtl'

class TransactionService extends BaseService {
    constructor(){
        super(Transactions);
    }

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