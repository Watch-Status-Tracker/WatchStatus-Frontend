import { GlobalThemeProvider } from '@theme/GlobalThemeProvider';
import styled from 'styled-components';
import GlobalStyle from './styles/globalStyles';

const Root = () => {
  return (
    <>
      <GlobalThemeProvider>
        <GlobalStyle />
        <Wrapper>
          <Header>Vite + React</Header>
          <SubHeader>Project starter page</SubHeader>
        </Wrapper>
      </GlobalThemeProvider>
    </>
  );
};

export default Root;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  background: linear-gradient(white, #cfcfcf);
`;

const Header = styled.h1`
  color: black;
  font-weight: bold;
`;

export const SubHeader = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
`;
