import Card from '@components/Card/Card';
import Form, { submitFormHandler } from '@components/Form/Form';
import Input from '@components/Input/Input';
import Select from '@components/Select/Select';
import { discoverMovies } from '@config/api/moviesAPI';
import { useMediaQuery } from '@hooks/useMediaQuery';
import { browseValidationSchema } from '@pages/Browse/Browse.schema';
import {
  FormWrapper,
  GridWrapper,
  Header,
  HeadingWrapper,
  NoDataPlaceholder,
  Wrapper,
} from '@pages/Browse/Browse.styles';
import { genresOptions } from '@utils/genres';
import debounce from 'lodash.debounce';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const Browse = () => {
  const [searchedData, setSearchedData] = useState([]);
  const [params, setParams] = useState({});
  const device = useMediaQuery();
  const navigate = useNavigate();
  const deviceSize = device === 'desktop' ? 'large' : 'small';

  const initialValues = {
    language: null,
    page: 1,
    genre: null,
    sort_by: null,
    runtime: null,
    year: null,
  };

  const { refetch } = useQuery(['discoverMovies', params], () => discoverMovies(params), {
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
      sort_by: values.sort_by ?? null,
      'with_runtime.lte': values.runtime ?? null,
      'release_date.lte': values.year ? new Date(values.year, 0, 0) : null,
    };
    setParams(newParams);
    refetch();
  }, 250);

  return (
    <Wrapper>
      <HeadingWrapper>
        <Header>Browse</Header>
      </HeadingWrapper>
      <Form
        initialValues={initialValues}
        validationSchema={browseValidationSchema}
        onFormSubmit={handleSubmit}
      >
        <FormWrapper size={deviceSize}>
          <Select
            test={'browse_genres_input'}
            onFormChange={submitFormHandler}
            label={'Genres'}
            name={'genre'}
            options={genresOptions}
          />
          <Input
            test={'browse_year_input'}
            formOnChange={submitFormHandler}
            name={'year'}
            type={'number'}
            placeholder={'2024'}
            label={'Year'}
          />
          <Input
            test={'browse_language_input'}
            formOnChange={submitFormHandler}
            name={'language'}
            type={'text'}
            placeholder={'English'}
            label={'Language'}
          />
          <Input
            test={'browse_sort_by_input'}
            formOnChange={submitFormHandler}
            name={'sort_by'}
            type={'text'}
            placeholder={'A-Z'}
            label={'Sort by'}
          />
          <Input
            test={'browse_runtimes_input'}
            formOnChange={submitFormHandler}
            name={'runtime'}
            type={'text'}
            placeholder={'Max time in min'}
            label={'Runtime'}
          />
        </FormWrapper>
      </Form>
      <GridWrapper device={device}>
        {searchedData.length ? (
          searchedData.map(({ id, popularity, original_title, poster_path, name }) => (
            <>
              <Card
                positionId={id}
                size={deviceSize}
                onClick={() => navigate(`/position/${id}`)}
                key={`${id}-${popularity}`}
                title={original_title ? original_title : name}
                imageUrl={`${import.meta.env.VITE_movieApiImageEndpoint}/${poster_path}`}
              />
            </>
          ))
        ) : (
          <NoDataPlaceholder>No results</NoDataPlaceholder>
        )}
      </GridWrapper>
    </Wrapper>
  );
};

export default Browse;
