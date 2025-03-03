import { Route, Routes } from 'react-router-dom';
import { ROUTER } from './shared/router';
import { UIPage } from './pages/ui';

function App() {
  return (
    <Routes>
      <Route path={ROUTER.HOME} element={<>APP</>} />
      <Route path={ROUTER.UI} element={<UIPage />} />
    </Routes>
  );
}

export default App;
