import en from '@/translations/en.json';

export const resources = {
  eng: {
    translation: en,
  },
  kaz: {
    translation: en,
  },
  ru: {
    translation: en,
  },
};

export type Language = keyof typeof resources;
