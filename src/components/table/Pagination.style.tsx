import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.tableColors.paginationBackground};
  border: 1px solid ${(props) => props.theme.tableColors.border};
  border-bottom-left-radius: ${(props) => props.theme.variants.borderRadius};
  border-bottom-right-radius: ${(props) => props.theme.variants.borderRadius};
  border-top: none;
  padding: 0.5rem;

  & > div.page-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
