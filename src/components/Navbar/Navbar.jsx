import AccountBox from '@components/AccountBox/AccountBox';
import { ListContainer, NavContainer, Wrapper } from '@components/Navbar/Navbar.styles';
import NavbarItem from '@components/Navbar/NavbarItem/NavbarItem';
import PropTypes from 'prop-types';

const Navbar = ({ isDesktop = true }) => {
  return (
    <Wrapper>
      {isDesktop && <AccountBox />}
      <NavContainer>
        <ListContainer>
          <NavbarItem isTextVisible={isDesktop} to="/home">
            Home
          </NavbarItem>
          <NavbarItem isTextVisible={isDesktop} to="/mylist">
            My list
          </NavbarItem>
          <NavbarItem isTextVisible={isDesktop} to="/browse">
            Browse
          </NavbarItem>
          <NavbarItem isTextVisible={isDesktop} to="/surpriseme">
            Suprise me
          </NavbarItem>
          <NavbarItem isTextVisible={isDesktop} to="/ranking">
            Ranking
          </NavbarItem>
        </ListContainer>
        {isDesktop && (
          <ListContainer>
            <NavbarItem to="/settings">Settings</NavbarItem>
            <NavbarItem to="/logout">Log out</NavbarItem>
          </ListContainer>
        )}
      </NavContainer>
    </Wrapper>
  );
};

Navbar.propTypes = {
  isDesktop: PropTypes.bool,
};

export default Navbar;
