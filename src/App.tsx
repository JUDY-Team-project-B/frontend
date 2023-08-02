import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import '@/reset.scss';
import 'tailwindcss/tailwind.css';
import { Header } from './components/common/Header/Header';

declare global {
  interface Window {
    kakao: any;
  }
}

function App() {
  const elem = useRoutes(routes);
  return(
    <div>
      <Header/>
      {elem}
    </div>
  )
}

export default App;
