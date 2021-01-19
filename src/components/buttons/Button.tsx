import React from 'react';
import styled, { css } from 'styled-components';
import Ripple from '../ripple/Ripple';

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
  color: 'primary' | 'secondary';
  /** 버튼의 모양을 정합니다. */
  variant: 'fill' | 'outline' | 'ghost';
  /** 버튼의 크기를 정합니다. */
  size: 'small' | 'medium' | 'large';
}

interface StyledButtonWrapperProps {
  disabled: boolean;
  color: 'primary' | 'secondary';
  variant: 'fill' | 'outline' | 'ghost';
  size: 'small' | 'medium' | 'large';
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
  ...props
}: ButtonPrpos) => {
  return (
    <StyledButtonWrapper
      disabled={disabled}
      color={color}
      variant={variant}
      size={size}
    >
      <button disabled={disabled} {...props}>
        {children}
        <Ripple disabled={disabled} />
      </button>
    </StyledButtonWrapper>
  );
};

/** Button 컴포넌트의 Default Props */
Button.defaultProps = {
  disabled: false,
  color: 'primary',
  variant: 'fill',
  size: 'medium',
};

/** Button 컴포넌트의 스타일 */
const StyledButtonWrapper = styled.div<StyledButtonWrapperProps>`
  & {
    display: inline;
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

    overflow: hidden;
    outline: none;
    position: relative;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

/** variant === 'fill' 인 버튼 스타일 */
const FillButtonStyle = css<StyledButtonWrapperProps>`
  background-color: ${(props) => props.theme.colors[props.color].base};
  color: ${(props) => props.theme.colors.content};
  border: none;
  border-radius: ${(props) => props.theme.variants.borderRadius};

  &:hover {
    background-color: ${(props) =>
      !props.disabled && props.theme.colors[props.color].dark};
  }

  span.ripple-effect {
    background-color: ${(props) => props.theme.colors.content};
  }
`;

/** variant === 'outline' 인 버튼 스타일 */
const OutlineButtonStyle = css<StyledButtonWrapperProps>`
  background-color: transparent;
  color: ${(props) => props.theme.colors[props.color].base};
  border: 1px solid ${(props) => props.theme.colors[props.color].base};
  border-radius: ${(props) => props.theme.variants.borderRadius};

  &:hover {
    background-color: ${(props) =>
      !props.disabled && props.theme.colors[props.color].light};
  }

  span.ripple-effect {
    background-color: ${(props) => props.theme.colors[props.color].base};
  }
`;

/** variant === 'ghost' 인 버튼 스타일 */
const GhostButtonStyle = css<StyledButtonWrapperProps>`
  background-color: transparent;
  color: ${(props) => props.theme.colors[props.color].base};
  border: none;
  border-radius: ${(props) => props.theme.variants.borderRadius};

  &:hover {
    background-color: ${(props) =>
      !props.disabled && props.theme.colors[props.color].light};
  }

  span.ripple-effect {
    background-color: ${(props) => props.theme.colors[props.color].base};
  }
`;

/** size === 'small' 인 버튼 스타일 */
const SmallButtonStyle = css<StyledButtonWrapperProps>`
  height: 1.5rem;
  font-size: 0.9rem;
`;

/** size === 'medium' 인 버튼 스타일 */
const MediumButtonStyle = css<StyledButtonWrapperProps>`
  height: 2rem;
  font-size: 1rem;
`;

/** size === 'large' 인 버튼 스타일 */
const LargeButtonStyle = css<StyledButtonWrapperProps>`
  height: 2.5rem;
  font-size: 1.1rem;
`;

export default React.memo(Button);
