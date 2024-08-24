import { Sequelize, DataTypes, Model } from 'sequelize';
declare const sequelize: Sequelize;
export default class BaseModel extends Model {
    static Types: typeof DataTypes;
    static initDB(model: any, columns: any): void;
}
export { sequelize };
