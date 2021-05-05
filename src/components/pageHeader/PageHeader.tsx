import React from 'react';
import Icon from '../icon/Icon';
import { StyledPageHeader } from './PageHeader.style';

interface PageHeaderProps {
  /** 메뉴명 */
  menuName: string;
  /** 메뉴 리스트 */
  menuList: string[];
}

const PageHeader = ({ menuName, menuList }: PageHeaderProps) => {
  return (
    <StyledPageHeader>
      <div className="menu-container">
        <div className="menu-name">{menuName}</div>
        <div className="menu-list">
          {menuList.map((menu, i) => (
            <div className="menu-list-item">
              <span className="menu-list-item-name">{menu}</span>
              {i !== menuList.length - 1 && <Icon icon="rightArrow" />}
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-line"></div>
    </StyledPageHeader>
  );
};

export default React.memo(PageHeader);
