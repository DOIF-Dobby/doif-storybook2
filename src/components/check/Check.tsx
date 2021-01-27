import React from 'react';
import Ripple from '../ripple/Ripple';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import { DoifDataProps } from '../../props/DoifCommonProps';
import Icon, { IconType } from '../icon/Icon';
import { StyledCheckContainer } from './Check.style';

interface CheckProps {
  /** 보여줄 체크박스의 배열입니다. { code: string, name: string} */
  data: Array<DoifDataProps>;
  /** 선택할 체크박스 code의 배열입니다. */
  values: string[];
  /** 체크박스의 name 속성입니다. */
  name: string;
  /** 체크박스의 색상을 정합니다. */
  color: DoifColorType;
  /** 체크박스를 비활성화 시킵니다. */
  disabled: boolean;
  /** 체크박스의 icon를 정합니다. */
  icon: IconType;
  /** 체크박스를 변경했을 때 실행되는 콜백함수입니다. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * `Check` 컴포넌트는 여러 개의 값을 선택할 때 사용합니다.
 */
const Check = ({
  data,
  values,
  name,
  color,
  disabled,
  icon,
  onChange,
}: CheckProps) => {
  return (
    <StyledCheckContainer color={color} disabled={disabled}>
      {data.map((d) => {
        const isChecked = values.includes(d.code);

        return (
          <label key={d.code}>
            <input
              type="checkbox"
              value={d.code}
              name={name}
              checked={isChecked}
              disabled={disabled}
              onChange={onChange}
            />
            <div>
              <div className={`checkbox ${isChecked && 'checked'}`}>
                <Icon icon={icon} color={color} />
              </div>
              <div className="background"></div>
              <Ripple disabled={disabled} />
            </div>
            <span>{d.name}</span>
          </label>
        );
      })}
    </StyledCheckContainer>
  );
};

Check.defaultProps = {
  color: 'primary',
  disabled: false,
  icon: 'check',
};

export default React.memo(Check);
