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
          <NavbarItem
            test={'navbar_home_button'}
            text="Home"
            variant={variant}
            to={homePath}
            icon={<Icon.Home />}
          />
          <NavbarItem
            test={'navbar_lists_button'}
            text="My lists"
            variant={variant}
            to={listsPath}
            icon={<Icon.Bookmark />}
          />
          <NavbarItem
            test={'navbar_browse_button'}
            text="Browse"
            variant={variant}
            to={browsePath}
            icon={<Icon.Search />}
          />
          <NavbarItem
            test={'navbar_ranking_button'}
            text="Ranking"
            variant={variant}
            to={rankingPath}
            icon={<Icon.Ranking />}
          />
        </ListContainer>
        {variant === 'full' && (
          <ListContainer>
            <NavbarItem
              test={'navbar_settings_button'}
              text="Settings"
              variant={variant}
              to={settingsPath}
              icon={<Icon.Settings />}
            />
            <NavbarItem
              test={'navbar_logout_button'}
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
