import {
  IconPlaceHolder,
  LinkText,
  StyledLink,
  Wrapper,
} from '@components/Navbar/NavbarItem/NavbarItem.styles';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const NavbarItem = ({ text, to, onClick, variant }) => {
  const { pathname } = useLocation();
  const isActive = to === pathname;
  return (
    <Wrapper isActive={isActive}>
      <StyledLink isActive={isActive} to={to} onClick={onClick}>
        <IconPlaceHolder isActive={isActive} />
        {variant === 'full' && <LinkText isActive={isActive}>{text}</LinkText>}
      </StyledLink>
    </Wrapper>
  );
};

NavbarItem.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['full', 'compact']),
};

export default NavbarItem;
