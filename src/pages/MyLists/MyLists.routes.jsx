import MyLists from '@pages/MyLists/MyLists';
import { listsPath } from '@routing/Paths';

export const MyListsRoute = {
  path: listsPath,
  element: <MyLists />,
};
