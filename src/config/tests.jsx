import { matchers as rtlMatchers } from '@testing-library/jest-dom/matchers';
import { cleanup, render as rtlRender } from '@testing-library/react';
import { GlobalThemeProvider } from '@theme/GlobalThemeProvider';
import { afterEach, expect } from 'vitest';

const StyleWrapper = ({ children }) => {
  return (
    <>
      <GlobalThemeProvider>{children}</GlobalThemeProvider>
    </>
  );
};

// Render function with providers
const renderWithProvider = (ui, options) => {
  return rtlRender(ui, { wrapper: StyleWrapper, ...options });
};

/* Extends Vitest's expect method with methods from RTL */
expect.extend({ ...rtlMatchers });

/* Cleaning jsdon after each test case */
afterEach(() => {
  cleanup();
});

export * from '@testing-library/react';
export { renderWithProvider as render };
