export default class BaseModel {
    _uuid: any;
    constructor();
    _getThis(model: any, id?: string, time?: number): any;
    _cacheThis(model?: any, id?: any, time?: number): any;
    _expire(time?: number): any;
    _delCache(): void;
    gameKey(game?: string): "gs" | "sr";
    isGs(game?: string): boolean;
    isSr(game?: string): boolean;
}
