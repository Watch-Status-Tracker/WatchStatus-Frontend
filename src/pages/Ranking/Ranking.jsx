import styled from 'styled-components';

const Ranking = () => {
  return <Placeholder>Ranking Page</Placeholder>;
};

export default Ranking;

const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.typography.size.heading[1]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.primary[900]};
`;
