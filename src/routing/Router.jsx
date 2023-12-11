import Root from '@/Root';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const RootRoute = {
  path: '/',
  element: <Root />,
};

const WildcardRoute = {
  path: '*',
  element: <Navigate to="/" />,
};

export const router = createBrowserRouter([RootRoute, WildcardRoute]);

/*
  If you want to add new route,
  make sure to place the
  WildcardRoute at the end of the array
 */
