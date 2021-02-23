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

  background-color: ${(props) =>
    props.theme.sideMenuColors[props.color].depth1};

  /** 제목 */
  div.title-container {
    display: flex;
    position: relative;
    justify-content: space-around;
    padding: 2rem 1rem 2rem;
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

  /** 카테고리-메뉴 컨테이너 */
  div.menu-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: ${(props) => props.theme.sideMenuColors[props.color].text};
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: ${(props) =>
        props.theme.sideMenuColors[props.color].depth4};
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
      color: ${(props) => props.theme.sideMenuColors[props.color].text};
      text-decoration: none;

      span.menu-name {
        font-size: 0.8rem;
      }

      svg {
        fill: ${(props) => props.theme.sideMenuColors[props.color].text};
      }

      &:hover {
        border-left: 5px solid
          ${(props) => props.theme.sideMenuColors[props.color].borderLeft};
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

        transition: transform 0.15s linear;

        &.open {
          transform: rotate(-180deg);
        }

        &.close {
          transform: rotate(0);
        }
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

      &.selected {
        border-left: 5px solid
          ${(props) => props.theme.sideMenuColors[props.color].selected};
      }
    }
  }
`;

interface ChildrenItemsProps {
  itemCount: number;
  color: DoifColorType | undefined;
  backgroundColor: 'depth1' | 'depth2' | 'depth3' | 'depth4';
}

export const ChlidrenItems = styled.ul<ChildrenItemsProps>`
  transition: ease 0.15s;
  background-color: ${(props) =>
    props.theme.sideMenuColors[props.color ? props.color : 'primary'][
      props.backgroundColor
    ]};

  &.open {
    max-height: calc(2.5rem * ${(props) => props.itemCount});
  }

  &.close {
    max-height: 0;
  }
`;
