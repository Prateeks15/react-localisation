import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // pass i18n to react-i18next
  .use(LanguageDetector)  // detect user language
  .use(HttpApi)           // load translations from the backend
  .init({
    supportedLngs: ['en', 'es'],
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
