import { matchers as rtlMatchers } from '@testing-library/jest-dom/matchers';
import { cleanup, render as rtlRender } from '@testing-library/react';
import { GlobalThemeProvider } from '@theme/GlobalThemeProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { afterEach, expect } from 'vitest';

const AllWrappers = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalThemeProvider>{children}</GlobalThemeProvider>
      </QueryClientProvider>
    </>
  );
};

// Render function with providers
const renderWithProvider = (ui, options) => {
  return rtlRender(ui, { wrapper: AllWrappers, ...options });
};

/* Extends Vitest's expect method with methods from RTL */
expect.extend({ ...rtlMatchers });

/* Cleaning jsdon after each test case */
afterEach(() => {
  cleanup();
});

export * from '@testing-library/react';
export { renderWithProvider as render };
