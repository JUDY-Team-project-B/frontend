import { QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.scss';
import { getClient } from './queryClient';
import { worker } from './mocks/workers';
import { CookiesProvider } from 'react-cookie';

// if(import.meta.env.DEV){
//   worker.start();
// }
const queryClient = getClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CookiesProvider>
    <RecoilRoot>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </BrowserRouter>
    </RecoilRoot>,
  </CookiesProvider>
);
