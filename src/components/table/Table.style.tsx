import styled from 'styled-components';

interface StyledTableProps {
  height: string;
}

export const StyledTable = styled.div<StyledTableProps>`
  max-height: ${(props) => props.height};
  height: ${(props) => props.height};
  position: relative;

  > caption {
    text-align: left;
    padding: 0.5rem;
    font-weight: 600;
    background-color: ${(props) => props.theme.tableColors.captionBackground};
    border-top-left-radius: ${(props) => props.theme.variants.borderRadius};
    border-top-right-radius: ${(props) => props.theme.variants.borderRadius};
    border: 1px solid ${(props) => props.theme.tableColors.border};
    width: 100%;
    position: absolute;
    z-index: 2;
  }

  > table {
    height: 100%;
    border-collapse: collapse;
    width: 100%;
    border: 1px solid ${(props) => props.theme.tableColors.border};
    display: flex;
    flex-direction: column;
    position: relative;

    > div.thead-tbody-container {
      padding-top: 2rem;

      > thead {
        > tr {
          background-color: ${(props) =>
            props.theme.tableColors.headerBackground};

          > th {
            padding: 0.2rem;
            border-bottom: 1px solid
              ${(props) => props.theme.tableColors.border};
            overflow: hidden;
            white-space: pre;

            &:last-of-type {
              border-right: 1px solid
                ${(props) => props.theme.tableColors.border};
            }
          }

          > th + th {
            border-left: 1px solid ${(props) => props.theme.tableColors.border};
          }
        }
      }

      > tbody {
        overflow: auto;
        height: 100%;

        > tr {
          background-color: ${(props) =>
            props.theme.tableColors.columnBackground};

          > td {
            font-size: 0.875rem;
            overflow: hidden;
            white-space: pre;
            height: 1.5rem;
            line-height: 1.5rem;
            padding-left: 0.2rem;
            padding-right: 0.2rem;

            &:last-of-type {
              border-right: 1px solid
                ${(props) => props.theme.tableColors.border};
            }
          }

          > td + td {
            border-left: 1px solid ${(props) => props.theme.tableColors.border};
          }
        }

        &:last-of-type {
          td {
            border-bottom: 1px solid
              ${(props) => props.theme.tableColors.border};
          }
        }

        > tr + tr {
          border-top: 1px solid ${(props) => props.theme.tableColors.border};
        }
      }
    }
  }
`;
