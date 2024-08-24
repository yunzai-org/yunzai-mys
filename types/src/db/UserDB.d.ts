import BaseModel from './BaseModel.js';
declare class UserDB extends BaseModel {
    static find(id: any, type?: string): Promise<UserDB>;
    saveDB(user: any): Promise<void>;
}
export default UserDB;
