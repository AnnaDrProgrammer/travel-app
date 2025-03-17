import { PageLayout } from '../../layouts/PageLayouts';
import { MENU_NAVIGATION } from '../../shared/router';
import { SearchAdventure } from './components/searchAdventure';

export const HomePage = () => {
  return (
    <PageLayout navigation={MENU_NAVIGATION}>
      <SearchAdventure />
    </PageLayout>
  );
};
