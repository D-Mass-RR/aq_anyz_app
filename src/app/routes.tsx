import ChooseInstitution from '@/sceens/ChooseInstitution';
import Intro from '@/sceens/Intro';
import Tabs from '@/sceens/Main/Tabs';
import SelectAddress from '@/sceens/SelectAddress';
import SelectOption from '@/sceens/SelectOption';
import Welcome from '@/sceens/Welcome';

export const routes = [
  { name: 'intro', component: Intro },
  { name: 'welcome', component: Welcome },
  { name: 'chooseInstitution', component: ChooseInstitution },
  { name: 'selectOption', component: SelectOption },
  { name: 'selectAddress', component: SelectAddress },
  { name: 'Tabs', component: Tabs },
];
