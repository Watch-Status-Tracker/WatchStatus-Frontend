import { IconPlaceHolder, StyledNavLink } from '@components/NavbarItem/NavbarItem.styles';

const NavbarItem = ({ children, to }) => {
  return (
    <StyledNavLink to={to}>
      <IconPlaceHolder />
      <div>{children}</div>
    </StyledNavLink>
  );
};

export default NavbarItem;
