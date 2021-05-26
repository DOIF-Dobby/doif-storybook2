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
  loading: boolean;
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
  loading,
}: PaginationProps) => {
  const buttonStyle = {
    borderRadius: '0.75rem',
    width: '1.5rem',
    height: '1.5rem',
  };

  return (
    <StyledPagination>
      <div></div>
      <div className="page-container">
        <Button
          iconOnly
          onClick={() => gotoPage(0)}
          disabled={loading || !canPreviousPage}
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
          disabled={loading || !canPreviousPage}
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
              disabled={loading}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const page = e.currentTarget.value
                    ? Number(e.currentTarget.value) - 1
                    : 0;
                  gotoPage(page);
                }
              }}
            />
          </div>
          <div>/</div>
          <div>{pageOptions.length}</div>
        </div>
        <Button
          iconOnly
          onClick={() => nextPage()}
          disabled={loading || !canNextPage}
          size="small"
          variant="ghost"
          style={buttonStyle}
        >
          <Icon icon="rightArrow" />
        </Button>
        <Button
          iconOnly
          onClick={() => gotoPage(pageCount - 1)}
          disabled={loading || !canNextPage}
          size="small"
          variant="ghost"
          style={buttonStyle}
        >
          <Icon icon="rightDoubleArrow" />
        </Button>
        <Select
          value={String(pageSize)}
          width="80px"
          disabled={loading}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          data={pageSizeArray}
        />
      </div>
      <div className="count-container">
        {pageIndex * pageSize + (rowNumber > 0 ? 1 : 0)} -{' '}
        {pageIndex * pageSize + pageNumber} / {rowNumber}
      </div>
    </StyledPagination>
  );
};

export default React.memo(Pagination);
