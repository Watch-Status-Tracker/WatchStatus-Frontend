import AccountBox from '@components/AccountBox/AccountBox';
import Icon from '@components/Icon/Icon';
import { ListContainer, NavContainer, Wrapper } from '@components/Navbar/Navbar.styles';
import NavbarItem from '@components/Navbar/NavbarItem/NavbarItem';
import { useAuth } from '@hooks/useAuth';
import { browsePath, homePath, listsPath, rankingPath, settingsPath } from '@routing/Paths';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const Navbar = ({ variant = 'full' }) => {
  const { removeToken } = useAuth();

  const handleLogOut = () => {
    removeToken();
    toast.success('Succesfuly logged out!');
  };

  return (
    <Wrapper>
      {variant === 'full' && <AccountBox />}
      <NavContainer>
        <ListContainer>
          <NavbarItem text="Home" variant={variant} to={homePath} icon={<Icon.Home />} />
          <NavbarItem text="My lists" variant={variant} to={listsPath} icon={<Icon.Bookmark />} />
          <NavbarItem text="Browse" variant={variant} to={browsePath} icon={<Icon.Search />} />
          <NavbarItem text="Ranking" variant={variant} to={rankingPath} icon={<Icon.Ranking />} />
        </ListContainer>
        {variant === 'full' && (
          <ListContainer>
            <NavbarItem
              text="Settings"
              variant={variant}
              to={settingsPath}
              icon={<Icon.Settings />}
            />
            <NavbarItem
              text="Log out"
              variant={variant}
              onClick={handleLogOut}
              icon={<Icon.Logout />}
            />
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
