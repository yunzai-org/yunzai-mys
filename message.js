import { middlewareOptions, useEvent } from 'yunzai';

const srReg = /^#?(\*|星铁|星轨|穹轨|星穹|崩铁|星穹铁道|崩坏星穹铁道|铁道)+/;
const zzzReg = /^#?(%|zzz|绝区零|ZZZ)+/;
var message = () => {
    return middlewareOptions({
        typing: 'message',
        name: 'message-commands',
        on: event => {
            useEvent(e => {
                Object.defineProperty(e, 'isSr', {
                    get: () => e.game === 'sr',
                    set: v => (e.game = v ? 'sr' : 'gs')
                });
                Object.defineProperty(e, 'isGs', {
                    get: () => e.game === 'gs',
                    set: v => (e.game = v ? 'gs' : 'sr')
                });
                if (srReg.test(e.msg)) {
                    e.game = 'sr';
                }
                else if (zzzReg.test(e.msg)) {
                    e.game = 'zzz';
                }
                if (srReg.test(e.msg)) {
                    e.msg = e.msg.replace(srReg, '#星铁');
                }
                else if (zzzReg.test(e.msg)) {
                    e.msg = e.msg.replace(srReg, '#绝区零');
                }
            }, [event, 'message.group', 'message.private']);
        }
    });
};

export { message as default };
