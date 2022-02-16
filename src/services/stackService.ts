import { BaseService } from './baseService';
import { ObjectNotValidException } from '../exceptions';
import Stacks from '../models/stacks';
import Transactions from '../models/transactions';


export class StackService extends BaseService {


    private includeModels : any[] = [{
        model: Transactions,
        required: true
    }];

    constructor() {
        super(Stacks);
    }

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