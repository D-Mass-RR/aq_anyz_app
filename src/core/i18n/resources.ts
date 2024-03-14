import ar from '@/translations/ar.json';
import en from '@/translations/en.json';

export const resources = {
  eng: {
    translation: en,
  },
  kaz: {
    translation: ar,
  },
  ru: {
    translation: ar,
  },
};

export type Language = keyof typeof resources;
