import {
  getAfterShadows,
  getBeforeShadows,
} from '@components/Navbar/NavbarItem/NavbarItem.helpers';
import { breakpoints } from '@utils/breakpointSizing';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const IconPlaceHolder = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.color.primary[100]};
  z-index: 2;
`;
export const LinkText = styled.div`
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.primary[500] : theme.color.primary[100]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.small[1]};
  transition: padding-left 0.1s ease-in-out;
`;

export const Wrapper = styled.div`
  z-index: ${({ isActive }) => isActive && 1};
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  background: ${({ theme, isActive }) =>
    isActive ? theme.color.dark[100] : theme.color.primary[500]};
  text-decoration: none;
  transition: background-color 0.1s ease-in-out;

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

  ${breakpoints('height', {
    desktop: '50px',
    tablet: '58px',
    mobile: '58px',
  })}

  ${breakpoints('padding', {
    desktop: '16px 0px 16px 20px',
  })}

  ${breakpoints('border-radius', {
    desktop: '15px 0px 0px 15px',
    tablet: '0px 0px 15px 15px',
    mobile: '0px 0px 15px 15px',
  })}

  &:hover {
    background: ${({ theme, isActive }) => !isActive && theme.color.primary[600]};
    transition: box-shadow 0.1s ease-in-out;

    & > ${IconPlaceHolder} {
      background-color: ${({ theme }) => theme.color.primary[100]};
    }

    & > ${LinkText} {
      color: ${({ theme, isActive }) => !isActive && theme.color.base.white};
      padding-left: ${({ theme, isActive }) => !isActive && theme.spacing[3]};
    }
  }

  &:hover::before,
  &:hover::after {
    display: block;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    right: 0;
    display: ${({ isActive }) => !isActive && 'none'};

    ${breakpoints('top', {
      desktop: '-50px',
      tablet: '0',
      mobile: '0',
    })};

    ${breakpoints('width', {
      desktop: '20px',
      tablet: '50px',
      mobile: '50px',
    })}

    ${breakpoints('height', {
      desktop: '50px',
      tablet: '20px',
      mobile: '20px',
    })}
  }

  &::before {
    ${({ isActive }) => getBeforeShadows(isActive)}

    ${breakpoints('top', {
      desktop: 'auto',
    })};

    ${breakpoints('bottom', {
      desktop: '-50px',
    })};

    ${breakpoints('left', {
      tablet: '50px',
      mobile: '50px',
    })};

    ${breakpoints('border-radius', {
      desktop: '0 50px 0 0',
      tablet: '50px 0 0 0',
      mobile: '50px 0 0 0',
    })};
  }

  &::after {
    ${({ isActive }) => getAfterShadows(isActive)}

    ${breakpoints('right', {
      tablet: '50px',
      mobile: '50px',
    })};

    ${breakpoints('border-radius', {
      desktop: '0 0 50px 0',
      tablet: '0 50px 0 0',
      mobile: '0 50px 0 0',
    })};
  }
`;
