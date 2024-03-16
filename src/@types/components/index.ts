type ItemId = number;
export type LanguageId = 'eng' | 'ru' | 'kaz';
export type Buttons = {
  label: string;
  icon: string;
  id: ItemId;
  value: LanguageId;
};
