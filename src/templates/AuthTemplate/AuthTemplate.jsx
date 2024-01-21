import { AuthContainer, AuthHeader, Wrapper } from '@templates/AuthTemplate/AuthTemplate.styles';

const AuthTemplate = ({ header, children }) => {
  return (
    <Wrapper>
      <AuthContainer>
        <AuthHeader>{header}</AuthHeader>
        {children}
      </AuthContainer>
    </Wrapper>
  );
};

export default AuthTemplate;
