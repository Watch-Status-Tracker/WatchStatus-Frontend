import BentoBox from '@components/BentoBox/BentoBox';
import {
  BentoHeader,
  CardCarousel,
  CarouselButton,
  CarouselNavigation,
  OuterBentoWrapper,
  TopWrapper,
} from '@components/EnhancedBentoBox/EnhancedBentoBox.styles';
import Icon from '@components/Icon/Icon';
import { useRef } from 'react';

const EnhancedBentoBox = ({ title, children, size }) => {
  const carouselRef = useRef(null);
  const scrollOffset = 400;

  const handleMoveCarousel = (direction) => {
    if (direction === 'left') {
      carouselRef.current.scrollBy({ left: -scrollOffset, behavior: 'smooth' });
    }

    if (direction === 'right') {
      carouselRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <BentoBox size={size}>
      <OuterBentoWrapper size={size}>
        <TopWrapper>
          <BentoHeader size={size}>{title}</BentoHeader>
          <CarouselNavigation>
            <CarouselButton direction={'left'} onClick={() => handleMoveCarousel('left')}>
              <Icon.ChevronDown />
            </CarouselButton>
            <CarouselButton direction={'right'} onClick={() => handleMoveCarousel('right')}>
              <Icon.ChevronDown />
            </CarouselButton>
          </CarouselNavigation>
        </TopWrapper>
        <CardCarousel ref={carouselRef}>{children}</CardCarousel>
      </OuterBentoWrapper>
    </BentoBox>
  );
};

export default EnhancedBentoBox;
