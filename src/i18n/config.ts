import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'

import enUS from './locales/en-US.json';
import esMX from './locales/es-MX.json';

export const defaultNS = 'ns1';
const defaultLanguage = 'en-US'

export const defaultNamespace = 'default'
export const resources = {
    'en-US':{
        [defaultNamespace]: enUS
    },
    'es-MX': {
        [defaultNamespace]: esMX
    }
}

i18n.use(initReactI18next).init({
    defaultNS: defaultNamespace,
    ns: [defaultNamespace],
    resources,
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
  })