
import { BaseService } from '../baseService';
import { ObjectNotValidException } from '../../exceptions';
import PersonaHistory from '../../models/databaseEtl/persona_history';
import { Wallets } from '../../models/databaseEtl';

export class PersonaHistoryService extends BaseService {
    constructor() {
        super(PersonaHistory);
    }

    private includeModels = [
        {
            model: Wallets,
            required: false
        }
    ];

    public async getAllPaginated(page: number, size: number): Promise<any> {
        return super.getAllPaginated(page, size, this.includeModels);
    }

    public async getById(walletId: number) {

        if (!walletId) throw new ObjectNotValidException('Wallet Id is required');

        return await super.getAllBy({ walletId }, this.includeModels);
    }
}