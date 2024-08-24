export default class MysApi {
    uid: any;
    cookie: any;
    isSr: any;
    server: any;
    apiTool: any;
    cacheCd: number;
    _device: any;
    option: any;
    constructor(uid: any, cookie: any, option?: {}, isSr?: boolean, device?: string);
    get device(): any;
    getUrl(type: any, data?: {}): false | {
        url: any;
        headers: {
            'x-rpc-app_version': any;
            'x-rpc-client_type': any;
            'User-Agent': any;
            Referer: any;
            DS: string;
            Cookie: any;
        };
        body: any;
    };
    getServer(): "cn_gf01" | "cn_qd01" | "prod_gf_cn" | "prod_qd_cn" | "prod_official_usa" | "os_usa" | "prod_official_euro" | "os_euro" | "prod_official_asia" | "os_asia" | "prod_official_cht" | "os_cht";
    _device_fp: any;
    getData(type: any, data?: any, cached?: boolean): Promise<any>;
    getHeaders(query?: string, body?: string): {
        'x-rpc-app_version': any;
        'x-rpc-client_type': any;
        'User-Agent': any;
        Referer: any;
        DS: string;
        Cookie: any;
    };
    getDs(q?: string, b?: string): string;
    getGuid(): string;
    cacheKey(type: any, data: any): string;
    cache(res: any, cacheKey: any): Promise<void>;
    getAgent(): Promise<any>;
    generateSeed(length?: number): string;
}
