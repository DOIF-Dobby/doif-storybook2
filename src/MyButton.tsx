import React from 'react';
import styled from 'styled-components';

interface MyButtonPrpos {
  /** 버튼 명 */
  children: React.ReactNode;
}

/**
 * 버튼입니다
 */
const MyButton = ({ children, ...props }: MyButtonPrpos) => {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
`;

export default MyButton;
