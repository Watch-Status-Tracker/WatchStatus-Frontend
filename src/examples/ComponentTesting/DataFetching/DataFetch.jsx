import BentoBox from '@components/BentoBox/BentoBox';

import Card from '@components/Card/Card';
import { getMovies } from '@config/api/moviesAPI';
import {
  MoviesWrapper,
  Wrapper,
} from '@examples/ComponentTesting/DataFetching/DataFetching.styles';
import { useState } from 'react';
// import { useMutation } from 'react-query';
import { useQuery } from 'react-query';

const DataFetch = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  /**
   * useQuery
   * When you want to fetch data, you use useQuery.
   * It takes a function that returns a promise.
   * The array of dependencies is for differentiating queries.
   * If you want to fetch data from the same endpoint but with different variables,
   * you can use the array of dependencies to differentiate them.
   * For example, if you want to fetch data from the same endpoint but with different page numbers,
   * you can use the page number as a dependency.
   * It also takes an object with a few options.
   * The first option is onSuccess, which is a function that will be called if the query succeeds.
   * The second option is onError, which is a function that will be called if the query fails.
   * One of the returned values from useQuery is refetch, which is a function that will refetch the data.
   * You can use it by calling the refetch function that is returned from useQuery.
   * In this case, we want to refetch the data when the button is clicked.
   * We also want to fetch the next page of data when the button is clicked.
   */
  const { refetch } = useQuery(['movieID'], () => getMovies(page), {
    onSuccess: ({ data }) => {
      setMovies((prev) => (prev.length ? [...prev, ...data.results] : [...data.results]));
      setPage((prev) => prev + 1);
    },
    onError: (error) => {
      console.log(error.message);
    },
    refetchOnWindowFocus: false,
  });

  /**
   * useMutation
   * When you want to mutate data, you use useMutation.
   * It takes a function that performs the mutation and returns a promise.
   * It also takes an object with a few options.
   * The first option is onSuccess, which is a function that will be called if the mutation succeeds.
   * The second option is onError, which is a function that will be called if the mutation fails.
   * You can use it by calling the mutate function that is returned from useMutation
   * and passing in the variables you want to mutate. In this case, we want to mutate the page variable.
   */

  // const { mutate } = useMutation(() => getMovies(page), {
  //   onSuccess: ({ data }) => {
  //     console.log(data);
  //     setMovies((prev) => (prev.length ? [...prev, ...data.results] : [...data.results]));
  //     setPage((prev) => prev + 1);
  //   },
  //   onError: (error) => {
  //     console.log(error.message);
  //   },
  //   refetchOnWindowFocus: false,
  // });
  return (
    <Wrapper>
      <BentoBox>
        <button
          onClick={() => {
            // For useQuery
            refetch();

            // For useMutation
            // mutate(page);
          }}
        >
          Load next page
        </button>
        <MoviesWrapper>
          {movies.map(({ id, popularity, original_title, poster_path, name }) => (
            <Card
              key={`${id}-${popularity}`}
              title={original_title ? original_title : name}
              imageUrl={`${import.meta.env.VITE_movieApiImageEndpoint}/${poster_path}`}
            />
          ))}
        </MoviesWrapper>
      </BentoBox>
    </Wrapper>
  );
};

export default DataFetch;
