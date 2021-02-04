import styled, { css } from 'styled-components';

interface StyledLoadingProps {
  zIndex: number;
}

export const StyledLoadingContainer = styled.div<StyledLoadingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: ${(props) => props.zIndex};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledLoading = styled.div<StyledLoadingProps>`
  & {
    z-index: ${(props) => props.zIndex};
    width: 40px;
    height: 40px;
    margin: 100px auto;

    & > div {
      width: 33%;
      height: 33%;
      background-color: ${(props) => props.theme.subColors.content};
      float: left;
      z-index: ${(props) => props.zIndex};
      animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
    }

    & > div:nth-of-type(1) {
      animation-delay: -0.2s;
    }
    & > div:nth-of-type(2) {
      animation-delay: -0.3s;
    }
    & > div:nth-of-type(3) {
      animation-delay: -0.4s;
    }
    & > div:nth-of-type(4) {
      animation-delay: -0.1s;
    }
    & > div:nth-of-type(5) {
      animation-delay: -0.2s;
    }
    & > div:nth-of-type(6) {
      animation-delay: -0.3s;
    }
    & > div:nth-of-type(7) {
      animation-delay: -0s;
    }
    & > div:nth-of-type(8) {
      animation-delay: -0.1s;
    }
    & > div:nth-of-type(9) {
      animation-delay: -0.2s;
    }

    @keyframes sk-cubeGridScaleDelay {
      0%,
      70%,
      100% {
        -webkit-transform: scale3D(1, 1, 1);
        transform: scale3D(1, 1, 1);
      }
      35% {
        -webkit-transform: scale3D(0, 0, 1);
        transform: scale3D(0, 0, 1);
      }
    }
  }
`;
