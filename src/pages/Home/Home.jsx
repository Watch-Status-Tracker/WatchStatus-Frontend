import Card from '@components/Card/Card';
import EnhancedBentoBox from '@components/EnhancedBentoBox/EnhancedBentoBox';
import { getTopRatedMovies, getTrendingTodayMovies } from '@config/api/moviesAPI';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { Wrapper } from '@pages/Home/Home.styles';
import { useState } from 'react';
import { useQuery } from 'react-query';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const device = useMediaQuery();
  const deviceSize = device === 'desktop' ? 'large' : 'small';

  /*  Trending Movies Query  */
  useQuery(['trendingMovies'], () => getTrendingTodayMovies(), {
    onSuccess: ({ data }) => {
      setTrendingMovies((prev) => (prev.length ? [...prev, ...data.results] : [...data.results]));
    },
    onError: (error) => {
      console.log(error.message);
    },
    refetchOnWindowFocus: false,
  });

  /*  Top Rated Movies Query  */
  useQuery(['topRatedMovies'], () => getTopRatedMovies(), {
    onSuccess: ({ data }) => {
      setTopMovies((prev) => (prev.length ? [...prev, ...data.results] : [...data.results]));
    },
    onError: (error) => {
      console.log(error.message);
    },
    refetchOnWindowFocus: false,
  });

  return (
    <Wrapper>
      <EnhancedBentoBox size={deviceSize} title={'👀 Currently watching 👀'}>
        Waiting for BE
      </EnhancedBentoBox>
      <EnhancedBentoBox size={deviceSize} title={'🔥 Trending today 🔥'}>
        {trendingMovies.map(({ id, popularity, original_title, poster_path, name }) => (
          <Card
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
