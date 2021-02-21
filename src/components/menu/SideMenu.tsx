import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import Icon, { IconType, iconTypes } from '../icon/Icon';
import Input from '../input/Input';
import { StyledSpreadMenu } from './SideMenu.style';
import { chnageToMenuProps } from './menuUtil';

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
  return (
    <StyledSpreadMenu color={color}>
      <div className="title-container">
        <Link className="big-logo" to={homeUrl}>
          {bigLogo}
        </Link>
      </div>
      <div className="search-container">
        <Input placeholder="Search..." color={color} />
      </div>
      <div className="menu-container">
        {items.map((item) => renderMenuOrCategory(item))}
      </div>
    </StyledSpreadMenu>
  );
};

/**
 * 카테고리 or 메뉴 렌더링
 */
const renderMenuOrCategory = (item: CategoryProps | MenuProps) => {
  const isMenu = item.hasOwnProperty('url');
  if (isMenu) {
    const menu: MenuProps = chnageToMenuProps(item);
    return <Menu {...menu} />;
  } else {
    return <Category {...item} />;
  }
};

export interface CategoryProps {
  code: string;
  name: string;
  sort: number;
  depth: number;
  icon?: string;
  childrenItems?: Array<CategoryProps | MenuProps>;
}

/**
 * 카테고리 컴포넌트
 */
const Category = ({ name, icon, childrenItems }: CategoryProps) => {
  const [visible, setVisible] = useState(false);

  const onCategoryClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();

      setVisible((visible) => !visible);
    },
    [],
  );

  const findIcon: IconType | undefined = iconTypes.find((el) => el === icon);

  return (
    <>
      <a onClick={onCategoryClick} className="category" href="/">
        <div>{findIcon && <Icon icon={findIcon} />}</div>
        <div>
          <span className="menu-name">{name}</span>
        </div>
        <div>
          <Icon icon="downArrow" size="small" />
        </div>
      </a>
      {visible && (
        <div className="children-items">
          {childrenItems?.map((subItem) => renderMenuOrCategory(subItem))}
        </div>
      )}
    </>
  );
};

export interface MenuProps {
  code: string;
  name: string;
  sort: number;
  depth: number;
  icon?: string;
  url: string;
}

/**
 * 메뉴 컴포넌트
 */
const Menu = ({ name, icon, url }: MenuProps) => {
  const findIcon: IconType | undefined = iconTypes.find((el) => el === icon);

  return (
    <Link className="menu" to={url ? url : window.location.href}>
      <div>{findIcon && <Icon icon={findIcon} />}</div>
      <div>
        <span className="menu-name">{name}</span>
      </div>
    </Link>
  );
};

export default React.memo(SideMenu);
