import React from 'react';
import styled from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface ScrollProps {
  children: React.ReactNode;
  color: DoifColorType;
  onScroll?: (e: any) => void;
}

const Scroll = ({ children, color, onScroll, ...props }: ScrollProps) => {
  return (
    <StyledScroll color={color}>
      <div className="container" onScroll={onScroll}>
        {children}
      </div>
    </StyledScroll>
  );
};

Scroll.defaultProps = {
  color: 'primary',
};

interface StyledScrollProps {
  color: DoifColorType;
}

const StyledScroll = styled.div<StyledScrollProps>`
  & > div.container {
    overflow: auto;
  }
`;

export default React.memo(Scroll);
