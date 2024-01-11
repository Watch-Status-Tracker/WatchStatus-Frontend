import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ size }) => (size === 'large' ? '40px' : '20px')};
  width: 100%;
  background-color: ${({ theme }) => theme.color.base.white};
  border-radius: 30px;
  padding: ${({ size }) => (size === 'large' ? '40px' : '30px')};
`;
