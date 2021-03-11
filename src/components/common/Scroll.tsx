import React from 'react';
import CustomScroll, { CustomScrollProps } from 'react-custom-scroll';
import 'react-custom-scroll/dist/customScroll.css';
import styled from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface ScrollProps extends CustomScrollProps {
  children: React.ReactNode;
  color: DoifColorType;
}

const Scroll = ({ children, color, ...props }: ScrollProps) => {
  return (
    <StyledScroll color={color}>
      <CustomScroll {...props}>{children}</CustomScroll>
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
  .rcs-custom-scroll {
    .rcs-custom-scrollbar {
      .rcs-inner-handle {
        background-color: ${(props) =>
          props.theme.mainColors[props.color].base}70;
      }
    }

    .rcs-inner-container {
      overflow-x: auto;

      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      ::-webkit-scrollbar-track {
        background-color: transparent;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: ${(props) =>
          props.theme.mainColors[props.color].base}70;
      }

      ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
      }
    }
  }
`;

export default React.memo(Scroll);
