import Root from '@/Root';
import Playground from '@pages/Playground/Playground';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const RootRoute = {
  path: '/',
  element: <Root />,
  // children: [
  //   {
  //     path: '/home',
  //   },
  //   {
  //     path: '/mylist',
  //   },
  //   {
  //     path: '/browse',
  //   },
  //   {
  //     path: '/surpriseme',
  //   },
  //   {
  //     path: '/ranking',
  //   },
  //   {
  //     path: '/settings',
  //   },
  //   {
  //     path: '/logout',
  //   },
  // ],
};

const Home = {
  path: '/home',
};

const MyList = {
  path: '/mylist',
};
const Browse = {
  path: '/browse',
};
const SurpriseMe = {
  path: '/surpriseme',
};
const Ranking = {
  path: '/ranking',
};
const Settings = {
  path: '/settings',
};
const Logout = {
  path: '/logout',
};
const PlaygroundRoute = {
  path: '/playground',
  element: <Playground />,
};

const WildcardRoute = {
  path: '*',
  element: <Navigate to="/" />,
};

export const router = createBrowserRouter([
  Home,
  MyList,
  Browse,
  SurpriseMe,
  Ranking,
  Settings,
  Logout,
  PlaygroundRoute,
  RootRoute,
  WildcardRoute,
]);

/*
  If you want to add new route,
  make sure to place the
  WildcardRoute at the end of the array
 */
