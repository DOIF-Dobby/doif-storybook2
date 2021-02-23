import styled, { css } from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface StyledSideMenuProps {
  color: DoifColorType;
}

/** SpreadMenu 컴포넌트의 스타일 */
export const StyledSpreadMenu = styled.div<StyledSideMenuProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 15rem;

  background-color: ${(props) => props.theme.mainColors[props.color].base};

  /** 제목 */
  div.title-container {
    display: flex;
    position: relative;
    justify-content: space-around;
    padding: 1rem;
    padding-top: 2rem;
    width: 100%;

    a.big-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;

      img {
        width: 100%;
      }
    }
  }

  /** 검색창 */
  div.search-container {
    padding: 1rem;
  }

  /** 카테고리-메뉴 컨테이너 */
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

    /** 자식 카테고리-메뉴들 */
    div.children-items {
      /* position: relative;

      animation-name: ani;
      animation-duration: 1s;

      @keyframes ani {
        from {
          max-height: 0;
          opacity: 0;
        }
        to {
          max-height: 800px;
          opacity: 1;
        }
      } */
    }

    /** 카테고리 - 메뉴 둘 다 */
    a.category,
    a.menu {
      display: flex;
      height: 2.5rem;
      cursor: pointer;
      color: ${(props) => props.theme.mainColors[props.color].light};
      text-decoration: none;

      span.menu-name {
        font-size: 0.8rem;
      }

      svg {
        fill: ${(props) => props.theme.mainColors[props.color].light};
      }

      &:hover {
        background-color: ${(props) =>
          props.theme.mainColors[props.color].dark};
      }
    }

    /** 카테고리 */
    a.category {
      > div:first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 15%;
      }

      > div:nth-of-type(2) {
        display: flex;
        align-items: center;
        flex-basis: 70%;
      }

      > div:last-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 15%;
      }
    }

    /** 메뉴 */
    a.menu {
      > div:first-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 15%;
      }

      > div:last-of-type {
        display: flex;
        align-items: center;
        flex-basis: 80%;
      }
    }
  }
`;