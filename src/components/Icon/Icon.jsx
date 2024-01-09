import { Bookmark } from '@components/Icon/IconComponents/Bookmark';
import { ChevronDown } from '@components/Icon/IconComponents/ChevronDown';
import { Home } from '@components/Icon/IconComponents/Home';
import { Logout } from '@components/Icon/IconComponents/Logout';
import { Ranking } from '@components/Icon/IconComponents/Ranking';
import { Search } from '@components/Icon/IconComponents/Search';
import { Settings } from '@components/Icon/IconComponents/Settings';
import { Shuffle } from '@components/Icon/IconComponents/Shuffle';

const Icon = {
  Home,
  Search,
  Bookmark,
  Shuffle,
  Ranking,
  Settings,
  Logout,
  ChevronDown,
};

export default Icon;

/**
 * If you want to add new icon:
    - go to the ICONS PAGE, set the following options:
      - width 2.0px
      - outline
      - round
    - copy svg by clicking "COPY" option
    - add new icon component in src\components\Icon\IconComponents in the same way as the rest of the icons
    - add size prop and pass it to SVG width and height attributes
    - remove fill attributes in SVG and path tags
    - import new icon in Icon.jsx and add it to icon object
    Now you can use it by adding <Icon.NameOfIcon />
 */
