export const categories_aq_anyz: Category[] = [
  {
    title: 'Европейская кухня',
    image: require('../assets/images/food/pasta.png'),
  },
  {
    title: 'Восточная кухня',
    image: require('../assets/images/food/plov.png'),
  },
  { title: 'Фаст-фуд', image: require('../assets/images/food/pasta.png') },
];
export const categories_vostochnui_dvor: Category[] = [
  {
    title: 'Европейская кухня',
    image: require('../assets/images/food/pasta.png'),
  },
  { title: 'Шашлыки', image: require('../assets/images/food/meat.png') },
  { title: 'Фаст-фуд', image: require('../assets/images/food/pasta.png') },
];

export const slider_categories: Category[] = [
  {
    image: require('../assets/images/categories/plov1.png'),
    title: 'Плов',
    id: 0,
  },
  {
    image: require('../assets/images/categories/lagman.png'),
    title: 'Лагман',
    id: 1,
  },
  {
    image: require('../assets/images/categories/pizza1.png'),
    title: 'Пицца',
    id: 2,
  },
  {
    image: require('../assets/images/categories/pasta1.png'),
    title: 'Паста',
    id: 3,
  },
];

export type Category = {
  title: string;
  image: string;
  id?: number;
};
