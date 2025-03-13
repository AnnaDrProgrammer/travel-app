import { type Navigation } from '../../components/header';
import { PageLayout } from '../../layouts/PageLayouts';
import { ROUTER } from '../../shared/router';

const NAVIGATION: Navigation[] = [
  { link: ROUTER.HOME, title: 'Home', isActive: true },
  { link: ROUTER.ABOUT, title: 'About Us', isActive: false },
  { link: ROUTER.PLACES, title: 'Places', isActive: false },
  { link: ROUTER.SERVICES, title: 'Services', isActive: false },
];

export const HomePage = () => {
  return <PageLayout navigation={NAVIGATION}>HOME</PageLayout>;
};
