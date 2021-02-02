import React, { ChangeEvent } from 'react';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import Ripple from '../common/Ripple';
import { StyledTabContainer } from './Tab.style';

interface TabDataProps {
  id: string;
  name: string;
  disabled: boolean;
  content: React.ReactNode;
}

interface TabProps {
  /** `Tab` 컴포넌트를 구성하는 아이템 배열입니다. { id:string, name:string, disabled:boolean, content: React.ReactNode } */
  tabs: Array<TabDataProps>;
  /** 선택할 TabId 입니다. */
  selected: string;
  /** 탭 그룹에 필요한 name입니다. */
  name: string;
  /** 탭의 색상을 정합니다.  */
  color: DoifColorType;
  /** 탭의 최소 높이를 정합니다. */
  height: string | number;
  /** 탭을 변경했을 때 실행되는 콜백함수입니다. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * `Tab` 컴포넌트는 여러 페이지를 한 페이지에 보여줄 때 사용합니다.
 */
const Tab = ({ tabs, selected, name, color, height, onChange }: TabProps) => {
  return (
    <StyledTabContainer color={color} height={height}>
      <div className="tab-header-container">
        {tabs.map((tab) => (
          <label
            key={tab.id}
            className={
              (tab.id === selected ? 'selected' : '') +
              (tab.disabled ? ' disabled' : '')
            }
          >
            <input
              type="radio"
              name={name}
              value={tab.id}
              checked={tab.id === selected}
              disabled={tab.disabled}
              onChange={onChange}
            />
            <span>{tab.name}</span>
            <Ripple disabled={tab.disabled} />
          </label>
        ))}
      </div>
      <div className="tab-content-container">
        {tabs.map(
          (tab) => tab.id === selected && <div key={tab.id}>{tab.content}</div>,
        )}
      </div>
    </StyledTabContainer>
  );
};

Tab.defaultProps = {
  color: 'primary',
  height: '10rem',
};

export default React.memo(Tab);
