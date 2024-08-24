declare class GsCfg {
    nameID: typeof Map.prototype | false;
    sr_nameID: typeof Map.prototype | false;
    isSr: boolean;
    defSetPath: string;
    defSet: {};
    configPath: string;
    config: {};
    watcher: {
        config: {};
        defSet: {};
    };
    ignore: string[];
    get element(): any;
    getdefSet(app: any, name: any): any;
    getConfig(app: any, name: any): any;
    getYaml(app: any, name: any, type: any): any;
    getFilePath(app: any, name: any, type: any): string;
    watch(file: any, app: any, name: any, type?: string): void;
    getBingCk(game?: string): Promise<{
        ck: {};
        ckQQ: {};
        noteCk: {};
    }>;
    roleIdToName(id: any): any;
    roleNameToID(keyword: any, isSr: any): any;
    shortName(name: any, isWeapon?: boolean): any;
    change_myspubCk(): Promise<void>;
    getGachaSet(groupId?: string): any;
    getMsgUid(msg: any): string | false;
    getRole(msg: any, filterMsg?: string, isSr?: boolean): false | {
        roleId: any;
        uid: string;
        alias: any;
        game: any;
        name: any;
    };
    cpCfg(app: any, name: any): void;
    _getAbbr(): void;
    _roleNameToID(keyword: any, isSr?: boolean): any;
    _getRole(msg: any, filterMsg?: string, _?: boolean): false | {
        roleId: any;
        uid: string;
        alias: any;
        name: any;
    };
    getWeaponDataByWeaponHash(_: any): {};
    getAllAbbr(): {};
    getBingCkSingle(_: any): {};
    saveBingCk(_: any, __: any): void;
    getElementByRoleName(_: any): string;
    getSkillDataByskillId(_: any, __: any): {};
    fightPropIdToName(_: any): string;
    getRoleTalentByTalentId(_: any): {};
    getAbbr(): void;
}
declare const _default: GsCfg;
export default _default;
