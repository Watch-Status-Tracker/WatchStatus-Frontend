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

const MyLists = () => {
  const device = useMediaQuery();
  const deviceSize = device === 'desktop' ? 'large' : 'small';
  const [userListsData, setUserListsData] = useState([]);
  const [newListName, setNewListName] = useState('');

  const { mutate: createListMutate } = useMutation((e) => createList(e), {
    onSuccess: () => {
      toast.success(`List [${newListName}] created!`);
      refetch();
    },
    onError: (error) => {
      toast.error('Something went wrong', error);
    },
    refetchOnWindowFocus: false,
  });

  const { refetch } = useQuery(['getlists'], () => getLists(), {
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
    console.log(userListsData);
    return userListsData.map((list, index) => (
      <EnhancedBentoBox key={`${list.name}-${index}`} title={list.name}>
        {list.positions.map((position, id) => (
          <Card
            size={deviceSize}
            key={`${position.title}-${id}`}
            title={position.title}
            // imageUrl={position.image}
          />
        ))}
      </EnhancedBentoBox>
    ));
  }, [userListsData]);

  return (
    <Wrapper>
      <BentoBox>
        <HeadingWrapper>
          <Header>My lists</Header>
          <HeaderListCreator>
            <Input
              isLabelVisible={false}
              placeholder="List name"
              onChange={(e) => setNewListName(e.target.value)}
            />
            <AddListButton onClick={handleAddList}>Create list</AddListButton>
          </HeaderListCreator>
        </HeadingWrapper>
      </BentoBox>
      {generatedLists}
    </Wrapper>
  );
};

export default MyLists;
