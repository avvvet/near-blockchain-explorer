
import { BaseService } from '../baseService';
import { ObjectNotValidException } from '../../exceptions';
import Receipts from '../../models/databaseEtl/receipts';
import Transactions from '../../models/databaseEtl/transactions';

export class ReceiptService extends BaseService {

    private includeModels = [
        {
            model: Transactions,
            required: true
        }
    ];

    constructor() {
        super(Receipts);
    }

    public async getAllPaginated(page: number, size: number): Promise<any> {
        return super.getAllPaginated(page,
            size,
            this.includeModels
        );
    }

    public async getById(receiptId: number) {

        if (!receiptId) throw new ObjectNotValidException('Receipt is required');

        return await super.getAllBy({ receiptId },
            this.includeModels);
    }

}