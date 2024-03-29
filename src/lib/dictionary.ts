// import 'server-only'
// import type { Locale } from '@/i18n.config'

// const dictionaries = {
//   en: () => import('@/dictionaries/en.json').then(module => module.default),
//   de: () => import('@/dictionaries/de.json').then(module => module.default)
// }

// export const getDictionary = async (locale: Locale) => dictionaries[locale]()

import 'server-only';
import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  de: () => import('@/dictionaries/de.json').then((module) => module.default),
};


export const getDictionary = async (locale: Locale) => {
  return locale == 'de' ? dictionaries.de() : dictionaries.en();
};