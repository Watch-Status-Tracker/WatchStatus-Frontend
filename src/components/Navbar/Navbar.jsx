import AccountBox from '@components/AccountBox/AccountBox';
import { ListContainer, NavContainer, Wrapper } from '@components/Navbar/Navbar.styles';
import NavbarItem from '@components/Navbar/NavbarItem/NavbarItem';
import PropTypes from 'prop-types';

const Navbar = ({ size = 'full' }) => {
  return (
    <Wrapper>
      {size === 'full' && <AccountBox />}
      <NavContainer>
        <ListContainer>
          <NavbarItem text="Home" isTextVisible={size} to="/home" />
          <NavbarItem text="My list" isTextVisible={size} to="/mylist" />
          <NavbarItem text="Browse" isTextVisible={size} to="/browse" />
          <NavbarItem text="Surprise me" isTextVisible={size} to="/surpriseme" />
          <NavbarItem text="Ranking" isTextVisible={size} to="/ranking" />
        </ListContainer>
        {size === 'full' && (
          <ListContainer>
            <NavbarItem text="Settings" isTextVisible={size} to="/settings" />
            <NavbarItem text="Log out" isTextVisible={size} to="/logout" />
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
