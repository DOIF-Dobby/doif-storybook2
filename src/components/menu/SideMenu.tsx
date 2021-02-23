import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import Icon, { IconType, iconTypes } from '../icon/Icon';
import Input from '../input/Input';
import { ChlidrenItems, StyledSpreadMenu } from './SideMenu.style';
import {
  changeToMenuProps,
  getDepthItems,
  getOpenChildrenItemsCount,
} from './menuUtil';

interface SideMenuProps {
  /** 메뉴가 펼쳐졌을 때 보여줄 logo 입니다. */
  bigLogo: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  /** 메뉴가 접혔을 때 보여줄 logo 입니다. */
  smallLogo: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  /** 메뉴를 펼칠 지, 접을 지 정합니다. */
  isFold: boolean;
  /** `bigLogo`, `smallLogo`를 클릭했을 때, 이동할 url 입니다. */
  homeUrl: string;
  /** `SideMenu` 컴포넌트의 색상을 정합니다. */
  color: DoifColorType;
  /** `SideMenu` 컴포넌트에서 보여줄 메뉴들입니다. */
  items: Array<CategoryProps | MenuProps>;
}

/**
 * `SideMenu` 컴포넌트는 화면 완쪽에 메뉴를 보여줄 때 사용합니다.
 */

const SideMenu = ({
  bigLogo,
  smallLogo,
  homeUrl,
  isFold,
  color,
  items,
}: SideMenuProps) => {
  // 타입에 따라 다른 컴포넌트 렌더링
  return isFold ? (
    <SpreadMenu
      bigLogo={bigLogo}
      smallLogo={smallLogo}
      isFold={isFold}
      homeUrl={homeUrl}
      color={color}
      items={items}
    />
  ) : (
    <SpreadMenu
      bigLogo={bigLogo}
      smallLogo={smallLogo}
      isFold={isFold}
      homeUrl={homeUrl}
      color={color}
      items={items}
    />
  );
};

SideMenu.defaultProps = {
  color: 'primary',
  isFold: false,
  homeUrl: '/',
};

/**
 * 펼쳐진 메뉴
 */
const SpreadMenu = ({ bigLogo, homeUrl, color, items }: SideMenuProps) => {
  const [openItemCodes, setOpenItmeCoeds] = useState<string[]>([]);
  const [selectedMenu, setSelectedMenu] = useState('');
  const depthItems = getDepthItems(items);

  const onClickCategory = useCallback(
    (depth: number | undefined, code: string) => {
      setOpenItmeCoeds((openItemCodes) => {
        const existingCode = openItemCodes[depth ? depth - 1 : 0];
        const newItems = openItemCodes
          ?.slice(0, depth ? depth - 1 : 0)
          .concat(code === existingCode ? '' : code);
        return newItems;
      });
    },
    [],
  );

  const onClickMenu = useCallback((menu: string) => {
    setSelectedMenu(menu);
  }, []);

  return (
    <StyledSpreadMenu color={color}>
      <div className="title-container">
        <Link className="big-logo" to={homeUrl}>
          {bigLogo}
        </Link>
      </div>
      <div className="menu-container">
        <ul className="menu-ul">
          {depthItems.map((item) => {
            const isOpen =
              openItemCodes && item.depth
                ? openItemCodes[item.depth - 1] === item.code
                : false;

            return renderMenuOrCategory(
              item,
              isOpen,
              openItemCodes,
              onClickCategory,
              onClickMenu,
              color,
              selectedMenu,
            );
          })}
        </ul>
      </div>
    </StyledSpreadMenu>
  );
};

/**
 * 카테고리 or 메뉴 렌더링
 */
const renderMenuOrCategory = (
  item: CategoryProps | MenuProps,
  isOpen: boolean,
  openItemCodes: string[] | undefined,
  onClickCategory?: (depth: number | undefined, code: string) => void,
  onClickMenu?: (menu: string) => void,
  color?: DoifColorType,
  selectedMenu?: string,
) => {
  const isMenu = item.hasOwnProperty('url');
  if (isMenu) {
    const menu: MenuProps = changeToMenuProps(item);
    return (
      <Menu
        key={item.code}
        {...menu}
        onClickMenu={onClickMenu}
        selectedMenu={selectedMenu}
      />
    );
  } else {
    return (
      <Category
        color={color}
        key={item.code}
        {...item}
        onClickCategory={onClickCategory}
        openItemCodes={openItemCodes}
        isOpen={isOpen}
        onClickMenu={onClickMenu}
        selectedMenu={selectedMenu}
      />
    );
  }
};

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
}

/**
 * 카테고리 컴포넌트
 */
const Category = ({
  name,
  code,
  depth,
  icon,
  childrenItems,
  isOpen,
  openItemCodes,
  onClickCategory,
  onClickMenu,
  color,
  selectedMenu,
}: CategoryProps) => {
  const onClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (onClickCategory) {
        onClickCategory(depth, code);
        event.preventDefault();
      }
    },
    [],
  );

  const count = getOpenChildrenItemsCount(childrenItems, openItemCodes, isOpen);

  const findIcon: IconType | undefined = iconTypes.find((el) => el === icon);

  // @ts-ignore
  const backgroundDepth: 'depth1' | 'depth2' | 'depth3' | 'depth4' = depth
    ? 'depth' + ((depth + 1) % 4)
    : 'depth1';

  return (
    <li>
      <a onClick={onClick} className="category" href="/">
        <div>{findIcon && <Icon icon={findIcon} />}</div>
        <div>
          <span className="menu-name">
            {name}
            {depth}
          </span>
        </div>
        <div className={isOpen ? 'open' : 'close'}>
          <Icon icon="rightArrow" size="small" />
        </div>
      </a>
      <ChlidrenItems
        itemCount={childrenItems ? count : 0}
        color={color}
        className={isOpen ? 'open' : 'close'}
        backgroundColor={backgroundDepth}
      >
        {childrenItems?.map((item) => {
          const isOpen =
            openItemCodes && item.depth
              ? openItemCodes[item.depth - 1] === item.code
              : false;

          return renderMenuOrCategory(
            item,
            isOpen,
            openItemCodes,
            onClickCategory,
            onClickMenu,
            color,
            selectedMenu,
          );
        })}
      </ChlidrenItems>
    </li>
  );
};

export interface MenuProps {
  code: string;
  name: string;
  depth?: number;
  icon?: string;
  url: string;
  onClickMenu?: (menu: string) => void;
  selectedMenu?: string;
}

/**
 * 메뉴 컴포넌트
 */
const Menu = ({
  code,
  name,
  icon,
  depth,
  url,
  onClickMenu,
  selectedMenu,
}: MenuProps) => {
  const findIcon: IconType | undefined = iconTypes.find((el) => el === icon);
  const onClick = useCallback(() => {
    if (onClickMenu) {
      onClickMenu(code);
    }
  }, []);

  return (
    <li onClick={onClick}>
      <Link
        className={`menu ${code === selectedMenu ? 'selected' : ''}`}
        to={url ? url : window.location.href}
      >
        <div>{findIcon && <Icon icon={findIcon} />}</div>
        <div>
          <span className="menu-name">
            {name}
            {depth}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default React.memo(SideMenu);
