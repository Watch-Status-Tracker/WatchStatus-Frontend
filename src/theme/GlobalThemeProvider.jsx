import { defaultTheme } from '@theme/defaultTheme';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

export const GlobalThemeProvider = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

GlobalThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
