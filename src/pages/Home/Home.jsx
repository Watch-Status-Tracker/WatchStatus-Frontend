import Card from '@components/Card/Card';
import EnhancedBentoBox from '@components/EnhancedBentoBox/EnhancedBentoBox';
import { getLists } from '@config/api/backendAPI';
import { getTopRatedMovies, getTrendingTodayMovies } from '@config/api/moviesAPI';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { Wrapper } from '@pages/Home/Home.styles';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [currentlyWatching, setCurrentlyWatching] = useState([]);
  const navigate = useNavigate();
  const device = useMediaQuery();
  const deviceSize = device === 'desktop' ? 'large' : 'small';

  useQuery(['getlists'], () => getLists(), {
    onSuccess: ({ data }) => {
      console.log(data);
      console.log(data);
      setCurrentlyWatching([...data[0].positions]);
    },
    onError: (error) => {
      toast.error('Something went wrong', error);
    },
    refetchOnWindowFocus: false,
  });

  /*  Trending Movies Query  */
  useQuery(['trendingMovies'], () => getTrendingTodayMovies(), {
    onSuccess: ({ data }) => {
      setTrendingMovies((prev) => (prev.length ? [...prev, ...data.results] : [...data.results]));
    },
    onError: (error) => {
      toast.error('Error', error.message);
    },
    refetchOnWindowFocus: false,
  });

  /*  Top Rated Movies Query  */
  useQuery(['topRatedMovies'], () => getTopRatedMovies(), {
    onSuccess: ({ data }) => {
      setTopMovies((prev) => (prev.length ? [...prev, ...data.results] : [...data.results]));
    },
    onError: (error) => {
      toast.error('Error', error.message);
    },
    refetchOnWindowFocus: false,
  });

  return (
    <Wrapper>
      <EnhancedBentoBox size={deviceSize} title={'👀 Currently watching 👀'}>
        {currentlyWatching.map(({ title, image, id }, index) => (
          <Card
            noOverlay={true}
            positionId={id}
            onClick={() => navigate(`/position/${id}`)}
            size={deviceSize}
            key={`${title}-${index}`}
            title={title}
            imageUrl={image}
          />
        ))}
      </EnhancedBentoBox>
      <EnhancedBentoBox size={deviceSize} title={'🔥 Trending today 🔥'}>
        {trendingMovies.map(({ id, popularity, original_title, poster_path, name }) => (
          <Card
            positionId={id}
            onClick={() => navigate(`/position/${id}`)}
            size={deviceSize}
            key={`${id}-${popularity}`}
            title={original_title ? original_title : name}
            imageUrl={`${import.meta.env.VITE_movieApiImageEndpoint}/${poster_path}`}
          />
        ))}
      </EnhancedBentoBox>
      <EnhancedBentoBox size={deviceSize} title={'🗻Top of the top 🗻'}>
        {topMovies.map(({ id, popularity, original_title, poster_path, name }) => (
          <Card
            onClick={() => navigate(`/position/${id}`)}
            size={deviceSize}
            key={`${id}-${popularity}`}
            title={original_title ? original_title : name}
            imageUrl={`${import.meta.env.VITE_movieApiImageEndpoint}/${poster_path}`}
          />
        ))}
      </EnhancedBentoBox>
    </Wrapper>
  );
};

export default Home;
