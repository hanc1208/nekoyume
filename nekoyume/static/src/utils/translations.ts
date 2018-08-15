import axios from 'axios';
import { Jed } from 'jed';
import { mo } from 'jed-gettext-parser';

let jed: Jed | null;

export async function initializeI18n(translationsUri: string) {
    const response = await axios({ url: translationsUri, responseType: 'arraybuffer' });
    const translations = await response.data;
    jed = new Jed({
        'domain': 'messages',
        'locale_data': mo.parse(translations),
    });
}

export function gettext(key: string) {
    if (jed == null) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('Jed is not initialized yet, but gettext(key) was called.');
        }
        return key;
    }
    return jed.gettext(key);
}
