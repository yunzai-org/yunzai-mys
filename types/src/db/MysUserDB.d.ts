import BaseModel from './BaseModel.js';
declare class MysUserDB extends BaseModel {
    static find(ltuid?: string, create?: boolean): Promise<false | MysUserDB>;
    ck: any;
    type: any;
    device: any;
    uids: any;
    saveDB(mys: any): Promise<boolean>;
}
export default MysUserDB;
