import Auth from '@pages/Auth/Auth';
import Register from '@pages/Auth/Register/Register';
import { authPath, registerPath } from '@routing/Paths';

export const AuthRoute = {
  path: authPath,
  element: <Auth />,
};

export const RegisterRoute = {
  path: registerPath,
  element: <Register />,
};
