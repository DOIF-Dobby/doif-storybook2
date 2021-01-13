import React from 'react';
import styled from 'styled-components';

interface MyButtonPrpos
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** 버튼을 비활성화 시킵니다. */
  disabled: boolean;
}

/**
 * 버튼입니다
 */
const MyButton = ({ children, ...props }: MyButtonPrpos) => {
  return (
    <StyledButtonWrapper>
      <button {...props}>{children}</button>
    </StyledButtonWrapper>
  );
};

MyButton.defaultProps = {
  disabled: false,
};

const StyledButtonWrapper = styled.div`
  > button {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export default MyButton;
