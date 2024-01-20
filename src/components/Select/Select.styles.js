import styled from 'styled-components';

const boxShadowOffsetPadding = 2;

export const OuterWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: ${({ width }) => width || '100%'};
`;

export const Wrapper = styled.div`
  width: ${({ width }) => width || '100%'};
  max-width: ${({ width }) => width || '100%'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ size, theme }) => (size === 'large' ? theme.spacing[2] : theme.spacing[1])};
  position: relative;
  padding: ${boxShadowOffsetPadding}px;
  cursor: pointer;
`;

export const Label = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.typography.size.small[1]};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  color: ${({ theme }) => theme.color.primary[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  user-select: none;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  height: ${({ size }) => (size === 'large' ? '40px' : '32px')};
  border: 1px solid
    ${({ theme, isOpen }) => (isOpen ? theme.color.primary[500] : theme.color.primary[100])};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ isOpen, theme }) =>
    isOpen && `0 0 0 ${boxShadowOffsetPadding}px  ${theme.color.primary[200]}`};

  &:hover {
    border-color: ${({ theme }) => theme.color.primary[500]};
  }
`;

export const SelectElement = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `0 ${theme.spacing[3]}`};
  font-size: ${({ theme }) => theme.typography.size.small[1]};
  gap: ${({ theme }) => theme.spacing[1]};

  & svg {
    transition: 0.2s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-180deg)' : 'rotate(0deg)')};
    fill: ${({ theme }) => theme.color.primary[500]};
  }
`;

export const SelectDropdown = styled.div`
  width: ${({ width }) => width - boxShadowOffsetPadding * 2}px;
  height: 100%;
  max-height: 150px;
  position: fixed;
  margin-top: ${({ size }) => (size === 'large' ? '220px' : '210px')};
  background-color: ${({ theme }) => theme.color.base.white};
  border: 1px solid ${({ theme }) => theme.color.primary[100]};
  border-radius: 8px;
  overflow: auto;
  transition: 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SelectDropdownOption = styled.div`
  width: 100%;
  height: ${({ size }) => (size === 'large' ? `40px` : '32px')};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.size.small[1]};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.primary[900] : theme.color.base.white};

  & p {
    color: ${({ theme, isSelected }) => isSelected && theme.color.base.white};
  }

  &:hover {
    background-color: ${({ theme, isSelected }) => !isSelected && theme.color.primary[100]};
  }
`;

export const SelectDropdownPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.primary[900]};
`;

export const SelectedValue = styled.p`
  color: ${({ theme, isPlaceholder }) =>
    isPlaceholder ? theme.color.primary[300] : theme.color.primary[500]};
  font-weight: ${({ theme, isPlaceholder }) =>
    isPlaceholder ? theme.typography.weight.regular : theme.typography.weight.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
