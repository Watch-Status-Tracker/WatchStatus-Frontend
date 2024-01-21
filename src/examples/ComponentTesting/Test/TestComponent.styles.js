import styled from 'styled-components';

// Styles for component using styled-components
export const Wrapper = styled.div`
  // Using theme values from theme provider
  background: ${({ theme }) => theme.color.danger[900]};
`;
