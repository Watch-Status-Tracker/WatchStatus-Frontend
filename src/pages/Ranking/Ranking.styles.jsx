import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.base.white};
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[10]};
  gap: ${({ theme }) => theme.spacing[8]};
  overflow: auto;

  & form {
    width: 100%;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Header = styled.h1`
  display: flex;
  font-size: ${({ theme }) => theme.typography.size.heading[2]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.primary[500]};
`;

export const FormWrapper = styled.div`
  gap: 40px;
  display: grid;
  grid-template-columns: ${({ size }) => (size === 'large' ? 'repeat(5, 1fr)' : 'repeat(3, 1fr)')};
  justify-content: space-between;
  width: 100%;
`;

const gridStyles = (device) => {
  switch (device) {
    case 'desktop':
      return `
        grid-template-columns: repeat(5, 1fr);
      `;
    case 'tablet':
      return `
        grid-template-columns: repeat(6, 1fr);
      `;
    case 'mobile':
      return `
        grid-template-columns: repeat(3, 1fr);
      `;
    default:
      return `
        grid-template-columns: repeat(3, 1fr);
      `;
  }
};

export const GridWrapper = styled.div`
  display: grid;
  ${({ device }) => gridStyles(device)};
  grid-auto-flow: dense;
  width: 100%;
  gap: 40px;
`;

export const NoDataPlaceholder = styled.div`
  font-size: ${({ theme }) => theme.typography.size.heading[5]};
  color: ${({ theme }) => theme.color.primary[200]};
`;
