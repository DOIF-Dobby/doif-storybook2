import styled, { css } from 'styled-components';

interface StyledDialogProps {
  zIndex: number;
  type?: 'success' | 'warning' | 'error' | 'info';
}

export const StyledDialog = styled.div<StyledDialogProps>`
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
      width: 25rem;
      background-color: ${(props) => props.theme.subColors.boxBackground};
      box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
      padding: 1.5rem 1rem 1.5rem 1rem;

      & div.title {
        padding-bottom: 1rem;
        border-bottom: 1px solid ${(props) => props.theme.subColors.disabled};
      }

      & div.content {
        display: flex;
        flex-direction: column;

        & > div + div {
          margin-top: 2rem;
        }

        & > div.icon-container {
          display: flex;
          justify-content: center;
          align-items: center;

          & svg {
            width: 4rem;
            fill: ${(props) =>
              props.type ? props.theme.subColors[props.type] : ''};
          }
        }

        & > div.children-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button.confirm-button {
          background-color: ${(props) =>
            props.type ? props.theme.subColors[props.type] : ''};
        }
      }
    }
  }
`;
