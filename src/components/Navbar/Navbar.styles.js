import { breakpoints } from '@utils/breakpointSizing';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.primary[500]};

  ${breakpoints('align-items', {
    desktop: 'flex-end',
  })}

  ${breakpoints('flex-direction', {
    desktop: 'column',
  })}

  ${breakpoints('gap', {
    desktop: `40px`,
  })}

  ${breakpoints('width', {
    desktop: '220px',
    tablet: '100%',
    mobile: '100%',
  })}

  ${breakpoints('height', {
    desktop: '100%',
    tablet: '70px',
    mobile: '70px',
  })}

  ${breakpoints('padding', {
    desktop: '40px 0px 56px 0px',
    tablet: '0px 56px',
    mobile: '0px 56px',
  })}
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const ListContainer = styled.div`
  display: flex;
  position: relative;

  ${breakpoints('flex-direction', {
    desktop: 'column',
  })}

  ${breakpoints('justify-content', {
    tablet: 'space-between',
    mobile: 'space-between',
  })}

  ${breakpoints('gap', {
    desktop: '16px',
  })}
`;
