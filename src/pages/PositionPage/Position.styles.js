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

export const Section = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const PositionImage = styled.img`
  display: flex;
  width: 200px;
  height: 300px;
  object-fit: fit;
  border-radius: 16px;
  border: 5px solid ${({ theme }) => theme.color.primary[900]};
`;

export const PositionInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const PositionTitle = styled.h1`
  display: flex;
  font-size: ${({ theme }) => theme.typography.size.heading[1]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.primary[500]};
`;

export const PositionTagline = styled.p`
  display: flex;
  font-size: ${({ theme }) => theme.typography.size.heading[5]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.dark[900]};
`;

export const PositionDescription = styled.p`
  display: flex;
  font-size: ${({ theme }) => theme.typography.size.heading[3]};
  color: ${({ theme }) => theme.color.dark[700]};
`;

export const PositionRating = styled.p`
  display: flex;
  font-size: ${({ theme }) => theme.typography.size.body[2]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.primary[900]};
`;
