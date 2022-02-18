import { BaseService } from '../baseService';
import { ObjectNotValidException } from '../../exceptions';
import Wallets from '../../models/databaseEtl/wallets';
import Transactions from '../../models/databaseEtl/transactions';

export class WalletService extends BaseService{

    private includeModels = [{
        model: Transactions,
        required: true
    }];

    constructor() {
        super(Wallets);
    }

    public async getAllPaginated(page: number, size: number): Promise<any> {
        return super.getAllPaginated(page, size,
            this.includeModels
        );
    }

    public async getById(walletId:string){

        if(!walletId) throw new ObjectNotValidException('walletId is required');

        return await super.getAllBy({walletId},this.includeModels);
    }

}