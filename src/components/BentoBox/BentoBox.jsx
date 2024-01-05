import {
  ContentWrapper,
  PlaceholderContent,
  PlaceholderText,
  Wrapper,
} from '@components/BentoBox/BentoBox.styles';
import PropTypes from 'prop-types';

const BentoBox = ({ size = 'large', children }) => {
  return (
    <Wrapper size={size}>
      <PlaceholderContent>
        <PlaceholderText>PlaceholderText</PlaceholderText>
      </PlaceholderContent>
      <ContentWrapper size={size}>{children}</ContentWrapper>
    </Wrapper>
  );
};

export default BentoBox;

BentoBox.prototypes = {
  size: PropTypes.oneOf[('large', 'small')],
};
