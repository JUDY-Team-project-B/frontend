import React, { lazy } from 'react';
import GlobalLayout from './pages/_layout';
import { Route } from 'react-router-dom';
import CreatePostPage from './pages/post/CreatePostPage';
const Main = lazy(() => import('./pages/main'));
const Result = lazy(() => import('./pages/result'));
const Register = lazy(() => import('./pages/register'));
const Mypage = lazy(() => import('./pages/mypage'));
const Travel = lazy(() => import('./pages/travel'));
const Detail = lazy(() => import('./pages/detail/index'));
const KakaoMap = lazy(() => import('./pages/map'));

export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Main />, index: true },
      { path: '/result', element: <Result />, index: true },
      { path: '/register', element: <Register />, index: true },
      { path: '/create-post', element: <CreatePostPage />, index: true },
      { path: '/mypage', element: <Mypage />, index: true },
      { path: '/travel', element: <Travel />, index: true },
      { path: '/detail', element: <Detail />, index: true },
      { path: '/map', element: <KakaoMap />, index: true },
    ],
  },
];

export const pages = [{ route: '/' }, { route: '/result' }];
