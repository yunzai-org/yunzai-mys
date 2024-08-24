import BaseModel from './BaseModel.js';
export default class DailyCache extends BaseModel {
    keyPre: any;
    constructor(uid: number | string, game?: string);
    static create(uid?: number | string, game?: string): DailyCache;
    static getStoreKey(uid: any, game?: string): string;
    static eachCache(fn: any): Promise<void>;
    static clearOutdatedData(): Promise<void>;
    static decodeValue(value: any, decode?: boolean): any;
    static encodeValue(value: any): string;
    getTableKey(key: any, sub?: string): string;
    exTable(table: any, hasCount?: boolean): Promise<void>;
    empty(table: any): Promise<void>;
    kGet(table: any, key: any, decode?: boolean): Promise<any>;
    kSet(table: any, key: any, value: any): Promise<void>;
    kDel(table: any, key: any): Promise<number>;
    get(table: any, decode?: boolean): Promise<any>;
    set(table: any, value: any): Promise<string>;
    zAdd(table: any, key: any, item: any): Promise<void>;
    zList(table: any, key: any): Promise<string[]>;
    zKey(table: any, item: any): Promise<number>;
    zCount(table: any, key: any): Promise<number>;
    zMinKey(table: any): Promise<string>;
    zDisableKey(table: any, key: any, delCount?: boolean): Promise<void>;
    zGetDisableKey(table: any): Promise<string[]>;
    zDel(table: any, key: any, delCount?: boolean): Promise<boolean>;
    zStat(table: any): Promise<{
        score: number;
        value: string;
    }[]>;
}
