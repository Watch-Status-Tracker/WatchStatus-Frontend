import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
`;

export const FormSubmitButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.base.white};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
`;

export const SignIn = styled(Link)`
  font-size: ${({ theme }) => theme.typography.size.small[2]};
  color: ${({ theme }) => theme.color.primary[900]};
  cursor: pointer;
  text-decoration: none;
`;
