import React from 'react';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import Input from '../input/Input';
import Select from '../select/Select';
import { StyledPagination } from './Pagination.style';

interface PaginationProps {
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
}

const Pagination = ({
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
}: PaginationProps) => {
  const defaultPageSizes = [
    { code: '10', name: '10' },
    { code: '20', name: '20' },
  ];

  const buttonStyle = {
    borderRadius: '1rem',
    width: '2rem',
    height: '2rem',
  };

  return (
    <StyledPagination>
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
        <Input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
        />
        <div>/ {pageOptions.length}</div>
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
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          data={defaultPageSizes}
        ></Select>
      </div>
    </StyledPagination>
  );
};

export default React.memo(Pagination);
