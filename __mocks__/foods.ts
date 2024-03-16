export const plov_cards: CardData[] = [
  {
    title: 'Плов Свадебный',
    description:
      'Легендарный сытный плов из риса твердого сорта лазер с говядиной',
    price: '2598 ₸',
    image: require('../assets/images/card_food/card_plov.png'),
  },
  {
    title: 'Плов Ханский',
    description:
      'Сытный плов с говядиной, из риса твердого сорта лазер. Подается с казы.',
    price: '3600 ₸',
    image: require('../assets/images/card_food/card_plov2.png'),
  },
  {
    title: 'Плов Чайханский',
    description:
      'Необыкновенный темный пряный плов с насыщенным вкусом специй из сорта риса лазер.',
    price: '3600 ₸',
    image: require('../assets/images/card_food/card_plov3.png'),
  },
];

export const lagman_cards: CardData[] = [
  {
    title: 'Жареный лагман',
    description:
      'Жареный лагман с хрустящими овощами. В составе из капусты пекинской, перца полугорького, сельдерея',
    price: '3100 ₸',
    image: require('../assets/images/card_food/card_lagman.png'),
  },
  {
    title: 'Суйру лагман',
    description:
      'Национальное блюдо из домашней лапши с мелко рубленной говядиной, тушенной с овощами',
    price: '3300 ₸',
    image: require('../assets/images/card_food/card_lagman2.png'),
  },
  {
    title: 'Плов Чайханский',
    description:
      'Жареный лагман с хрустящими овощами. В составе из капусты пекинской, перца полугорького, сельдерея',
    price: '3100 ₸',
    image: require('../assets/images/card_food/card_lagman3.png'),
  },
];

export const pizza_cards: CardData[] = [
  {
    title: 'Карбонара',
    description:
      'Традиционная пицца с копченой говядиной халал, сыром моцарелла и рукколой',
    price: '3690 ₸',
    image: require('../assets/images/card_food/card_pizza.png'),
  },
  {
    title: 'Пицца с казы',
    description: 'Авторская пицца от Aq Anyz c сочным казы и соленым огурцами',
    price: '4190 ₸',
    image: require('../assets/images/card_food/card_pizza2.png'),
  },
  {
    title: 'Маргарита',
    description: 'Классическая итальянская пицца с томатами и сыром Моцарелла',
    price: '2290 ₸',
    image: require('../assets/images/card_food/card_pizza3.png'),
  },
];

export type CardData = {
  title: string;
  description: string;
  image: string;
  price: string;
};
