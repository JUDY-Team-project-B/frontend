import { RouterProvider, useRoutes } from 'react-router-dom';
import { router } from './routes';
import '@/reset.scss';
import { Header } from './components/common/Header/Header';
import { Footer } from './components/common/Footer/Footer';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darkTheme } from './theme';

const GlobalStyle = createGlobalStyle`
  
`

function App() {
  return(
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  )
}

export default App;
