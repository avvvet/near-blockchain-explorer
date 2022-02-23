import { BaseService } from '../baseService';
import { ObjectNotValidException } from '../../exceptions';
import { 
    Transactions,
    Wallets,
    Receipts,
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
            model: Receipts ,
            required: true
        }
    ];

    public async getAllPaginated(page: number, size: number): Promise<any>{
        return await super.getAllPaginated(page,
            size,
            this.includeModels);
    }

    public async getByTransactionId(transactionId: string): Promise<any>{

        if(!transactionId) throw new ObjectNotValidException('transactionId is required');

        return await super.getAllBy({transactionId},
            this.includeModels);
    }
}

export {
    TransactionService
}