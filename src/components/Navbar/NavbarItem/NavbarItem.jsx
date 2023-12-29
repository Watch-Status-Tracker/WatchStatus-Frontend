import {
  IconPlaceHolder,
  LinkText,
  StyledLink,
} from '@components/Navbar/NavbarItem/NavbarItem.styles';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const NavbarItem = ({ children, to, onClick, isTextVisible }) => {
  const { pathname } = useLocation();
  return (
    <StyledLink isActive={to === pathname} to={to} onClick={onClick}>
      <IconPlaceHolder isActive={to === pathname} />
      {isTextVisible === 'full' && <LinkText isActive={to === pathname}>{children}</LinkText>}
    </StyledLink>
  );
};

NavbarItem.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  isTextVisible: PropTypes.oneOf(['full', 'compact']),
};

export default NavbarItem;
