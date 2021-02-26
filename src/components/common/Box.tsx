import React from 'react';
import styled from 'styled-components';

interface BoxProps {
  children: React.ReactNode;
}

/**
 * `Box` 컴포넌트는 `Page` 컴포넌트에 위치시키고, 안에는 여러가지 컴포넌트를 위치시킨다.
 */
const Box = ({ children }: BoxProps) => {
  return <StyledBox>{children}</StyledBox>;
};

const StyledBox = styled.div`
  background-color: ${(props) => props.theme.subColors.boxBackground};
  border-radius: ${(props) => props.theme.variants.borderRadius};
  padding: 1rem;
  overflow: hidden;
`;

export default React.memo(Box);
