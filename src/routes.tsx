import React, { lazy } from 'react';
import GlobalLayout from './pages/_layout';
import { createBrowserRouter } from 'react-router-dom';
// import ErrorPage from './pages/Errorpage';
import Main from './pages/main';
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const CreatePostPage = lazy(() => import('./pages/post/CreatePostPage'));
const KMap = lazy(() => import('./pages/Map'));
const Mypage = lazy(() => import('./pages/mypage/index'));
const Travel = lazy(() => import('./pages/Travel'));
const Detail = lazy(() => import('./pages/Detail'));
const Errorpage = lazy(() => import('./pages/Errorpage'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/create-post",
        element: <CreatePostPage /> 
      },
      {
        path: "/mypage",
        element: <Mypage/> 
      },
      {
        path: "/board/:postId",
        element: <Detail/> 
      },
      {
        path: "/register",
        element: <SignUpPage/> 
      },
      {
        path: "/travel/:SearchType/:Keyword", // search
        element: <Travel/> 
      },
      {
        path: "/map", // search
        element: <KMap/> 
      },
    ],
    errorElement: <Errorpage/>
  }
]);

export const pages = [{ route: '/' }];
