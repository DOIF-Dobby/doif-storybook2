import styled from 'styled-components';

export const StyledTable = styled.div`
  > table {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid ${(props) => props.theme.tableColors.border};
    border-bottom-left-radius: ${(props) => props.theme.variants.borderRadius};
    border-bottom-right-radius: ${(props) => props.theme.variants.borderRadius};
    border-top: none;

    > caption {
      text-align: left;
      padding: 0.5rem;
      font-weight: 600;
      background-color: ${(props) => props.theme.tableColors.captionBackground};
      border: 1px solid ${(props) => props.theme.tableColors.border};
      border-top-left-radius: ${(props) => props.theme.variants.borderRadius};
      border-top-right-radius: ${(props) => props.theme.variants.borderRadius};
    }

    > thead {
      > tr {
        background-color: ${(props) =>
          props.theme.tableColors.headerBackground};

        > th {
          padding: 0.2rem;
          border-bottom: 1px solid ${(props) => props.theme.tableColors.border};
        }

        > th + th {
          border-left: 1px solid ${(props) => props.theme.tableColors.border};
        }
      }
    }

    > tbody {
      > tr {
        background-color: ${(props) =>
          props.theme.tableColors.columnBackground};

        > td {
          padding: 0.1rem;
        }

        > td + td {
          border-left: 1px solid ${(props) => props.theme.tableColors.border};
        }
      }

      > tr + tr {
        border-top: 1px solid ${(props) => props.theme.tableColors.border};
      }
    }
  }
`;
