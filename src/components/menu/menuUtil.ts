import { CategoryProps, MenuProps } from './SideMenu';

export const chnageToMenuProps = (
  item: CategoryProps | MenuProps,
): MenuProps => {
  return <MenuProps>item;
};
