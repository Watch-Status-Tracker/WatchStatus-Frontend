import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || '100%'};
  gap: ${({ theme, size }) => (size === 'large' ? theme.spacing[2] : theme.spacing[1])};
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.size.small[2]};
  color: ${({ theme }) => theme.color.primary[900]};
`;

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ size }) => (size === 'large' ? '40px' : '32px')};
  padding: 0px 12px;
  gap: 8px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.primary[100]};
  background-color: ${({ theme }) => theme.color.base.white};
  font-size: ${({ theme }) => theme.typography.size.small[2]};

  &:focus-within {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.primary[200]};
  }

  &:hover,
  &:focus-within {
    border-color: ${({ theme }) => theme.color.primary[500]};
  }

  & svg {
    fill: ${({ theme }) => theme.color.primary[100]};
    height: ${({ size }) => (size === 'large' ? '24px' : '20px')};
    width: ${({ size }) => (size === 'large' ? '24px' : '20px')};
  }
`;

export const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.color.primary[900]};

  &:not(:placeholder-shown) {
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.primary[300]};
    opacity: 1;
  }
`;
