import { LANGUAGE } from 'constants/localStorage'
import i18n from 'i18next'
import translationES from 'locales/es/translation.json'
import translationEN from 'locales/en/translation.json'

type ResourcesType = {
  es: {
    translation: {}
  }
  en: {
    translation: {}
  }
}

const localLng: string = window.localStorage[LANGUAGE] ?? 'es'

const resources: ResourcesType = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  }
}

i18n.init({
  resources,
  lng: localLng ?? 'es',
  fallbackLng: 'es'
})

export default i18n
