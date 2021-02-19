import styled, { css } from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface StyledSideMenuProps {
  color: DoifColorType;
}

/** SideMenu 컴포넌트의 스타일 */
export const StyledSideMenu = styled.div<StyledSideMenuProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 20%;

  background-color: ${(props) => props.theme.mainColors[props.color].base};

  /** 제목 */
  div.title-container {
    display: flex;
    position: relative;
    justify-content: space-around;
    padding: 1rem;
    width: 100%;

    div.big-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      img {
        /* height: 2rem; */
        width: 100%;
      }
    }

    div.fold {
      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        fill: ${(props) => props.theme.mainColors[props.color].dark};
      }
    }
  }

  /** 검색창 */
  div.search-container {
    padding: 1rem;
  }

  /** 카테고리-메뉴 */
  div.menu-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: ${(props) => props.theme.mainColors[props.color].light};
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: ${(props) => props.theme.mainColors[props.color].light};
    }

    ::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }

    div.category,
    div.menu {
      display: flex;

      svg {
        fill: ${(props) => props.theme.mainColors[props.color].light};
      }
    }
  }
`;
