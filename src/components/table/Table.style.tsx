import styled from 'styled-components';

interface StyledTableProps {
  height: string;
  totalWidth: string;
}

export const StyledTable = styled.div<StyledTableProps>`
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

    span {
      font-weight: 600;
    }
  }

  div.table-container {
    border: 1px solid ${(props) => props.theme.tableColors.border};

    table {
      width: max-content;
      table-layout: fixed;
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
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: middle;
            /* display: inline-block; */

            height: 2rem;
            line-height: 2rem;
            padding-left: 3px;
            padding-right: 3px;
            border-bottom: 1px solid
              ${(props) => props.theme.tableColors.border};

            .resizer {
              display: inline-block;
              width: 10px;
              height: 100%;
              position: absolute;
              right: 0;
              top: 0;
              transform: translateX(50%);
              z-index: 1;
              ${'' /* prevents from scrolling while dragging on touch devices */}
              touch-action:none;

              &.isResizing {
              }
            }
          }

          th + th {
            border-left: 1px solid ${(props) => props.theme.tableColors.border};
          }

          th:last-of-type {
            width: ${(props) => props.totalWidth};
            border-right: 1px solid ${(props) => props.theme.tableColors.border};
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
            user-select: text;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: middle;
            /* display: inline-block; */

            height: 1.5rem;
            line-height: 1.5rem;
            padding-left: 3px;
            padding-right: 3px;
          }

          td + td {
            border-left: 1px solid ${(props) => props.theme.tableColors.border};
          }

          td:last-of-type {
            border-right: 1px solid ${(props) => props.theme.tableColors.border};
          }
        }

        tr + tr {
          border-top: 1px solid ${(props) => props.theme.tableColors.border};
        }
        tr:last-of-type {
          border-bottom: 1px solid ${(props) => props.theme.tableColors.border};
        }
      }
    }
  }
`;
