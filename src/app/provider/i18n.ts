import { createI18n } from 'vue-i18n'
import ar from '@/shared/locales/ar.json'
import en from '@/shared/locales/en.json'

export const i18n = createI18n({
  locale: 'ar',
  fallbackLocale: 'en',
  messages: { ar, en },
  legacy: false,
})
