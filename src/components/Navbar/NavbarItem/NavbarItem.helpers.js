import { defaultTheme } from '@theme/defaultTheme';
import { breakpoints } from '@utils/breakpointSizing';
import { css } from 'styled-components';

export const getBeforeShadows = (isActive) => {
  if (isActive) {
    return css`
      ${breakpoints('box-shadow', {
        desktop: `0 -20px 0 0 ${defaultTheme.color.dark[100]}`,
        tablet: `-20px 0 0 0 ${defaultTheme.color.dark[100]}`,
        mobile: `-20px 0 0 0 ${defaultTheme.color.dark[100]}`,
      })}
    `;
  }

  return css`
    ${breakpoints('box-shadow', {
      desktop: `0 -20px 0 0 ${defaultTheme.color.primary[600]}`,
      tablet: `-20px 0 0 0 ${defaultTheme.color.primary[600]}`,
      mobile: `-20px 0 0 0 ${defaultTheme.color.primary[600]}`,
    })}
  `;
};

export const getAfterShadows = (isActive) => {
  if (isActive) {
    return css`
      ${breakpoints('box-shadow', {
        desktop: `0 20px 0 0 ${defaultTheme.color.dark[100]}`,
        tablet: `20px 0 0 0 ${defaultTheme.color.dark[100]}`,
        mobile: `20px 0 0 0 ${defaultTheme.color.dark[100]}`,
      })}
    `;
  }

  return css`
    ${breakpoints('box-shadow', {
      desktop: `0 20px 0 0 ${defaultTheme.color.primary[600]}`,
      tablet: `20px 0 0 0 ${defaultTheme.color.primary[600]}`,
      mobile: `20px 0 0 0 ${defaultTheme.color.primary[600]}`,
    })}
  `;
};
