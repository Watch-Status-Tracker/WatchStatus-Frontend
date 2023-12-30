import {
  IconPlaceHolder,
  LinkText,
  StyledLink,
} from '@components/Navbar/NavbarItem/NavbarItem.styles';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const NavbarItem = ({ text, to, onClick, isTextVisible }) => {
  const { pathname } = useLocation();
  const isActive = to === pathname;
  return (
    <StyledLink isActive={isActive} to={to} onClick={onClick}>
      <IconPlaceHolder isActive={isActive} />
      {isTextVisible === 'full' && <LinkText isActive={isActive}>{text}</LinkText>}
    </StyledLink>
  );
};

NavbarItem.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  isTextVisible: PropTypes.oneOf(['full', 'compact']),
};

export default NavbarItem;
