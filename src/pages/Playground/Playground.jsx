import styled from 'styled-components';

const Playground = () => {
  return (
    <Placeholder>
      <p>Page for e.g. component testing</p>
    </Placeholder>
  );
};

export default Playground;

const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
