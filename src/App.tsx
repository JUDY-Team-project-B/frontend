import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import '@/reset.scss';
import { Header, onSilentRefresh } from './components/common/Header/Header';
import { Footer } from './components/common/Footer/Footer';
import { useEffect } from 'react';
import cookie from 'react-cookies';

function App() {
  const elem = useRoutes(routes);

  useEffect(() => {
    if (cookie.load('refreshToken')) {
      onSilentRefresh();

      setTimeout(() => onSilentRefresh, 2000);
    }
  });

  return (
    <div>
      <Header />
      {elem}
      <Footer />
    </div>
  );
}

export default App;
