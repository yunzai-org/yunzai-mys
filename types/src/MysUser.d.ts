import BaseModel from './BaseModel.js';
export default class MysUser extends BaseModel {
    gsUids: any[];
    srUids: any[];
    ltuid: any;
    uids: any;
    constructor(ltuid: any);
    get uid(): any;
    static create(ltuid: any, db?: boolean): Promise<false | MysUser>;
    static forEach(fn: any): Promise<void>;
    static getByQueryUid(uid: any, game?: string, onlySelfCk?: boolean): Promise<false | MysUser>;
    static eachServ(fn: any): Promise<void>;
    static clearCache(): Promise<void>;
    static getStatData(): Promise<{
        servs: {};
        count: any;
    }>;
    static delDisable(): Promise<number>;
    static checkCkStatus(ck: any): Promise<false | {
        status: number;
        msg: any;
        uids: any[];
    }>;
    getCkInfo(game?: string): {
        ck: any;
        uid: any;
        qq: string;
        ltuid: any;
    };
    getUidData(uid: any, game?: string): false | {
        uid: any;
        type: string;
        ltuid: any;
        game: string;
    };
    hasUid(uid: any, game?: string): any;
    getUid(game?: string): any;
    getUids(game?: string): any;
    getUidInfo(): string;
    reqMysUid(): Promise<{
        status: number;
        msg: string;
    }>;
    getGameRole(serv?: string): Promise<any>;
    getUserFullInfo(serv?: string): Promise<unknown>;
    cache: any;
    getCache(game?: string): any;
    initDB(db: any): Promise<void>;
    type: any;
    device: any;
    setCkData(data: {
        ck: string;
        type: string;
        device: string;
        uids?: any;
    }): void;
    db: any;
    save(): Promise<void>;
    addUid(uid: any, game?: string): boolean;
    hasGame(game?: string): boolean;
    ck: any;
    initCache(): Promise<boolean>;
    disable(game?: string): Promise<void>;
    del(): Promise<void>;
    delWithUser(_?: string): Promise<void>;
    addQueryUid(uid: any, game?: string): Promise<void>;
    getQueryUids(game?: string): Promise<any>;
    getQueryLtuid(uid: any, game?: string): Promise<any>;
    ownUid(uid: any, game?: string): any;
}
