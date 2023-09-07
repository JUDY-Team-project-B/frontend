import React, { lazy } from 'react';
import GlobalLayout from './pages/_layout';
import { Route } from 'react-router-dom';
import CreatePostPage from './pages/CreatePostPage';
const Main = lazy(() => import('./pages/main'));
const Register = lazy(() => import('./pages/SignUpPage'));
const Mypage = lazy(() => import('./pages/Mypage'));
const Travel = lazy(() => import('./pages/Travel'));
const Detail = lazy(() => import('./pages/Detail'));
export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Main />, index: true },
      { path: '/register', element: <Register />, index: true },
      { path: '/create-post', element: <CreatePostPage />, index: true },
      { path: '/mypage', element: <Mypage />, index: true },
      { path: '/travel', element: <Travel />, index: true },
      { path: '/detail', element: <Detail />, index: true },
    ],
  },
];

export const pages = [{ route: '/' }, { route: '/result' }];
