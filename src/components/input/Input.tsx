import React from 'react';
import styled, { css } from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import { StyledInputContainer } from './Input.style';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** input의 모양을 설정합니다. */
  variant: 'outline' | 'underline';
  /** input의 색을 정합니다. */
  color: DoifColorType;
  /** input의 넓이를 설정합니다. */
  width: string | number;
  /** input을 비활성화 시킵니다. */
  disabled: boolean;
  /** placeholder를 설정합니다. */
  placeholder?: string;
  /** input 앞쪽에 icon을 넣습니다. */
  frontIcon?: React.ReactNode;
  /** input 뒤쪽에 icon을 넣습니다. */
  backIcon?: React.ReactNode;
}

/**
 * `Input` 컴포넌트는 값을 입력할 때 사용합니다.
 */
const Input = ({
  variant,
  color,
  placeholder,
  width,
  disabled,
  frontIcon,
  backIcon,
  ...props
}: InputProps) => {
  return (
    <StyledInputContainer
      variant={variant}
      color={color}
      width={width}
      disabled={disabled}
      isFrontIcon={frontIcon ? true : false}
      isBackIcon={backIcon ? true : false}
    >
      <div className="front-icon">
        <div>{frontIcon}</div>
      </div>
      {variant === 'outline' ? (
        <OutlineInput
          variant={variant}
          color={color}
          placeholder={placeholder}
          width={width}
          disabled={disabled}
          frontIcon={frontIcon}
          backIcon={backIcon}
          {...props}
        />
      ) : (
        <UnderlineInput
          variant={variant}
          color={color}
          placeholder={placeholder}
          width={width}
          disabled={disabled}
          frontIcon={frontIcon}
          backIcon={backIcon}
          {...props}
        />
      )}
      <div className="back-icon">
        <div>{backIcon}</div>
      </div>
    </StyledInputContainer>
  );
};

/** Input 컴포넌트의 Default Props */
Input.defaultProps = {
  variant: 'outline',
  color: 'primary',
  width: '100%',
  disabled: false,
};

/** Outline Input */
const OutlineInput = ({
  variant,
  color,
  placeholder,
  width,
  disabled,
  frontIcon,
  backIcon,
  ...props
}: InputProps) => {
  return (
    <>
      <input
        placeholder={placeholder}
        title={placeholder}
        disabled={disabled}
        {...props}
      />
    </>
  );
};

/** Underline Input */
const UnderlineInput = ({
  variant,
  color,
  placeholder,
  disabled,
  width,
  frontIcon,
  backIcon,
  ...props
}: InputProps) => {
  return (
    <>
      <input
        title={placeholder}
        disabled={disabled}
        placeholder=" "
        {...props}
      />
      <div className="underline"></div>
      <label>{placeholder}</label>
    </>
  );
};

export default React.memo(Input);
