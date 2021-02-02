import React, { Children } from 'react';
import Ripple from '../common/Ripple';
import {
  DoifColorType,
  DoifSizeType,
  DoifVariantType,
} from '../../styles/themes/DoifThemeProps';
import { StyledButtonContainer } from './Button.style';

interface ButtonPrpos
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** 버튼 내용 */
  children: React.ReactNode;
  /** 버튼을 비활성화 시킵니다. */
  disabled: boolean;
  /** 버튼의 색상을 정합니다. */
  color: DoifColorType;
  /** 버튼의 모양을 정합니다. */
  variant: DoifVariantType;
  /** 버튼의 크기를 정합니다. */
  size: DoifSizeType;
  /** 버튼의 `width`를 정합니다. */
  width: string | number;
  /** 버튼에서 아이콘만 보여줄 때는 이 값을 `true`로 설정하세요  */
  iconOnly: boolean;
}

/**
 * `Button` 컴포넌트는 어떠한 작업을 트리거할 때 사용합니다.
 */
const Button = ({
  children,
  disabled,
  color,
  variant,
  size,
  width,
  iconOnly,
  ...props
}: ButtonPrpos) => {
  let iconLocation: string = '';

  // 아이콘이 앞에 있는지, 뒤에 있는지 판별하기 위함
  if (typeof children === 'object') {
    const iconIndex: number = Children.toArray(children).findIndex(
      (child) => typeof child === 'object',
    );

    // 아이콘이 없음
    if (iconOnly || iconIndex === -1) {
      iconLocation = 'none';

      // 아이콘이 버튼명보다 앞에 있음
    } else if (iconIndex === 0) {
      iconLocation = 'left';

      // 아이콘이 버튼명보다 뒤에 있음
    } else {
      iconLocation = 'right';
    }
  }

  return (
    <StyledButtonContainer
      disabled={disabled}
      color={color}
      variant={variant}
      size={size}
      width={width}
      iconLocation={iconLocation}
      iconOnly={iconOnly}
    >
      <button disabled={disabled} {...props}>
        {children}
        <Ripple disabled={disabled} />
      </button>
    </StyledButtonContainer>
  );
};

/** Button 컴포넌트의 Default Props */
Button.defaultProps = {
  disabled: false,
  color: 'primary',
  variant: 'fill',
  size: 'medium',
  width: 'auto',
  iconOnly: false,
};

export default React.memo(Button);
