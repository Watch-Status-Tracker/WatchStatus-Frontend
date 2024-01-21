import Card from '@components/Card/Card';
import Form, { submitFormHandler } from '@components/Form/Form';
import Input from '@components/Input/Input';
import Select from '@components/Select/Select';
import { discoverMovies } from '@config/api/moviesAPI';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { rankingValidationSchema } from '@pages/Ranking/Ranking.schema';
import {
  FormWrapper,
  GridWrapper,
  Header,
  HeadingWrapper,
  NoDataPlaceholder,
  Wrapper,
} from '@pages/Ranking/Ranking.styles';
import { genresOptions } from '@utils/genres';
import debounce from 'lodash.debounce';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  language: null,
  page: 1,
  genre: null,
  sort_by: 'vote_average.desc',
  runtime: null,
  year: null,
  'vote_average.gte': 5,
  'vote_average.lte': 10,
  'vote_count.gte': 500,
};

const Ranking = () => {
  const [searchedData, setSearchedData] = useState([]);
  const [params, setParams] = useState(initialValues);
  const navigate = useNavigate();
  const device = useMediaQuery();
  const deviceSize = device === 'desktop' ? 'large' : 'small';

  const { refetch } = useQuery(['discoverTopMovies', params], () => discoverMovies(params), {
    onSuccess: ({ data }) => {
      setSearchedData([...data.results]);
    },
    onError: (error) => {
      toast.error('Something went wrong', error);
    },
    refetchOnWindowFocus: false,
  });

  const handleSubmit = debounce((values) => {
    const newParams = {
      language: values.language ?? null,
      with_genres: +values.genre.value ?? null,
      sort_by: 'vote_average.desc',
      'with_runtime.lte': values.runtime ?? null,
      'release_date.lte': values.year ? new Date(values.year, 0, 0) : null,
      'vote_average.gte': 5,
      'vote_average.lte': 10,
      'vote_count.gte': 500,
    };
    setParams(newParams);
    refetch();
  }, 250);

  return (
    <Wrapper>
      <HeadingWrapper>
        <Header data-test="rankingHeader">Ranking</Header>
      </HeadingWrapper>
      <Form
        initialValues={initialValues}
        validationSchema={rankingValidationSchema}
        onFormSubmit={handleSubmit}
      >
        <FormWrapper size={deviceSize}>
          <Select
            test={'ranking_genres_input'}
            onFormChange={submitFormHandler}
            label={'Genres'}
            name={'genre'}
            options={genresOptions}
          />
          <Input
            test={'ranking_year_input'}
            formOnChange={submitFormHandler}
            name={'year'}
            type={'number'}
            placeholder={'2024'}
            label={'Year'}
          />
          <Input
            test={'ranking_language_input'}
            formOnChange={submitFormHandler}
            name={'language'}
            type={'text'}
            placeholder={'English'}
            label={'Language'}
          />
          <Input
            test={'ranking_user_votes_input'}
            formOnChange={submitFormHandler}
            name={'sort_by'}
            type={'number'}
            placeholder={'0-500'}
            label={'Minimum user votes'}
            min={0}
            max={500}
          />
          <Input
            test={'ranking_runtimes_input'}
            formOnChange={submitFormHandler}
            name={'runtime'}
            type={'text'}
            placeholder={'Max time in min'}
            label={'Runtime'}
          />
        </FormWrapper>
      </Form>
      <GridWrapper device={device} data-test={'grid_wrapper'}>
        {searchedData.length ? (
          searchedData.map(({ id, popularity, original_title, poster_path, name }) => (
            <Card
              positionId={id}
              size={deviceSize}
              onClick={() => navigate(`/position/${id}`)}
              key={`${id}-${popularity}`}
              title={original_title ? original_title : name}
              imageUrl={`${import.meta.env.VITE_movieApiImageEndpoint}/${poster_path}`}
            />
          ))
        ) : (
          <NoDataPlaceholder>No results</NoDataPlaceholder>
        )}
      </GridWrapper>
    </Wrapper>
  );
};

export default Ranking;
