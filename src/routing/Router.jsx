import Root from '@/Root';
import Playground from '@pages/Playground/Playground';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const RootRoute = {
  path: '/',
  element: <Root />,
  children: [
    {
      path: '/home',
    },
    {
      path: '/mylist',
    },
    {
      path: '/browse',
    },
    {
      path: '/surpriseme',
    },
    {
      path: '/ranking',
    },
    {
      path: '/settings',
    },
    {
      path: '/logout',
    },
  ],
};

const PlaygroundRoute = {
  path: '/playground',
  element: <Playground />,
};

const WildcardRoute = {
  path: '*',
  element: <Navigate to="/" />,
};

export const router = createBrowserRouter([PlaygroundRoute, RootRoute, WildcardRoute]);

/*
  If you want to add new route,
  make sure to place the
  WildcardRoute at the end of the array
 */
