import {
  ImgContainer,
  TextContainer,
  UserInfo,
  UserNameText,
  Wrapper,
} from '@components/AccountBox/AccoutBox.styles';

const AccountBox = () => {
  return (
    <Wrapper>
      <ImgContainer>
        <img src="" alt="" />
      </ImgContainer>
      <TextContainer>
        <UserNameText>User name</UserNameText>
        <UserInfo>Placeholder</UserInfo>
      </TextContainer>
    </Wrapper>
  );
};

export default AccountBox;
