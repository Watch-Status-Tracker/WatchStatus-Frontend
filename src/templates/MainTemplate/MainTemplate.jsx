import PropTypes from 'prop-types';

import { useMediaQuery } from '@hooks/useMediaQuery/useMediaQuery';
import {
  AccountBarPlaceholder,
  BentoContent,
  BentoWrapper,
  ContentWrapper,
  NavWrapper,
  Wrapper,
} from '@templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
  const device = useMediaQuery();
  return (
    <Wrapper>
      <NavWrapper />
      <ContentWrapper>
        {/* Replace with proper component later */}
        {device !== 'desktop' && <AccountBarPlaceholder>test</AccountBarPlaceholder>}{' '}
        <BentoWrapper>
          <BentoContent>{children}</BentoContent>
        </BentoWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
