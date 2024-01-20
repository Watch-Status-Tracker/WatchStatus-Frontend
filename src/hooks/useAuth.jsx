import { useAuthStore } from '@config/api/authStore';

export const useAuth = () => {
  const { login, logout } = useAuthStore();
  const token = localStorage.getItem('token');

  const setToken = async (response) => {
    if (!response.access_token) return;

    localStorage.setItem('token', response.access_token);
    login(response.access_token);
  };

  const removeToken = async () => {
    localStorage.removeItem('token');
    logout();
  };

  const verifyToken = async () => {
    if (!token) return await logout();

    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const isExpired = decodedToken.exp < decodedToken.iat;

    if (isExpired) return await logout();
  };

  return { setToken, removeToken, verifyToken, token };
};
