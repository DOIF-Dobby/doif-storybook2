import styled, { css } from 'styled-components';

interface StyledOverlayProps {
  zIndex: number;
}

export const StyledOverlay = styled.div<StyledOverlayProps>`
  & {
    z-index: ${(props) => props.zIndex};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
