import { breakpoints } from '@utils/breakpointSizing';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.color.base.white};
  border-radius: 30px;
  padding: ${({ size }) => (size === 'large' ? '40px' : '30px')};

  ${breakpoints('gap', {
    desktop: '40px',
    tablet: '20px',
    mobile: '20px',
  })}
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: ${({ size }) => (size === 'large' ? '40px' : '20px')};
`;
export const PlaceholderContent = styled.div`
  display: flex;
  
   ${breakpoints('height', {
      desktop: '40px',
      tablet: '25px',
      mobile: '25px',
    })}
`;

export const PlaceholderText = styled.h1`
  ${breakpoints('font-size', {
    desktop: '28px',
    tablet: '20px',
    mobile: '20px',
  })}
`;
