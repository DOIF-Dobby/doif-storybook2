import { CategoryProps, MenuProps } from './SideMenu';

export const changeToMenuProps = (
  item: CategoryProps | MenuProps,
): MenuProps => {
  return <MenuProps>item;
};

export const changeToCategoryProps = (
  item: CategoryProps | MenuProps,
): CategoryProps => {
  return <CategoryProps>item;
};

export const getDepthItems = (
  items: Array<CategoryProps | MenuProps>,
  depth: number = 0,
): Array<CategoryProps | MenuProps> => {
  return items.map((item: CategoryProps | MenuProps) => {
    if (item.hasOwnProperty('childrenItems')) {
      const category: CategoryProps = changeToCategoryProps(item);
      category.depth = depth + 1;

      if (category.childrenItems && category.childrenItems.length > 0) {
        category.childrenItems = getDepthItems(
          category.childrenItems,
          category.depth,
        );
      }
    } else {
      item.depth = depth + 1;
    }

    return item;
  });
};
