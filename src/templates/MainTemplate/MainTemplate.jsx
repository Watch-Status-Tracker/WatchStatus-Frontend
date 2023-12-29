import { useMediaQuery } from '@hooks/useMediaQuery/useMediaQuery';
import {
  AccountBarPlaceholder,
  BentoContent,
  BentoWrapper,
  ContentWrapper,
  NavWrapper,
  Wrapper,
} from '@templates/MainTemplate/MainTemplate.styles';
import { Outlet } from 'react-router-dom';

const MainTemplate = () => {
  const device = useMediaQuery();
  return (
    <Wrapper>
      <NavWrapper />
      <ContentWrapper>
        {/* Replace with proper component later */}
        {device !== 'desktop' && <AccountBarPlaceholder>test</AccountBarPlaceholder>}{' '}
        <BentoWrapper>
          <BentoContent>
            <Outlet />
          </BentoContent>
        </BentoWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default MainTemplate;
