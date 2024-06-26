import { breakpoints } from '@utils/breakpointSizing';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.primary[500]};
  height: 100vh;

  ${breakpoints('flex-direction', {
    tablet: 'column-reverse',
    mobile: 'column-reverse',
  })}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[4]};
  overflow: hidden;

  ${breakpoints('padding', {
    desktop: '24px 24px 24px 0',
    tablet: '12px 12px 0 12px',
    mobile: '12px 12px 0 12px',
  })}
`;

export const BentoWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.dark[100]};
  border-radius: 30px;
  padding: ${({ theme }) => theme.spacing[5]};
  overflow: hidden;
`;

export const BentoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
`;
