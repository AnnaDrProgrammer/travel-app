import { type Navigation } from '../../components/header';
import { PageLayout } from '../../layouts/PageLayouts';
import { ROUTER } from '../../shared/router';

const NAVIGATION: Navigation[] = [
  { link: ROUTER.HOME, title: 'Home', isActive: false },
  { link: ROUTER.ABOUT, title: 'About Us', isActive: false },
  { link: ROUTER.PLACES, title: 'Places', isActive: false },
  { link: ROUTER.SERVICES, title: 'Services', isActive: true },
];

export const ServicesPage = () => {
  return (
    <PageLayout navigation={NAVIGATION}>
      <div>Это чилдрен сервис пейдж</div>
    </PageLayout>
  );
};
