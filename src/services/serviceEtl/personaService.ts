
import { BaseService } from '../baseService';
import { ObjectNotValidException } from '../../exceptions';
import Personas from '../../models/databaseEtl/personas';

export class PersonaService extends BaseService {
    constructor() {
        super(Personas);
    }

    public async getAllPaginated(page: number, size: number): Promise<any> {
        return super.getAllPaginated(page, size, []);
    }

    public async getById(personaId: number) {

        if (!personaId) throw new ObjectNotValidException('Persona is required');

        return await super.getAllBy({ personaId }, []);
    }
}