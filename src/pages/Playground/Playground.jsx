import styled from 'styled-components';

const Playground = () => {
  return (
    <Wrapper>
      <p>Page for e.g. component testing</p>
    </Wrapper>
  );
};

export default Playground;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
