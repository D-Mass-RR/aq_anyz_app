import en from '@/translations/en.json';

export const resources = {
  eng: {
    translation: en,
  },
};

export type Language = keyof typeof resources;
