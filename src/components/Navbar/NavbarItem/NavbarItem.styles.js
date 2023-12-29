import { defaultTheme } from '@theme/defaultTheme';
import { breakpoints } from '@utils/breakpointSizing';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const IconPlaceHolder = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.color.primary[500] : theme.color.primary[100]};
`;
export const LinkText = styled.div`
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.primary[500] : theme.color.primary[100]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.small[1]};
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.color.dark[100] : theme.color.primary[500]};
  text-decoration: none;
  ${breakpoints('justify-content', {
    tablet: 'center',
    mobile: 'center',
  })}
  ${breakpoints('gap', {
    desktop: '16px',
  })}
  ${breakpoints('width', {
    desktop: '200px',
    tablet: '50px',
    mobile: '50px',
  })}
  ${breakpoints('padding', {
    desktop: '16px 0px 16px 20px',
    tablet: '17px 0px',
    mobile: '17px 0px',
  })}
  ${breakpoints('border-radius', {
    desktop: '15px 0px 0px 15px',
    tablet: '0px 0px 15px 15px',
    mobile: '0px 0px 15px 15px',
  })}
  &:hover {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.color.primary[500] : theme.color.dark[100]};
    & > ${LinkText} {
      color: ${({ theme, isActive }) =>
        isActive ? theme.color.primary[100] : theme.color.primary[500]};
    }
    & > ${IconPlaceHolder} {
      background-color: ${({ theme, isActive }) =>
        isActive ? theme.color.primary[100] : theme.color.primary[500]};
    }
  }
  &:hover::before,
  &:hover::after {
    width: ${({ isActive }) => (isActive ? 0 : '15px')};
    height: ${({ isActive }) => (isActive ? 0 : '15px')};
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: ${({ isActive }) => (isActive ? '15px' : 0)};
    height: ${({ isActive }) => (isActive ? '15px' : 0)};
    right: 0;
    background: transparent;
  }
  &::before {
    ${breakpoints('top', {
      desktop: '-15px',
      tablet: '0px',
      mobile: '0px',
    })}
    ${breakpoints('right', {
      tablet: '-15px',
      mobile: '-15px',
    })}
    ${breakpoints('border-top-left-radius', {
      tablet: '15px',
      mobile: '15px',
    })}
      ${breakpoints('border-bottom-right-radius', {
      desktop: '15px',
    })}
      ${breakpoints('box-shadow', {
      desktop: `4px 4px 0 4px ${defaultTheme.color.dark[100]}`,
      tablet: `-4px -4px 0px ${defaultTheme.color.dark[100]}`,
      mobile: `-4px -4px 0px 4px ${defaultTheme.color.dark[100]}`,
    })}
  }
  &::after {
    ${breakpoints('top', {
      tablet: '0px',
      mobile: '0px',
    })}
    ${breakpoints('bottom', {
      desktop: '-15px',
    })}
    ${breakpoints('left', {
      tablet: '-15px',
      mobile: '-15px',
    })}
    ${breakpoints('border-top-right-radius', {
      desktop: '15px',
      tablet: '15px',
      mobile: '15px',
    })}
      ${breakpoints('box-shadow', {
      desktop: `4px -4px 0px 4px ${defaultTheme.color.dark[100]}`,
      tablet: `4px -4px 0px 4px ${defaultTheme.color.dark[100]}`,
      mobile: `4px -4px 0px 4px ${defaultTheme.color.dark[100]}`,
    })}
  }
`;
