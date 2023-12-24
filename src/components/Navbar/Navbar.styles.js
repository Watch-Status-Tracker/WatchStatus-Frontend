import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[10]};
  padding: 40px 0 20px 0;
  width: 220px;
  height: 900px;
  background-color: ${({ theme }) => theme.color.primary[500]};
  @media (max-width: 1024px) {
    align-items: center;
    flex-direction: row;
    padding: 0 40px;
    gap: 0px;
    width: 100%;
    height: 58px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: initial;
  gap: ${({ theme }) => theme.spacing[4]};
  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0px;
    &:last-child {
      display: none;
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
