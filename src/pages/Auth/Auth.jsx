import { useAuthStore } from '@config/api/authStore';
import Login from '@pages/Auth/Login/Login';
import { homePath } from '@routing/Paths';
import { Navigate } from 'react-router-dom';

const Auth = () => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to={homePath} />;
  }

  return <Login />;
};

export default Auth;
