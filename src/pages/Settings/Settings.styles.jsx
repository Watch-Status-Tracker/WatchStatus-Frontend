import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.base.white};
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[10]};
  gap: ${({ theme }) => theme.spacing[10]};
  overflow: auto;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Header = styled.h1`
  display: flex;
  font-size: ${({ theme }) => theme.typography.size.heading[2]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.primary[500]};
`;
