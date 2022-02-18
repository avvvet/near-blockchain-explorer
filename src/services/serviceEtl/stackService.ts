import { BaseService } from '../baseService';
import { ObjectNotValidException } from '../../exceptions';
import Stacks from '../../models/databaseEtl/stacks';
import Transactions from '../../models/databaseEtl/transactions';


export class StackService extends BaseService {
    constructor() {
        super(Stacks);
    }

    private includeModels : any[] = [{
        model: Transactions,
        required: true
    }];

    public async getAllPaginated(page: number, size: number): Promise<any> {
        return super.getAllPaginated(page, size,
            this.includeModels
        );
    }

    public async getById(stackId:number){

        if(!stackId) throw new ObjectNotValidException('stackId is required');

        return await super.getAllBy({stackId},this.includeModels);
    }
}