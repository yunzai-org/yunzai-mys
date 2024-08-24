declare const _default: {
    getLtuid(data: any): any;
    getGameKey(game: any): "gs" | "sr";
    getDeviceGuid(): string;
    eachGame(fn: any): Promise<void>;
    eachServ(fn: any): Promise<void>;
};
export default _default;
