declare module 'jed' {
    export class Jed {
        constructor(options: any);
        gettext(key: string): string;
        pgettext(context: string, key: string): string;
    }
    export function sprintf(fmt: string, ...args: any[]): string;
}
