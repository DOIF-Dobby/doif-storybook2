import { CategoryProps, MenuProps } from './SideMenu';

/**
 * Menu 아이템 반환
 * @param item
 */
export const changeToMenuProps = (
  item: CategoryProps | MenuProps,
): MenuProps => {
  return <MenuProps>item;
};

/**
 * Category 아이템 반환
 * @param item
 */
export const changeToCategoryProps = (
  item: CategoryProps | MenuProps,
): CategoryProps => {
  return <CategoryProps>item;
};

/**
 * 아이템 리스트 돌면서 depth 추가
 * @param items
 * @param depth
 */
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

/**
 * 하위 Open된 카테고리 메뉴가 몇개인지 반환
 * @param items
 * @param openItemCodes
 * @param isOpen
 */
export const getOpenChildrenItemsCount = (
  items: Array<CategoryProps | MenuProps> | undefined,
  openItemCodes: string[] | undefined,
  isOpen: boolean | undefined,
): number => {
  let count = 0;

  if (!isOpen || !items) {
    return count;
  }

  count += items.length;

  for (const item of items) {
    if (item.hasOwnProperty('childrenItems')) {
      const isOpen =
        openItemCodes && item.depth
          ? openItemCodes[item.depth - 1] === item.code
          : false;

      const category: CategoryProps = changeToCategoryProps(item);

      count += getOpenChildrenItemsCount(
        category.childrenItems,
        openItemCodes,
        isOpen,
      );
    }
  }

  return count;
};
