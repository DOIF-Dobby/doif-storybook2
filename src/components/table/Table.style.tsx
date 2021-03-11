import styled from 'styled-components';

interface StyledTableProps {
  height: string;
  totalWidth: string;
}

export const StyledTable = styled.div<StyledTableProps>`
  color: ${(props) => props.theme.tableColors.text};

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
          th {
            position: relative;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: middle;

            height: 2rem;
            line-height: 2rem;
            padding-left: 3px;
            padding-right: 3px;
            border-bottom: 1px solid
              ${(props) => props.theme.tableColors.border};
            background-color: ${(props) =>
              props.theme.tableColors.headerBackground};

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

      table {
        tr {
          td {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: middle;

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
