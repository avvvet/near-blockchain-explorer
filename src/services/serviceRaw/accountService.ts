import { BaseService } from '../baseService';
import { ObjectNotValidException } from '../../exceptions';
import { 
    Accounts,
} from '../../models/databaseRaw'

class AccountService extends BaseService {
    constructor(){
        super(Accounts,
            ['id', 'DESC']);
    }

    private includeModels : any[] =  [
    ];


    public async getByAccountId(account_id: string): Promise<any>{

        if(!account_id) throw new ObjectNotValidException('account_id is required');

        return await super.getAllBy({account_id}, this.includeModels);
    }
}

export {
    AccountService
}