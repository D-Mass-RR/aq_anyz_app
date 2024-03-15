import { ChooseInstitution } from '@/sceens/ChooseInstitution';
import Intro from '@/sceens/Intro';
import Welcome from '@/sceens/Welcome';

// TODO: Set types
export const routes = [
  { name: 'intro', component: Intro },
  { name: 'welcome', component: Welcome },
  { name: 'chooseInstitution', component: ChooseInstitution },
];
