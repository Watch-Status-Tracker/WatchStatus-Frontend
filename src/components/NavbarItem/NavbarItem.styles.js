import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const IconPlaceHolder = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.color.primary[100]};
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  position: relative;
  width: 200px;
  height: 50px;
  padding: 16px 0px 16px 20px;
  border-radius: 15px 0px 0px 15px;
  background-color: ${({ theme }) => theme.color.primary[500]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.small[1]};
  color: ${({ theme }) => theme.color.primary[100]};
  text-decoration: none;

  &.active,
  &:hover {
    background-color: ${({ theme }) => theme.color.dark[100]};
    color: ${({ theme }) => theme.color.primary[500]};
    & ${IconPlaceHolder} {
      background-color: ${({ theme }) => theme.color.primary[500]};
    }

    &.active&:hover {
      background-color: ${({ theme }) => theme.color.primary[500]};
      color: ${({ theme }) => theme.color.primary[100]};
      & ${IconPlaceHolder} {
        background-color: ${({ theme }) => theme.color.primary[100]};
      }
      ::before,
      ::after {
        width: 0px;
        height: 0px;
      }
    }

    ::before {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      top: -15px;
      right: 0;
      border-bottom-right-radius: 15px;
      box-shadow: 4px 4px 0 4px ${({ theme }) => theme.color.dark[100]};
      background: transparent;
    }
    ::after {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      bottom: -15px;
      right: 0;
      border-top-right-radius: 15px;
      box-shadow: 4px -4px 0 4px ${({ theme }) => theme.color.dark[100]};
      background: transparent;
    }
  }
  @media (max-width: 1024px) {
    div:last-child {
      display: none;
    }
    justify-content: center;
    gap: 0px;
    width: 50px;
    height: auto;
    padding: 17px 0;
    border-radius: 0px 0px 15px 15px;
    &.active,
    &:hover {
      ::before {
        content: '';
        top: 0px;
        right: -15px;
        border-top-left-radius: 15px;
        box-shadow: -4px -4px 0px 4px ${({ theme }) => theme.color.dark[100]};
      }
      ::after {
        content: '';
        top: 0px;
        left: -15px;
        border-top-right-radius: 15px;
        box-shadow: 4px -4px 0 4px ${({ theme }) => theme.color.dark[100]};
      }
    }
  }
`;
