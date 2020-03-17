export interface IMongo {
    findById(id: string): any
}

export interface IMySql {
    selectQuery(id: string): any
}

export class Mongo implements IMongo{
    findById(id: string): any {
        return {id};
    }
}

export class Mysql implements IMySql{
    selectQuery(id: string): any {
        return {id};
    }
}

export class MysqlAdapter extends Mongo {
    findById(id: string): any {
        return (new Mysql()).selectQuery(id);

    }
}

export function getId(dbClient: IMongo, id: string) {
    return dbClient.findById(id);
}
