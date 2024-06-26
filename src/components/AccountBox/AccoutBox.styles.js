import { breakpoints } from '@utils/breakpointSizing';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: 8px 16px;
  height: auto;
  background-color: ${({ theme }) => theme.color.primary[900]};
  border-radius: 15px;

  ${breakpoints('width', {
    desktop: '180px',
    tablet: '100%',
    mobile: '100%',
  })}
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.primary[900]};
  background: ${({ theme }) => theme.color.primary[200]};
  border: 2px solid ${({ theme }) => theme.color.primary[500]};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const UserNameText = styled.p`
  color: #fff;
  font-size: ${({ theme }) => theme.typography.size.small[1]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const UserInfo = styled.p`
  color: ${({ theme }) => theme.color.primary[100]};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  font-size: 10px;
`;
