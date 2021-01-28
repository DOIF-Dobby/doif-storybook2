import React, { ChangeEvent } from 'react';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import { StyledTabContainer } from './Tab.style';

interface TabDataProps {
  id: string;
  name: string;
  disabled: boolean;
  content: React.ReactNode;
}

interface TabProps {
  /** */
  tabs: Array<TabDataProps>;
  selected: string;
  name: string;
  color: DoifColorType;
  height: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * `Tab` 컴포넌트는 여러 페이지를 한 페이지에 보여줄 때 사용합니다.
 */
const Tab = ({ tabs, selected, name, color, onChange }: TabProps) => {
  return (
    <StyledTabContainer color={color}>
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
};

export default React.memo(Tab);
