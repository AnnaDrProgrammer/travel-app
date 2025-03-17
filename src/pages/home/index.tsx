import { PageLayout } from '../../layouts/PageLayouts';
import { MENU_NAVIGATION } from '../../shared/router';

export const HomePage = () => {
  return (
    <PageLayout navigation={MENU_NAVIGATION}>
      <div style={{ border: '1px solid green', padding: 30 }}>
        HOME CONTENX
        <h1>Это Home</h1>
      </div>
    </PageLayout>
  );
};
