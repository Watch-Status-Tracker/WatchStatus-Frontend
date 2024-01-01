import AccountBox from '@components/AccountBox/AccountBox';
import { ListContainer, NavContainer, Wrapper } from '@components/Navbar/Navbar.styles';
import NavbarItem from '@components/Navbar/NavbarItem/NavbarItem';
import PropTypes from 'prop-types';

const Navbar = ({ variant = 'full' }) => {
  return (
    <Wrapper>
      {variant === 'full' && <AccountBox />}
      <NavContainer>
        <ListContainer>
          <NavbarItem text="Home" variant={variant} to="/playground" />
          <NavbarItem text="My list" variant={variant} to="/" />
          <NavbarItem text="Browse" variant={variant} to="/browse" />
          <NavbarItem text="Surprise me" variant={variant} to="/surpriseme" />
          <NavbarItem text="Ranking" variant={variant} to="/ranking" />
        </ListContainer>
        {variant === 'full' && (
          <ListContainer>
            <NavbarItem text="Settings" variant={variant} to="/settings" />
            <NavbarItem text="Log out" variant={variant} to="/logout" />
          </ListContainer>
        )}
      </NavContainer>
    </Wrapper>
  );
};

Navbar.propTypes = {
  size: PropTypes.oneOf(['full', 'compact']),
};

export default Navbar;
