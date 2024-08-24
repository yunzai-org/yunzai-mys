export declare function getRoot(root?: string): string;
export declare function createDir(path?: string, root?: string, includeFile?: boolean): void;
export declare function isPromise(data: any): data is Promise<unknown>;
export declare function forEach(data: any, fn: any): Promise<void>;
