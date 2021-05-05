import styled, { css } from 'styled-components';

export const StyledPageHeader = styled.div`
  display: flex;
  flex-direction: column;

  div.menu-container {
    display: flex;
    justify-content: space-between;

    div.menu-name {
      font-size: 1.5rem;
      font-weight: 600;
      padding-left: 10px;
      color: ${(props) => props.theme.pageHeaderColors.menuName};
    }

    div.menu-list {
      display: flex;
      padding-top: 10px;

      div.menu-list-item {
        display: flex;
        align-items: center;

        span.menu-list-item-name {
          color: ${(props) => props.theme.pageHeaderColors.menuListItemName};
          font-weight: 550;
          padding-right: 10px;
        }

        svg {
          fill: ${(props) => props.theme.pageHeaderColors.menuListItemName};
        }
      }

      div.menu-list-item + div.menu-list-item {
        padding-left: 10px;
      }
    }
  }

  div.bottom-line {
    height: 2px;
    margin-top: 15px;
    background: ${(props) =>
      `linear-gradient(to right, ${props.theme.pageHeaderColors.bottomLine},${props.theme.pageHeaderColors.menuListItemName})`};
  }
`;
