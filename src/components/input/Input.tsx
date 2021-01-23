import React from 'react';
import styled, { css } from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

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

interface StyledInputContainerProps {
  variant: 'outline' | 'underline';
  color: DoifColorType;
  width: string | number;
  disabled: boolean;
  isFrontIcon: boolean;
  isBackIcon: boolean;
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

/** Input 컴포넌트의 스타일 */
const StyledInputContainer = styled.div<StyledInputContainerProps>`
  & {
    display: flex;
    height: 2rem;
    width: ${(props) => props.width};
    position: relative;
  }

  & > input {
    width: 100%;
    border: ${(props) =>
      `${props.theme.variants.borderWidth} solid ${props.theme.subColors.border}`};
    border-radius: ${(props) => props.theme.variants.borderRadius};
    background-color: ${(props) => props.theme.subColors.content};
    color: ${(props) => props.theme.subColors.text};
  }

  ${(props) => props.variant === 'outline' && OutlineInputStyle};
  ${(props) => props.variant === 'underline' && UnderlineInputStyle};

  & > div.front-icon {
    ${() => FrontIconContainerStyle}
  }

  & > div.back-icon {
    ${() => BackIconContainerStyle}
  }
`;

/** variant === 'outline' 스타일 */
const OutlineInputStyle = css<StyledInputContainerProps>`
  & > input {
    &:focus {
      border: ${(props) =>
        `2px solid ${props.theme.mainColors[props.color].base}`};
      border-radius: ${(props) => props.theme.variants.borderRadius};
    }

    &::placeholder {
      color: ${(props) => props.theme.subColors.border};
    }

    &:disabled {
      border-color: ${(props) => props.theme.subColors.disabled};
      color: ${(props) => props.theme.subColors.disabled};

      &::placeholder {
        color: ${(props) => props.theme.subColors.disabled};
      }
    }

    padding-left: ${(props) => (props.isFrontIcon ? '1.8rem' : '0.5rem')};
    padding-right: ${(props) => (props.isBackIcon ? '1.8rem' : '0.5rem')};
  }
`;

/** variant === 'underline' 스타일 */
const UnderlineInputStyle = css<StyledInputContainerProps>`
  & > input {
    background-color: transparent;
    border: none;
    border-radius: 0;
    padding: 0;
    border-bottom: ${(props) =>
      `${props.theme.variants.borderWidth} solid ${props.theme.subColors.border}`};

    &:focus ~ label {
      color: ${(props) => props.theme.mainColors[props.color].base};
    }
    &:disabled {
      border-bottom-color: ${(props) => props.theme.subColors.disabled};
      color: ${(props) => props.theme.subColors.disabled};
    }
    &:disabled ~ label {
      color: ${(props) => props.theme.subColors.disabled};
    }

    &:focus ~ .underline:before {
      transform: scaleX(1);
    }

    padding-left: ${(props) => (props.isFrontIcon ? '1.3rem' : '0')};
    padding-right: ${(props) => (props.isBackIcon ? '1.3rem' : '0')};
  }

  & > input:focus ~ label,
  & > input:not(:placeholder-shown) ~ label {
    transform-origin: 0 0;
    transform: translateY(-1rem) scale(0.8);
    transition: transform 0.2s ease;
  }

  & > label {
    position: absolute;
    bottom: 0.5rem;
    left: ${(props) => (props.isFrontIcon ? '1.3rem' : '0')};
    font-size: 0.9rem;
    color: ${(props) => props.theme.subColors.border};
    pointer-events: none;
    transition: all 0.2s ease;
  }

  & > div.underline {
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
  }

  & > div.underline:before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.mainColors[props.color].base};
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }
`;

const IconContainerStyle = css<StyledInputContainerProps>`
  & {
    position: absolute;
    height: 100%;
  }

  & > div {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
  }
`;

const FrontIconContainerStyle = css<StyledInputContainerProps>`
  ${() => IconContainerStyle};

  & {
    left: ${(props) => props.variant === 'outline' && '0.5rem'};
    left: ${(props) => props.variant === 'underline' && '0'};
  }

  & svg {
    fill: ${(props) => props.disabled && props.theme.subColors.disabled};
  }
`;

const BackIconContainerStyle = css<StyledInputContainerProps>`
  ${() => IconContainerStyle};

  & {
    right: ${(props) => props.variant === 'outline' && '0.5rem'};
    right: ${(props) => props.variant === 'underline' && '0'};
  }

  & svg {
    fill: ${(props) => props.disabled && props.theme.subColors.disabled};
  }
`;

export default React.memo(Input);
