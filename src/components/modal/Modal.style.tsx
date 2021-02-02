import styled, { css } from 'styled-components';

interface StyledModalProps {
  zIndex: number;
}

export const StyledModal = styled.div<StyledModalProps>`
  & {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${(props) => props.zIndex};
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      box-sizing: border-box;
      border-radius: ${(props) => props.theme.variants.borderRadius};
      background-color: ${(props) => props.theme.subColors.componentBackground};
      box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
      padding: 1.5rem 1rem 1.5rem 1rem;

      & div.title {
        padding-bottom: 1rem;
        border-bottom: 1px solid ${(props) => props.theme.subColors.disabled};
      }
    }
  }
`;
