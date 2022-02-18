
import { BaseService } from '../baseService';
import { ObjectNotValidException } from '../../exceptions';
import Slice from '../../models/databaseEtl/slices';
import Transactions from '../../models/databaseEtl/transactions';

export class SliceService extends BaseService {

    private includeModels = [{
        model: Transactions,
        required: true
    }];

    constructor() {
        super(Slice);
    }

    public async getAllPaginated(page: number, size: number): Promise<any> {
        return super.getAllPaginated(page, size,
            this.includeModels
        );
    }

    public async getById(sliceId: number) {

        if (!sliceId) throw new ObjectNotValidException('Slice is required');

        return await super.getAllBy({ sliceId }, this.includeModels);
    }

}