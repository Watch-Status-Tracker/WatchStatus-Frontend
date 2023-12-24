import AccountBox from '@components/AccountBox/AccountBox';
import { ListContainer, NavContainer, Wrapper } from '@components/Navbar/Navbar.styles';
import NavbarItem from '@components/NavbarItem/NavbarItem';

const Navbar = () => {
  return (
    <Wrapper>
      <AccountBox />
      <NavContainer>
        <ListContainer>
          <NavbarItem to="/home">Home</NavbarItem>
          <NavbarItem to="/mylist">My list</NavbarItem>
          <NavbarItem to="/browse">Browse</NavbarItem>
          <NavbarItem to="/surpriseme">Suprise me</NavbarItem>
          <NavbarItem to="/ranking">Ranking</NavbarItem>
        </ListContainer>
        <ListContainer>
          <NavbarItem to="/settings">Settings</NavbarItem>
          <NavbarItem to="/logout">Log out</NavbarItem>
        </ListContainer>
      </NavContainer>
    </Wrapper>
  );
};

export default Navbar;
