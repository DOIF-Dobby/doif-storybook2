import styled from 'styled-components';

interface StyledTableProps {
  height: string;
}

export const StyledTable = styled.div<StyledTableProps>`
  div.table-container {
    border: 1px solid ${(props) => props.theme.tableColors.border};

    /** 테이블 공통 */
    table {
      width: max-content;
      user-select: text;
    }

    /** thead 테이블 */
    div.thead-container {
      overflow: hidden;
      user-select: none;

      table {
        tr {
          th {
            display: inline-block;
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
          }

          th + th {
            border-left: 1px solid ${(props) => props.theme.tableColors.border};
          }

          th:last-of-type {
            border-right: 1px solid ${(props) =>
              props.theme.tableColors.border};
          }
        }
      }
    }

    /** tbody 테이블 */
    div.tbody-container {
      overflow: auto;
      user-select: none;
      height: ${(props) => props.height};

      /* ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      ::-webkit-scrollbar-track {
        background-color: transparent;
        border: 1px solid ${(props) => props.theme.tableColors.border};
        padding: 1px;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: #fab;
      }

      ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
      } */

      table {
        tr {
          td {
            display: inline-block;
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
            border-right: 1px solid ${(props) =>
              props.theme.tableColors.border};
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
