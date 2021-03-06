import React from 'react';
import { DoifDataProps } from '../../props/DoifCommonProps';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import Input from '../input/Input';
import Select from '../select/Select';
import { StyledPagination } from './Pagination.style';

interface PaginationProps {
  rowNumber: number;
  pageNumber: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageOptions: number[];
  pageCount: number;
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  nextPage: () => void;
  previousPage: () => void;
  setPageSize: (pageSize: number) => void;
  pageIndex: number;
  pageSize: number;
  pageSizeArray: DoifDataProps[];
}

const Pagination = ({
  rowNumber,
  pageNumber,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
  pageIndex,
  pageSize,
  pageSizeArray,
}: PaginationProps) => {
  const buttonStyle = {
    borderRadius: '1rem',
    width: '2rem',
    height: '2rem',
  };

  return (
    <StyledPagination>
      <div></div>
      <div className="page-container">
        <Button
          iconOnly
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          size="small"
          variant="ghost"
          style={buttonStyle}
        >
          <Icon
            icon="rightDoubleArrow"
            style={{ transform: 'rotate(180deg)' }}
          />
        </Button>
        <Button
          iconOnly
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          size="small"
          variant="ghost"
          style={buttonStyle}
        >
          <Icon icon="leftArrow" />
        </Button>
        <div className="count-container">
          <div>
            <Input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
            />
          </div>
          <div>/</div>
          <div>{pageOptions.length}</div>
        </div>
        <Button
          iconOnly
          onClick={() => nextPage()}
          disabled={!canNextPage}
          size="small"
          variant="ghost"
          style={buttonStyle}
        >
          <Icon icon="rightArrow" />
        </Button>
        <Button
          iconOnly
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          size="small"
          variant="ghost"
          style={buttonStyle}
        >
          <Icon icon="rightDoubleArrow" />
        </Button>
        <Select
          value={String(pageSize)}
          width="100px"
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          data={pageSizeArray}
        ></Select>
      </div>
      <div className="count-container">
        {pageIndex * pageSize + (rowNumber > 0 ? 1 : 0)} -{' '}
        {pageIndex * pageSize + pageNumber} / {rowNumber}
      </div>
    </StyledPagination>
  );
};

export default React.memo(Pagination);
