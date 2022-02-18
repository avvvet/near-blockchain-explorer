import { Model, DataTypes, ModelStatic, WhereOptions } from 'sequelize';
import { ObjectNotFoundException, InternalErrorException } from '../exceptions/';

interface Page{
    page: number;
    size: number;
}

interface ResultItems{
    items: any[];
    totalItems: number;
    totalPages: number;
    next?: Page,
    previous?: Page
}


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
            raw: false,
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

        return this.prepareResultItems(result, page, size);

    }

    public async getAllBy(where: WhereOptions<any>, includeModels: any[]): Promise<any> {

        const query: any = {
            where,
            order: [
                this.defaultOrderBy
            ],
            raw: false,
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

    public prepareResultItems(result:any, page:number, size:number): ResultItems{

        const totalPages = Math.ceil(result.count / size);

        if (page > totalPages) throw new ObjectNotFoundException(`Page:`, String(page));

        const data : ResultItems = {
            items: result.rows,
            totalItems: result.count,
            totalPages: totalPages,
        };

        const startIndex = (page - 1) * size;
        const endIndex = page * size;

        if(endIndex < data.totalItems){
            data.next = {
                page: Number(page) + 1,
                size: Number(size)
            }

        }
        if(startIndex > 0){
            data.previous = {
                page: Number(page) - 1,
                size: Number(size)
            }
        }

        return data;

    }


}

export {
    BaseService
}