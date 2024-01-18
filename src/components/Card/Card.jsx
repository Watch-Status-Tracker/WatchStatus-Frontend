import {
  CardContainer,
  CardImage,
  CardOption,
  CardOptionsOverlay,
  CardOverlayHeader,
  CardPlaceholder,
  CardTitle,
  Wrapper,
} from '@components/Card/Card.styles';
import { getLists, updateListPositions } from '@config/api/backendAPI';
import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';

const Card = ({
  noOverlay = false,
  positionId,
  size = 'large',
  title = 'Placeholder',
  isTitleVisible = true,
  imageUrl,
  onClick,
}) => {
  const [imageError, setImageError] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [lists, setLists] = useState([]);
  const handleImageError = () => {
    setImageError(true);
  };

  useQuery(['getListss', lists], () => getLists(), {
    onSuccess: ({ data }) => {
      setLists(data);
    },
    onError: (error) => {
      toast.error('Something went wrong', error);
    },
    refetchOnWindowFocus: false,
  });

  const { mutate: addPositionToList } = useMutation((e) => updateListPositions(e), {
    onSuccess: () => {
      toast.success('Position added to list!');
    },
    onError: (error) => {
      toast.error('Something went wrong', error);
    },
    refetchOnWindowFocus: false,
  });

  const handleAddPosition = (e, listId, title, image, positionId) => {
    e.stopPropagation();
    // console.log(listId, title, image, positionId);
    addPositionToList({
      listId,
      title,
      image,
      positionId,
    });
  };

  return (
    <Wrapper size={size} onClick={onClick}>
      <CardContainer
        size={size}
        onMouseEnter={() => setOverlayVisible(true)}
        onMouseLeave={() => setOverlayVisible(false)}
      >
        {noOverlay === false && lists && lists.length > 0 && (
          <CardOptionsOverlay isVisible={overlayVisible}>
            <CardOverlayHeader>Add to list</CardOverlayHeader>
            {lists.map((list, index) => (
              <CardOption
                onClick={(e) => handleAddPosition(e, list.id, title, imageUrl, positionId)}
                key={`${list.name}-${index}`}
              >
                {list.name}
              </CardOption>
            ))}
          </CardOptionsOverlay>
        )}
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
  onClick: PropTypes.func,
};
export default Card;
