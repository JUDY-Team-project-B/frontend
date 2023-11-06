import React, { lazy } from 'react';
import GlobalLayout from './pages/_layout';
import { Route, createBrowserRouter } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import CreatePostPage from './pages/post/CreatePostPage';
import ErrorPage from './pages/Errorpage';
import KMap from './pages/Map';
const Main = lazy(() => import('./pages/main'));
const Register = lazy(() => import('./pages/SignUpPage'));
const Mypage = lazy(() => import('./pages/mypage/index'));
const Travel = lazy(() => import('./pages/Travel'));
const Detail = lazy(() => import('./pages/Detail'));

export const router = createBrowserRouter([
  {
    path:"/",
    element:<GlobalLayout/>,
    children:[
      {
        path:"/",
        element:<Main/> // 
      },
      {
        path:"/create-post",
        element:<CreatePostPage/>// 
      },
      {
        path:"/mypage",
        element:<Mypage></Mypage> // 
      },
      {
        path:"/board/:postId",
        element:<Detail></Detail> // 
      },
      {
        path:"/register",
        element:<SignUpPage/>
      },
      {
        path:"/travel/:SearchType/:Keyword",//search
        element:<Travel></Travel> // 
      },
      {
        path:"/map",//search
        element:<KMap></KMap> // 
      },
    ],
    errorElement:<ErrorPage/>
  }
])

export const pages = [{ route: '/' }, { route: '/result' }];
