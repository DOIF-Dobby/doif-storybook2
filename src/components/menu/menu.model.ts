import { DoifColorType } from '../../styles/themes/DoifThemeProps';

export interface CategoryProps {
  code: string;
  name: string;
  depth?: number;
  icon?: string;
  childrenItems?: Array<CategoryProps | MenuProps>;
  isOpen?: boolean;
  openItemCodes?: string[];
  onClickCategory?: (depth: number | undefined, code: string) => void;
  onClickMenu?: (menu: string) => void;
  color?: DoifColorType;
  selectedMenu?: string;
  isFold?: boolean;
}

export interface MenuProps {
  code: string;
  name: string;
  depth?: number;
  icon?: string;
  url: string;
  onClickMenu?: (menu: string) => void;
  selectedMenu?: string;
  isFold?: boolean;
}
