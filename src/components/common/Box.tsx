import React from 'react';
import styled from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface BoxProps {
  children: React.ReactNode;
  color: DoifColorType;
  height?: number | string;
  style?: React.CSSProperties;
}

/**
 * `Box` 컴포넌트는 `Page` 컴포넌트에 위치시키고, 안에는 여러가지 컴포넌트를 위치시킨다.
 */
const Box = ({ children, color, height, style }: BoxProps) => {
  return (
    <StyledBox color={color} style={style} height={height}>
      {children}
    </StyledBox>
  );
};

Box.defaultProps = {
  color: 'primary',
};

interface StyledBoxProps {
  color: DoifColorType;
  height?: number | string;
}

const StyledBox = styled.div<StyledBoxProps>`
  background-color: ${(props) => props.theme.subColors.boxBackground};
  border-radius: ${(props) => props.theme.variants.borderRadius};
  padding: 1rem;
  width: 100%;
  height: ${(props) => props.height && props.height};
  overflow: auto;

  ::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${(props) => props.theme.mainColors[props.color].base};
  }

  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;

export default React.memo(Box);
