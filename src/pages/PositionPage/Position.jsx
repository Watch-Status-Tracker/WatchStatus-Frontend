import BentoBox from '@components/BentoBox/BentoBox';
import Card from '@components/Card/Card';
import EnhancedBentoBox from '@components/EnhancedBentoBox/EnhancedBentoBox';
import { getMovie, getMovieCast } from '@config/api/moviesAPI';
import {
  PositionDescription,
  PositionImage,
  PositionInfoWrapper,
  PositionRating,
  PositionTagline,
  PositionTitle,
  Section,
} from '@pages/PositionPage/Position.styles';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

const Position = () => {
  const [positionData, setPositionData] = useState();
  const [movieCast, setMovieCast] = useState();
  const location = useLocation();
  const positionId = location.pathname.split('/')[2];

  useQuery(['trendingMovies'], () => getMovie(positionId), {
    onSuccess: ({ data }) => {
      setPositionData(data);
    },
    onError: (error) => {
      toast.error('Error', error.message);
    },
    refetchOnWindowFocus: false,
  });

  useQuery(['moviecast'], () => getMovieCast(positionId), {
    onSuccess: ({ data }) => {
      setMovieCast(data);
    },
    onError: (error) => {
      toast.error('Error', error.message);
    },
    refetchOnWindowFocus: false,
  });
  return (
    <>
      <BentoBox>
        <Section>
          <PositionImage
            src={`${import.meta.env.VITE_movieApiImageEndpoint}/${positionData?.poster_path}`}
          />
          <PositionInfoWrapper>
            <PositionTitle>{positionData?.title}</PositionTitle>
            <PositionTagline>{positionData?.tagline}</PositionTagline>
            <PositionDescription>{positionData?.overview}</PositionDescription>
            <PositionRating>User score: {positionData?.vote_average}</PositionRating>
          </PositionInfoWrapper>
        </Section>
      </BentoBox>
      <EnhancedBentoBox title={'Cast'}>
        {movieCast?.cast.map(({ name, profile_path }, index) => (
          <Card
            noOverlay={true}
            key={`${name}-${index}`}
            title={name}
            imageUrl={`${import.meta.env.VITE_movieApiImageEndpoint}/${profile_path}`}
          />
        ))}
      </EnhancedBentoBox>
    </>
  );
};

export default Position;
