import {
  CardContainer,
  CardImage,
  CardPlaceholder,
  CardTitle,
  Wrapper,
} from '@components/Card/Card.styles';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Card = ({ size = 'large', title = 'Placeholder', isTitleVisible = true, imageUrl }) => {
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <Wrapper>
      <CardContainer size={size}>
        {imageUrl && !imageError ? (
          <CardImage src={imageUrl} onError={handleImageError} />
        ) : (
          <CardPlaceholder>Image not found</CardPlaceholder>
        )}
      </CardContainer>
      {isTitleVisible && <CardTitle size={size}>{title}</CardTitle>}
    </Wrapper>
  );
};

Card.propTypes = {
  size: PropTypes.oneOf(['large', 'small']),
  title: PropTypes.string,
  isTitleVisible: PropTypes.bool,
  imageUrl: PropTypes.string,
};
export default Card;
