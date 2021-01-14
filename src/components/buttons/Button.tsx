import React from 'react';
import styled from 'styled-components';

interface ButtonPrpos
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** 버튼을 비활성화 시킵니다. */
  disabled: boolean;
}

interface StyledButtonWrapperProps {
  disabled: boolean;
}

/**
 * `Button` 컴포넌트는 어떠한 작업을 트리거할 때 사용합니다.
 */
const Button = ({ children, disabled, ...props }: ButtonPrpos) => {
  return (
    <StyledButtonWrapper disabled={disabled}>
      <button disabled={disabled} {...props}>
        {children}
      </button>
    </StyledButtonWrapper>
  );
};

Button.defaultProps = {
  disabled: false,
};

const StyledButtonWrapper = styled.div<StyledButtonWrapperProps>`
  > button {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

export default React.memo(Button);
