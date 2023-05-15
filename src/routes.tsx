import React, { lazy } from 'react';
import GlobalLayout from './pages/_layout';
import { Route } from 'react-router-dom';

const Main = lazy(() => import('./pages/main'));
const Result = lazy(() => import('./pages/result'));
const Register = lazy(() => import('./pages/register'));
const Mypage = lazy(() => import('./pages/mypage'));
const Detail = lazy(() => import('./pages/detail'));
export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Main />, index: true },
      { path: '/result', element: <Result />, index: true },
      { path: '/register', element: <Register />, index: true },
      { path: '/mypage', element: <Mypage />, index: true },
      { path: '/detail', element: <Detail />, index: true },
    ],
  },
];

export const pages = [{ route: '/' }, { route: '/result' }];
