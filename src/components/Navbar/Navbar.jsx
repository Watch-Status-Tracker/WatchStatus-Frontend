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
          <NavbarItem isTextVisible={size} to="/home">
            Home
          </NavbarItem>
          <NavbarItem isTextVisible={size} to="/mylist">
            My list
          </NavbarItem>
          <NavbarItem isTextVisible={size} to="/browse">
            Browse
          </NavbarItem>
          <NavbarItem isTextVisible={size} to="/surpriseme">
            Suprise me
          </NavbarItem>
          <NavbarItem isTextVisible={size} to="/ranking">
            Ranking
          </NavbarItem>
        </ListContainer>
        {size === 'full' && (
          <ListContainer>
            <NavbarItem isTextVisible={size} to="/settings">
              Settings
            </NavbarItem>
            <NavbarItem isTextVisible={size} to="/logout">
              Log out
            </NavbarItem>
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
