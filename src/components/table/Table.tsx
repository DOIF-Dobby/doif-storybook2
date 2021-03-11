import React, { RefObject, useCallback, useMemo, useRef } from 'react';
import { StyledTable } from './Table.style';
import { Column, useTable, usePagination } from 'react-table';
import Pagination from './Pagination';

interface TableProps {
  /** Table Header 배열 */
  // columns: Column<Object>[];
  /** Table Data 배열 */
  data: Object[];
  /** Table 모델 */
  model: TableModelProps[];
  /** caption을 설정합니다. */
  caption: string;
  /** `Table`컴포넌트의 높이를 설정합니다. */
  height: string;
}

export interface TableModelProps {
  label: string;
  name: string;
  width: number;
  align: 'left' | 'center' | 'right';
}

/**
 * `Table` 컴포넌트는 기존의 `JqGrid`와 같은 컴포넌트입니다. 자세한 내용은 https://react-table.tanstack.com/ 이곳을 참조하세요.
 */
const Table = ({ model, data, caption, height }: TableProps) => {
  const columns: Column<Object>[] = useMemo(() => {
    return model.map((m) => ({
      Header: m.label,
      accessor: m.name,
      width: m.width,
      align: m.align,
    })) as Column<Object>[];
  }, [model]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    footerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    usePagination,
  );

  const theadRef: RefObject<HTMLDivElement> = useRef(null);

  const onScroll = useCallback((e) => {
    theadRef.current?.scrollTo({ left: e.target.scrollLeft });
  }, []);

  return (
    <StyledTable height={height}>
      <div className="table-container">
        <div className="thead-container" ref={theadRef}>
          <table {...getTableProps()} summary={caption}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        width: column.width,
                      }}
                    >
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          </table>
        </div>
        <div className="tbody-container" onScroll={onScroll}>
          <table {...getTableProps()} summary={caption}>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            width: cell.column.width,
                            textAlign: cell.column.align,
                          }}
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />
    </StyledTable>
  );
};

Table.defaultProps = {
  height: '400px',
};

export default React.memo(Table);
