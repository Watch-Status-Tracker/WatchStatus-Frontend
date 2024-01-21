import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* background: ${({ theme }) => theme.color.base.white}; */
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[10]};
  gap: ${({ theme }) => theme.spacing[8]};
  overflow: auto;

  & form {
    width: 100%;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Header = styled.h1`
  display: flex;
  font-size: ${({ theme }) => theme.typography.size.heading[2]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.primary[500]};
`;

export const HeaderListCreator = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const AddListButton = styled.button`
  display: flex;
  height: 40px;
  justify-content: center;
  padding: 0 16px;
  min-width: 100px;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.base.white};
  font-size: ${({ theme }) => theme.typography.size.small[1]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.color.primary[700]};
  }
`;
