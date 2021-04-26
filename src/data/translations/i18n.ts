/* eslint-disable @typescript-eslint/naming-convention */
import i18n from 'i18next';
import { fr, enUS, es } from 'date-fns/locale';

// for getting the device's language locale
// 'en' is default deviceLocale

const getDateLocale = (): Locale => {
    switch (i18n.language) {
        case 'fr':
        case 'fr_US':
        case 'fr_FR':
        case 'fr_CA':
            return fr;
        case 'es':
        case 'es_US':
        case 'es_MX':
        case 'es_ES':
            return es;
        default:
            return enUS;
    }
};

export const dateLocale = getDateLocale();
