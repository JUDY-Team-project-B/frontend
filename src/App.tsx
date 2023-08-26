import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import '@/reset.scss';
import 'tailwindcss/tailwind.css';
import { Header } from './components/common/Header/Header';
import { Footer } from './components/common/Footer/Footer';

function App() {
  const elem = useRoutes(routes);
  return(
    <div>
      <Header/>
      {elem}
      <Footer/>
    </div>
  )
}

export default App;
