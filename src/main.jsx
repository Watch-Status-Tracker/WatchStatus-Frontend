import { router } from '@routing/Router';
import GlobalStyle from '@styles/globalStyles';
import { GlobalThemeProvider } from '@theme/GlobalThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalThemeProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </GlobalThemeProvider>
  </React.StrictMode>
);
