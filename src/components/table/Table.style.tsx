import styled from 'styled-components';

interface StyledTableProps {
  height: string;
  totalWidth: string;
}

export const StyledTable = styled.div<StyledTableProps>`

  div.container {
    position: relative;
    height: 100%;
  }

  div.loading-container {
    height: 100%;
    width: 100%;
  }

  /** caption */
  div.caption-container {
    border: 1px solid ${(props) => props.theme.tableColors.border};
    border-bottom: none;
    height: 2rem;
    line-height: 2rem;
    padding-left: 1rem;
    background-color: ${(props) => props.theme.tableColors.captionBackground};
    border-top-left-radius: ${(props) => props.theme.variants.borderRadius};
    border-top-right-radius: ${(props) => props.theme.variants.borderRadius};
    color: ${(props) => props.theme.tableColors.captionText};
    background-color: ${(props) => props.theme.tableColors.captionBackground};
    text-align: left;

    span {
      font-weight: 600;
    }
  }

  /** buttons */
  div.button-container {
    display: flex;
    border: 1px solid ${(props) => props.theme.tableColors.border};
    border-bottom: none;
    padding: 1px;

    button {
      font-size: 0.875rem;
    }
  }

  /** thead, tbody */
  div.table-container {
    border: 1px solid ${(props) => props.theme.tableColors.border};

    table {
      width: ${(props) => props.totalWidth};
      table-layout: fixed;
      position: relative;
    }

    /** thead 테이블 */
    div.thead-container {
      overflow: hidden;
      user-select: none;
      table {
        tr {
          color: ${(props) => props.theme.tableColors.headerText};
          background-color: ${(props) =>
            props.theme.tableColors.headerBackground};

          th {
            user-select: text;
            position: relative;
            vertical-align: middle;
            /* display: inline-block; */

            font-size: 0.875rem;
            height: 2rem;
            line-height: 1.875rem;
            padding-left: 3px;
            padding-right: 3px;
            border-bottom: 1px solid
              ${(props) => props.theme.tableColors.border};

            > div {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              position: relative;
            }

            .sort-icon-container {
              display: inline-block;
              padding-left: 5px;
            }

            .resizer {
              display: inline-block;
              width: 10px;
              height: 100%;
              position: absolute;
              right: 0;
              top: 0;
              transform: translateX(50%);
              z-index: 1;
              ${
                '' /* prevents from scrolling while dragging on touch devices */
              }
              touch-action:none;

              &.isResizing {
              }
            }
          }

          th + th {
            border-left: 1px solid ${(props) => props.theme.tableColors.border};
          }

          th:last-of-type {
            width: 100000px;
            /* border-right: 1px solid ${(props) =>
              props.theme.tableColors.border}; */
          }
        }
      }
    }

    /** tbody 테이블 */
    div.tbody-container {
      height: ${(props) => props.height};
      user-select: none;
      background-color: ${(props) => props.theme.tableColors.tableBackground};

      table {
        tr {
          color: ${(props) => props.theme.tableColors.rowText1};
          background-color: ${(props) =>
            props.theme.tableColors.rowBackground1};

          &:nth-of-type(2n) {
            color: ${(props) => props.theme.tableColors.rowText2};
            background-color: ${(props) =>
              props.theme.tableColors.rowBackground2};
          }

          &:hover {
            background-color: ${(props) => props.theme.tableColors.hoverRow};
          }

          &.selected {
            background-color: ${(props) => props.theme.tableColors.selectedRow};
          }

          td {
            /* display: inline-block; */
            position: relative;
            user-select: text;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: middle;

            font-size: 0.875rem;
            height: 1.5rem;
            line-height: 1.375rem;
            padding-left: 3px;
            padding-right: 3px;

          }

          td + td {
            border-left: 1px solid ${(props) => props.theme.tableColors.border};
          }

          td:last-of-type {
            /* border-right: 1px solid ${(props) =>
              props.theme.tableColors.border}; */
            background-color: ${(props) =>
              props.theme.tableColors.tableBackground};
            border-top: none;
          }
        }

        tr + tr {
          td {
            border-top: 1px solid ${(props) => props.theme.tableColors.border};
          }
        }
        tr:last-of-type {
          td {
            border-bottom: 1px solid ${(props) =>
              props.theme.tableColors.border};

            &:last-of-type {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
`;
