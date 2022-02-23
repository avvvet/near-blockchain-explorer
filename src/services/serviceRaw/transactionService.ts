import { BaseService } from '../baseService';
import { ObjectNotValidException } from '../../exceptions';
import { 
    Transactions,
} from '../../models/databaseRaw'
import Blocks from '../../models/databaseRaw/blocks';
import Chunks from '../../models/databaseRaw/chunks';

class TransactionService extends BaseService {
    constructor(){
        super(Transactions,
            ['block_timestamp', 'DESC']);
    }

    private includeModels : any[] =  [
        {
            model: Blocks,
            required: false,
        },
        {
            model: Chunks,
            required: false
        }
    ];

    public async getAllPaginated(page: number, size: number): Promise<any>{
        return await super.getAllPaginated(page,
            size,
            this.includeModels);
    }

    public async getByTransactionHash(transaction_hash: string): Promise<any>{

        if(!transaction_hash) throw new ObjectNotValidException('transaction_hash is required');

        return await super.getAllBy({transaction_hash},
            this.includeModels);
    }
}

export {
    TransactionService
}