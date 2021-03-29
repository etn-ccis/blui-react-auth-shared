/* eslint-disable @typescript-eslint/naming-convention */
import i18n from 'i18next';
import { frCA, enUS } from 'date-fns/locale';

// for getting the device's language locale
// 'en' is default deviceLocale

const getDateLocale = (): Locale => {
    switch (i18n.language) {
        case 'fr':
            return frCA;
        default:
            return enUS;
    }
};

export const dateLocale = getDateLocale();
