import styled from 'styled-components';

const Root = () => {
  return (
    <>
      <Wrapper>
        <Header>Vite + React</Header>
        <SubHeader>Project starter page</SubHeader>
      </Wrapper>
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
  background: ${({ theme }) => theme.color.dark[100]};
`;

const Header = styled.h1`
  color: black;
  font-weight: bold;
`;

export const SubHeader = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
`;
