import { useAuth } from '@hooks/useAuth';
import { router } from '@routing/Router';
import GlobalStyle from '@styles/globalStyles';
import { GlobalThemeProvider } from '@theme/GlobalThemeProvider';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient();

const Root = () => {
  const { verifyToken, token } = useAuth();

  useEffect(() => {
    verifyToken();
  }, [token]);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalThemeProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
        <Toaster />
      </GlobalThemeProvider>
    </QueryClientProvider>
  );
};

export default Root;
