import { useAuthStore } from '@config/api/authStore';
import { useAuth } from '@hooks/useAuth';
import { authPath } from '@routing/Paths';
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  const { verifyToken } = useAuth();

  const location = useLocation();

  useEffect(() => {
    verifyToken();
  }, [location]);

  if (!isAuthenticated) {
    return <Navigate to={authPath} />;
  }

  return children;
};

export default ProtectedRoute;
