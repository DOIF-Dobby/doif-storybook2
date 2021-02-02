import React from 'react';
import Ripple from '../common/Ripple';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import { DoifDataProps } from '../../props/DoifCommonProps';
import { StyledRadioContainer } from './Radio.style';

interface RadioProps {
  /** 보여줄 라디오박스의 배열입니다. { code: string, name: string} */
  data: Array<DoifDataProps>;
  /** 선택할 라디오박스 code 값입니다. */
  value: string;
  /** 라디오박스의 name 속성입니다. */
  name: string;
  /** 라디오박스의 색상을 정합니다. */
  color: DoifColorType;
  /** 라디오박스를 비활성화 시킵니다. */
  disabled: boolean;
  /** 라디오박스의 defaultValue를 설정합니다. */
  defaultValue?: DoifDataProps;
  /** 라디오박스를 변경했을 때 실행되는 콜백함수입니다. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * `Radio` 컴포넌트는 여러 개의 값들 중 하나를 선택할 때 사용합니다.
 */
const Radio = ({
  data,
  value,
  name,
  color,
  disabled,
  defaultValue,
  onChange,
}: RadioProps) => {
  const initData: Array<DoifDataProps> = defaultValue
    ? [defaultValue, ...data]
    : data;

  return (
    <StyledRadioContainer color={color} disabled={disabled}>
      {initData.map((d) => {
        const isChecked = value === d.code;

        return (
          <label key={d.code}>
            <input
              value={d.code}
              type="radio"
              name={name}
              disabled={disabled}
              checked={isChecked}
              onChange={onChange}
            />
            <div>
              <div className={`radiobox ${isChecked && 'checked'}`}>
                <div className={isChecked ? 'checked' : ''}></div>
              </div>
              <div className="background"></div>
              <Ripple disabled={disabled} />
            </div>
            <span>{d.name}</span>
          </label>
        );
      })}
    </StyledRadioContainer>
  );
};

Radio.defaultProps = {
  color: 'primary',
  disabled: false,
};

export default React.memo(Radio);
