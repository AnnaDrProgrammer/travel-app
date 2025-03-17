import { PageLayout } from '../../layouts/PageLayouts';
import { MENU_NAVIGATION } from '../../shared/router';

export const AboutPage = () => {
  return (
    <PageLayout navigation={MENU_NAVIGATION}>
      <div>About Us</div>
    </PageLayout>
  );
};
