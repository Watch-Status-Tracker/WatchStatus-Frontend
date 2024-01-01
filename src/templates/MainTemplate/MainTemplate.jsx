import Navbar from '@components/Navbar/Navbar';
import { useMediaQuery } from '@hooks/useMediaQuery/useMediaQuery';
import {
  AccountBarPlaceholder,
  BentoContent,
  BentoWrapper,
  ContentWrapper,
  Wrapper,
} from '@templates/MainTemplate/MainTemplate.styles';
import { Outlet } from 'react-router-dom';

const MainTemplate = () => {
  const device = useMediaQuery();
  const navbarVariant = device === 'desktop' ? 'full' : 'compact';

  return (
    <Wrapper>
      <Navbar variant={navbarVariant} />
      <ContentWrapper>
        {/* Replace with proper component later */}
        {device !== 'desktop' && <AccountBarPlaceholder />}
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
