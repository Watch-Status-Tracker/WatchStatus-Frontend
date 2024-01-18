import { breakpoints } from '@utils/breakpointSizing';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary[500]};
  height: 100vh;
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[10]};
  border-radius: 30px;
  ${breakpoints('width', {
    desktop: `500px`,
    tablet: '500px',
    mobile: '350px',
  })}
  ${breakpoints('padding', {
    desktop: '48px',
    tablet: '48px',
    mobile: '32px',
  })}

  background: ${({ theme }) => theme.color.base.white};
`;

export const AuthHeader = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.size.h1};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.primary[900]};
`;
