declare const _default: () => {
    typing: "message";
    name: string;
    on: <T extends keyof import("yunzai").EventEmun = "message.group">(event: Parameters<import("yunzai").EventEmun[T]>[0]) => void;
};
export default _default;
