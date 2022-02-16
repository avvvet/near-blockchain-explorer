import { Model, DataTypes, ModelStatic, WhereOptions } from 'sequelize';
import { ObjectNotFoundException, InternalErrorException } from '../exceptions/';

class BaseService {

    //recive constructor with sequalize model
    constructor(public model: ModelStatic<any>, public defaultOrderBy: string[] = ['createdAt', 'DESC']) {
    }

    //get all records paginated
    public async getAllPaginated(page: number, size: number, includeModels: any[]): Promise<any> {

        const offset = (page - 1) * size;

        const query: any = {

            offset: offset, limit: size,
            order: [
                this.defaultOrderBy
            ],
            raw: true,
            nest: true
        }

        if (includeModels.length > 0) {
            query.include = includeModels;
        }

        let result: any;

        try {
            result = await this.model.findAndCountAll(
                query
            );
        } catch (error: any) {
            throw new InternalErrorException(error.message);
        }

        const totalPages = Math.ceil(result.count / size);
        result.count = totalPages
        if (page > totalPages) throw new ObjectNotFoundException(`Page: `, String(page));
        return result;

    }

    public async getAllBy(where: WhereOptions<any>, includeModels: any[]): Promise<any> {

        const query: any = {
            where,
            order: [
                this.defaultOrderBy
            ],
            raw: true,
            nest: true
        }

        if (includeModels.length > 0) {
            query.include = includeModels;
        }

        try {
            return await this.model.findAll(query);
        } catch (error: any) {
            throw new InternalErrorException(error.message);
        }
    }



}

export {
    BaseService
}