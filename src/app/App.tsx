import { Route, Routes } from 'react-router-dom';
import { ROUTER } from '../shared/router';
import { UIPage } from '../pages/ui';
import ErrorBoundary from '../ErrorBoundary';
import { HomePage, ServicesPage } from '../pages';

//TODO:
// 1) Разработать страницу 404
function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path={ROUTER.HOME} element={<HomePage />} />
        <Route path={ROUTER.SERVICES} element={<ServicesPage />} />
        <Route path={ROUTER.UI} element={<UIPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
