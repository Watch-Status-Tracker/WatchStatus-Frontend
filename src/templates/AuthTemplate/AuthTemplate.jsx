import { AuthContainer, AuthHeader, Wrapper } from '@templates/AuthTemplate/AuthTemplate.styles';

const AuthTemplate = ({ header, children }) => {
  return (
    <Wrapper>
      <AuthContainer>
        <AuthHeader data-test="authHeader">{header}</AuthHeader>
        {children}
      </AuthContainer>
    </Wrapper>
  );
};

export default AuthTemplate;
