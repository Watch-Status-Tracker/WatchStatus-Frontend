import PropTypes from 'prop-types';

import {
  BentoContent,
  BentoWrapper,
  ContentWrapper,
  NavWrapper,
  Wrapper,
} from '@templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <NavWrapper />
      <ContentWrapper>
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
