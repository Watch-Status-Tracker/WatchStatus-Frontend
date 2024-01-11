import { router } from '@routing/Router';
import GlobalStyle from '@styles/globalStyles';
import { GlobalThemeProvider } from '@theme/GlobalThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalThemeProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </GlobalThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
