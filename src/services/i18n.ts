import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationES from 'locales/es/translation.json'
import translationEN from 'locales/en/translation.json'

const localLng = window.localStorage['LOCAL_STORAGE_LANGUAGE']

const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  }
}

i18n.use(initReactI18next).init({
  lng: localLng ?? 'es',
  interpolation: {
    escapeValue: false
  },
  resources: resources
})

export default i18n
