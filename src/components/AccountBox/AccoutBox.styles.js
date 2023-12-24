import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: 8px 16px;
  width: 180px;
  height: auto;
  background-color: ${({ theme }) => theme.color.primary[900]};
  border-radius: 15px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const ImgContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 40px;
  height: 40px;
  border-radius: 10px;
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
