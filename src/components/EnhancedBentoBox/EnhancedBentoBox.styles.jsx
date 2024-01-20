import styled from 'styled-components';

export const OuterBentoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme, size }) => (size === 'large' ? theme.spacing[10] : theme.spacing[5])};
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const BentoHeader = styled.div`
  display: flex;
  font-size: ${({ theme, size }) =>
    size === 'large' ? theme.typography.size.heading[3] : theme.typography.size.heading[5]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.primary[500]};
`;

export const CardCarousel = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  gap: ${({ theme, size }) => (size === 'large' ? theme.spacing[10] : theme.spacing[5])};
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselNavigation = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const CarouselButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.base.white};
  cursor: pointer;

  & svg {
    transform: ${({ direction }) => (direction === 'left' ? 'rotate(90deg)' : 'rotate(-90deg)')};
    fill: ${({ theme }) => theme.color.base.white};
  }
`;
