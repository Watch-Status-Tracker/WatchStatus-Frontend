import {
  ImgContainer,
  TextContainer,
  UserInfo,
  UserNameText,
  Wrapper,
} from '@components/AccountBox/AccoutBox.styles';
import { getUserPersonalData } from '@config/api/backendAPI';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const AccountBox = () => {
  const [personalData, setPersonalData] = useState(null);

  useQuery(['getCurrentUserPersonalData', personalData], () => getUserPersonalData(), {
    onSuccess: ({ data }) => {
      setPersonalData(data);
      console.log(data);
    },
    onError: (error) => {
      toast.error('Something went wrong', error);
    },
    refetchOnWindowFocus: false,
  });

  return (
    <Wrapper>
      <ImgContainer></ImgContainer>
      <TextContainer>
        <UserNameText>{personalData?.username ? personalData?.username : ''}</UserNameText>
        <UserInfo>{personalData?.title ? personalData?.title : ''}</UserInfo>
      </TextContainer>
    </Wrapper>
  );
};

export default AccountBox;
