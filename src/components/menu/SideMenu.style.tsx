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
    /* display: flex; */
    /* flex-direction: column; */
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

    ul {
      list-style: none;

      > li {
        display: list-item;
        user-select: none;
        overflow: hidden;
      }
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

interface ChildrenItemsProps {
  itemCount: number;
}

export const ChlidrenItems = styled.ul<ChildrenItemsProps>`
  transition: ease 0.2s;

  &.open {
    max-height: calc(2.5rem * ${(props) => props.itemCount});
  }

  &.close {
    max-height: 0;
  }
`;
