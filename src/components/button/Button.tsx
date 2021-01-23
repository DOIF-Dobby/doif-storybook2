import React, { Children } from 'react';
import styled, { css } from 'styled-components';
import Ripple from '../ripple/Ripple';
import {
  DoifColorType,
  DoifSizeType,
  DoifVariantType,
} from '../../styles/themes/DoifThemeProps';

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

interface StyledButtonContainerProps {
  disabled: boolean;
  color: DoifColorType;
  variant: DoifVariantType;
  size: DoifSizeType;
  iconLocation: string;
  iconOnly: boolean;
  width: string | number;
}

/** children 에서 icon 타입을 찾기 위한 재귀함수 */
// const iconTypeCheckFunction = (object: any): boolean => {
//   if (object.hasOwnProperty('props')) {
//     if (object.props.hasOwnProperty('children')) {
//       return iconTypeCheckFunction(object.props.children);
//     }
//   }

//   if (object.hasOwnProperty('type')) {
//     return iconTypeCheckFunction(object.type);
//   }

//   return object.name === 'Icon';
// };

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

/** Button 컴포넌트의 스타일 */
const StyledButtonContainer = styled.div<StyledButtonContainerProps>`
  & {
    display: inline-flex;
    width: ${(props) => props.width};
  }

  & > button {

    // 모양에 따른 스타일
    ${(props) => props.variant === 'fill' && FillButtonStyle}
    ${(props) => props.variant === 'outline' && OutlineButtonStyle}
    ${(props) => props.variant === 'ghost' && GhostButtonStyle}

    // 크기에 따른 스타일
    ${(props) => props.size === 'small' && SmallButtonStyle}
    ${(props) => props.size === 'medium' && MediumButtonStyle}
    ${(props) => props.size === 'large' && LargeButtonStyle}

    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    outline: none;
    position: relative;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }

    /** 아이콘 위치에 따른 margin 설정 */
    & svg {
      margin-right: ${(props) => props.iconLocation === 'left' && '0.5rem'};
      margin-left: ${(props) => props.iconLocation === 'right' && '0.5rem'};
    }
  }
`;

/** variant === 'fill' 인 버튼 스타일 */
const FillButtonStyle = css<StyledButtonContainerProps>`
  background-color: ${(props) => props.theme.mainColors[props.color].base};
  color: ${(props) => props.theme.subColors.content};
  border: none;
  border-radius: ${(props) => props.theme.variants.borderRadius};

  &:hover {
    background-color: ${(props) =>
      !props.disabled && props.theme.mainColors[props.color].dark};
  }

  & svg {
    fill: ${(props) => props.theme.subColors.content};
  }

  span.ripple-effect {
    background-color: ${(props) => props.theme.subColors.content};
  }
`;

/** variant === 'outline' 인 버튼 스타일 */
const OutlineButtonStyle = css<StyledButtonContainerProps>`
  background-color: transparent;
  color: ${(props) => props.theme.mainColors[props.color].base};
  border: ${(props) =>
    `${props.theme.variants.borderWidth} solid ${
      props.theme.mainColors[props.color].base
    }`};
  border-radius: ${(props) => props.theme.variants.borderRadius};

  &:hover {
    background-color: ${(props) =>
      !props.disabled && props.theme.mainColors[props.color].light};
  }

  span.ripple-effect {
    background-color: ${(props) => props.theme.mainColors[props.color].base};
  }
`;

/** variant === 'ghost' 인 버튼 스타일 */
const GhostButtonStyle = css<StyledButtonContainerProps>`
  background-color: transparent;
  color: ${(props) => props.theme.mainColors[props.color].base};
  border: none;
  border-radius: ${(props) => props.theme.variants.borderRadius};

  &:hover {
    background-color: ${(props) =>
      !props.disabled && props.theme.mainColors[props.color].light};
  }

  span.ripple-effect {
    background-color: ${(props) => props.theme.mainColors[props.color].base};
  }
`;

/** size === 'small' 인 버튼 스타일 */
const SmallButtonStyle = css<StyledButtonContainerProps>`
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.75rem;
`;

/** size === 'medium' 인 버튼 스타일 */
const MediumButtonStyle = css<StyledButtonContainerProps>`
  height: 2rem;
  line-height: 2rem;
  font-size: 1rem;
`;

/** size === 'large' 인 버튼 스타일 */
const LargeButtonStyle = css<StyledButtonContainerProps>`
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1.25rem;
`;

export default React.memo(Button);
