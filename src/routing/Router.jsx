import { AuthRoute } from '@pages/Auth/Auth.routes';
import { BrowseRoute } from '@pages/Browse/Browse.routes';
import { HomeRoute } from '@pages/Home/Home.routes';
import { MyListsRoute } from '@pages/MyLists/MyLists.routes';
import { PlaygroundRoute } from '@pages/Playground/Playground.routes';
import { RankingRoute } from '@pages/Ranking/Ranking.routes';
import { SettingsRoute } from '@pages/Settings/Settings.routes';
import { SurpriseMeRoute } from '@pages/SurpriseMe/SurpriseMe.routes';
import ProtectedRoute from '@routing/ProtectedRoute';
import MainTemplate from '@templates/MainTemplate/MainTemplate';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const RootRoute = {
  element: (
    <ProtectedRoute>
      <MainTemplate />
    </ProtectedRoute>
  ),
  children: [HomeRoute, MyListsRoute, BrowseRoute, SurpriseMeRoute, RankingRoute, SettingsRoute],
};

const WildcardRoute = {
  path: '*',
  element: <Navigate to="/home" />,
};

export const router = createBrowserRouter([AuthRoute, PlaygroundRoute, RootRoute, WildcardRoute]);

/*
  If you want to add new route,
  make sure to place the
  WildcardRoute at the end of the array
 */
