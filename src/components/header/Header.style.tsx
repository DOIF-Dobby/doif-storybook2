import styled, { css } from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface StyledHeaderProps {
  color: DoifColorType;
  left: string;
}

/** Header 컴포넌트의 스타일 */
export const StyledHeader = styled.div<StyledHeaderProps>`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: ${(props) => props.left};
  width: calc(100% - ${(props) => props.left});
  height: 3rem;
  background-color: ${(props) => props.theme.headerColors.background};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0.05);

  > div.left {
    display: flex;
    flex-basis: 50%;

    > div.menu-button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 5%;
      padding-left: 1rem;
    }

    > div.search {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 50%;
      padding-left: 1rem;
      position: relative;

      min-width: 200px;

      > div.search-field {
        top: 3rem;
        left: 1rem;
        width: calc(100% - 1rem);
        position: absolute;
        background: ${(props) => props.theme.headerColors.background};
        border-radius: 4px;
        box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
      }
    }
  }

  > div.right {
    display: flex;
    flex-basis: 50%;
    justify-content: flex-end;

    > div.profile {
      display: flex;
      align-items: center;
      padding-right: 1rem;
      cursor: pointer;
      position: relative;

      > div.profile-picture {
        width: 3.5rem;
        padding-left: 1rem;
        padding-right: 1rem;

        img {
          width: 100%;
        }
      }

      > div.profile-field {
        top: 3rem;
        left: 1rem;
        width: calc(100% - 1rem);
        position: absolute;
        background: ${(props) => props.theme.headerColors.background};
        border-radius: 4px;
        box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
      }
    }

    > div.setting {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 10%;
      padding-right: 1rem;

      > div.setting-field {
        top: 0;
        right: 0;
        width: 20rem;
        height: 100%;
        z-index: 1001;
        position: fixed;
        background: ${(props) => props.theme.headerColors.background};
        box-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.06);
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
    }
  }
`;
