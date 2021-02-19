import React from 'react';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import Button from '../button/Button';
import Icon, { IconType, iconTypes } from '../icon/Icon';
import Input from '../input/Input';
import { StyledSideMenu } from './SideMenu.style';

interface SideMenuProps {
  bigLogo: React.ReactNode;
  smallLogo: React.ReactNode;
  homeUrl: string;
  color: DoifColorType;
  menus: Array<MenuProps>;
}

export interface MenuProps {
  code: string;
  name: string;
  sort: number;
  depth: number;
  type: 'MENU' | 'CATEGORY';
  icon: string;
  url: string;
}

/**
 * `SideMenu` 컴포넌트는 화면 완쪽에 메뉴를 보여줄 때 사용합니다.
 */

const SideMenu = ({ bigLogo, color, menus }: SideMenuProps) => {
  return (
    <StyledSideMenu color={color}>
      <div className="title-container">
        <div className="big-logo">{bigLogo}</div>
        {/* <div className="fold">
          <Button
            iconOnly
            style={{
              backgroundColor: 'transparent',
              borderRadius: '1.25rem',
              width: '2.5rem',
              height: '2.5rem',
            }}
          >
            <Icon icon="leftArrow" />
          </Button>
        </div> */}
      </div>
      <div className="search-container">
        <Input placeholder="Search..." />
      </div>
      <div className="menu-container">
        {menus.map((menu) => {
          const findIcon: IconType | undefined = iconTypes.find(
            (icon) => icon === menu.icon,
          );
          return menu.type === 'CATEGORY' ? (
            <div key={menu.code} className="category">
              {findIcon && <Icon icon={findIcon} />}
              <div>{menu.name}</div>
            </div>
          ) : (
            <div key={menu.code} className="menu">
              {findIcon && <Icon icon={findIcon} />}
              <div>{menu.name}</div>
            </div>
          );
        })}
      </div>
    </StyledSideMenu>
  );
};

SideMenu.defaultProps = {
  color: 'primary',
  homeUrl: '/',
};

export default React.memo(SideMenu);
