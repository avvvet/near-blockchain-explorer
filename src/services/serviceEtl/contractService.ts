import { BaseService } from '../baseService';
import { ObjectNotValidException } from '../../exceptions';

import Contracts from '../../models/databaseEtl/contracts';

export class ContractService extends BaseService {
    constructor() {
        super(Contracts);
    }

    private includeModels = [];

    public async getAllPaginated(page: number, size: number): Promise<any> {
        return super.getAllPaginated(page,
            size,
            this.includeModels
        );
    }

    public async getById(contractId: string) {

        if (!contractId) throw new ObjectNotValidException('ContractId is required');

        return await super.getAllBy({ contractId },
            this.includeModels);
    }
}