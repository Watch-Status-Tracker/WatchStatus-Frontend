import AccountBox from '@components/AccountBox/AccountBox';
import { ListContainer, NavContainer, Wrapper } from '@components/Navbar/Navbar.styles';
import NavbarItem from '@components/Navbar/NavbarItem/NavbarItem';
import {
  browsePath,
  homePath,
  listsPath,
  rankingPath,
  settingsPath,
  surprisePath,
} from '@routing/Paths';
import PropTypes from 'prop-types';

const Navbar = ({ variant = 'full' }) => {
  const handleLogOut = (e) => {
    e.preventDefault();
    alert('Log out');
  };

  return (
    <Wrapper>
      {variant === 'full' && <AccountBox />}
      <NavContainer>
        <ListContainer>
          <NavbarItem text="Home" variant={variant} to={homePath} />
          <NavbarItem text="My list" variant={variant} to={listsPath} />
          <NavbarItem text="Browse" variant={variant} to={browsePath} />
          <NavbarItem text="Surprise me" variant={variant} to={surprisePath} />
          <NavbarItem text="Ranking" variant={variant} to={rankingPath} />
        </ListContainer>
        {variant === 'full' && (
          <ListContainer>
            <NavbarItem text="Settings" variant={variant} to={settingsPath} />
            <NavbarItem text="Log out" variant={variant} onClick={handleLogOut} />
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
