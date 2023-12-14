import PropTypes from 'prop-types';
import { useState } from 'react';
import { CardContainer, CardImage, CardPlaceholder, CardTitle, Wrapper } from './Card.styles';
const Card = ({ size, title='Placeholder', isTitleVisible, imageUrl }) => {
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <Wrapper size={size}>
      <CardContainer size={size}>
        {imageUrl ? (
          !imageError ? (
            <CardImage src={imageUrl} onError={handleImageError} />
          ) : (
            <CardPlaceholder>Image not found</CardPlaceholder>
          )
        ) : (
          <CardPlaceholder>Image not found</CardPlaceholder>
        )}
      </CardContainer>
      {isTitleVisible && <CardTitle size={size}>{title}</CardTitle>}
    </Wrapper>
  );
};

Card.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  isTitleVisible: PropTypes.bool,
  imageUrl: PropTypes.string,
};
export default Card;
