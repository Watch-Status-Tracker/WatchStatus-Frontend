import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${({ size }) => (size === 'large' ? '150px' : '75px')};
  gap: ${({ size, theme }) => (size === 'large' ? theme.spacing[3] : theme.spacing[2])};
  cursor: pointer;
`;
export const CardContainer = styled.div`
  width: ${({ size }) => (size === 'large' ? '150px' : '75px')};
  height: ${({ size }) => (size === 'large' ? '225px' : '112.5px')};
  border: 5px solid ${({ theme }) => theme.color.primary[900]};
  border-radius: 20px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CardTitle = styled.p`
  font-size: ${({ size, theme }) =>
    size === 'large' ? theme.typography.body : theme.typography.size.small[2]};
  color: ${({ theme }) => theme.color.primary[900]};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap; /* let the text wrap preserving spaces */
`;

export const CardPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.size.small[2]};
  color: ${({ theme }) => theme.color.dark[500]};
`;
