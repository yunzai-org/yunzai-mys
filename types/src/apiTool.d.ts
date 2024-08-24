export default class apiTool {
    uid: any;
    isSr: boolean;
    server: any;
    game: string;
    constructor(uid: string | null, server: string, isSr?: boolean);
    getUrlMap: (data?: any) => any;
}
