export const stories = [
  {
    image: require('../assets/images/stories/story_2.png'),
    title: '15% Скидка именинникам',
  },
  {
    image: require('../assets/images/stories/story_1.png'),
    title: 'Плов за 1100 тенге',
  },
  {
    image: require('../assets/images/stories/story_3.png'),
    title: 'Скидка за сториз',
  },
  {
    image: require('../assets/images/stories/story_4.png'),
    title: 'Весь январь скидки 10%',
  },
];

export type Story = {
  title: string;
  image: string;
};
