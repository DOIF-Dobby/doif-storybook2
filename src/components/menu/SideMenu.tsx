import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import Icon, { IconType, iconTypes } from '../icon/Icon';
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
  const [openItemCodes, setOpenItmeCoeds] = useState<string[]>([]);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [isInternalFold, setIsInternalFold] = useState(isFold);

  const depthItems = getDepthItems(items);

  useEffect(() => {
    setIsInternalFold(isFold);
  }, [isFold]);

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

  const onClickHome = useCallback(() => {
    setSelectedMenu('');
    setOpenItmeCoeds([]);
  }, []);

  const onMouseEnter = useCallback(() => {
    if (isFold) {
      setIsInternalFold(false);
    }
  }, [isFold]);

  const onMouseLeave = useCallback(() => {
    if (isFold) {
      setIsInternalFold(true);
    }
  }, [isFold]);

  return (
    <StyledSpreadMenu color={color} isFold={isInternalFold}>
      <div className="title-container">
        <Link className="logo" to={homeUrl} onClick={onClickHome}>
          {isInternalFold ? smallLogo : bigLogo}
        </Link>
      </div>
      <div
        className="menu-container"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
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
              isInternalFold,
            );
          })}
        </ul>
      </div>
    </StyledSpreadMenu>
  );
};

SideMenu.defaultProps = {
  color: 'primary',
  isFold: false,
  homeUrl: '/',
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
  isFold?: boolean,
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
        isFold={isFold}
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
        isFold={isFold}
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
  isFold?: boolean;
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
  isFold,
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

  const classNameOpen = isOpen ? 'open' : 'close';

  return (
    <li>
      <a onClick={onClick} className="category" href="/">
        <div>{findIcon && <Icon icon={findIcon} />}</div>
        <div>
          <span className="menu-name">{name}</span>
        </div>
        <div className={classNameOpen}>
          <Icon icon="rightArrow" size="small" />
        </div>
      </a>
      <ChlidrenItems
        itemCount={childrenItems ? count : 0}
        color={color}
        className={classNameOpen}
        backgroundColor={backgroundDepth}
        isFold={isFold}
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
            isFold,
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
  isFold?: boolean;
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
  isFold,
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
          <span className="menu-name">{name}</span>
        </div>
      </Link>
    </li>
  );
};

export default React.memo(SideMenu);
