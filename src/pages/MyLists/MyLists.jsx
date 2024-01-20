import BentoBox from '@components/BentoBox/BentoBox';
import Card from '@components/Card/Card';
import EnhancedBentoBox from '@components/EnhancedBentoBox/EnhancedBentoBox';
import Input from '@components/Input/Input';
import { createList, getLists } from '@config/api/backendAPI';
import { useMediaQuery } from '@hooks/useMediaQuery';
import {
  AddListButton,
  Header,
  HeaderListCreator,
  HeadingWrapper,
  Wrapper,
} from '@pages/MyLists/MyLists.styles';
import { useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const MyLists = () => {
  const device = useMediaQuery();
  const navigate = useNavigate();
  const deviceSize = device === 'desktop' ? 'large' : 'small';
  const [userListsData, setUserListsData] = useState([]);
  const [newListName, setNewListName] = useState('');

  const { mutate: createListMutate } = useMutation(
    ['createList', userListsData],
    (e) => createList(e),
    {
      onSuccess: () => {
        toast.success(`List [${newListName}] created!`);
        refetch();
      },
      onError: (error) => {
        toast.error('Something went wrong', error);
      },
      refetchOnWindowFocus: false,
    }
  );

  const { refetch } = useQuery(['getMyLists'], () => getLists(), {
    onSuccess: ({ data }) => {
      setUserListsData([...data]);
    },
    onError: (error) => {
      toast.error('Something went wrong', error);
    },
    refetchOnWindowFocus: false,
  });

  const handleAddList = () => {
    createListMutate({ name: newListName });
    setNewListName('');
  };

  const generatedLists = useMemo(() => {
    return userListsData.map((list, index) => (
      <EnhancedBentoBox key={`${list.name}-${index}`} title={list.name}>
        {list.positions.map((position, id) => (
          <Card
            noOverlay={true}
            positionId={position.id}
            onClick={() => navigate(`/position/${position.positionId}`)}
            size={deviceSize}
            key={`${position.title}-${id}`}
            title={position.title}
            imageUrl={position.image}
          />
        ))}
      </EnhancedBentoBox>
    ));
  }, [userListsData]);

  return (
    <Wrapper data-test={'my_lists_wrapper'}>
      <BentoBox>
        <HeadingWrapper>
          <Header>My lists</Header>
          <HeaderListCreator>
            <Input
              test={'my_lists_input'}
              isLabelVisible={false}
              placeholder="List name"
              onChange={(e) => setNewListName(e.target.value)}
            />
            <AddListButton data-test={'my_lists_create_list_button'} onClick={handleAddList}>
              Create list
            </AddListButton>
          </HeaderListCreator>
        </HeadingWrapper>
      </BentoBox>
      {generatedLists}
    </Wrapper>
  );
};

export default MyLists;
