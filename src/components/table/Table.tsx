import React, { RefObject, useCallback, useMemo, useRef } from 'react';
import { StyledTable } from './Table.style';
import {
  Column,
  useTable,
  usePagination,
  useBlockLayout,
  useResizeColumns,
  useRowSelect,
} from 'react-table';
import Pagination from './Pagination';
import Scroll from '../common/Scroll';

interface TableProps {
  /** Table Data 배열 */
  data: Object[];
  /** Table 모델 배열 */
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
    selectedFlatRows,
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
    totalColumnsWidth,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    usePagination,
    useResizeColumns,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    },
  );

  const theadRef: RefObject<HTMLDivElement> = useRef(null);

  console.log(selectedRowIds);

  const onScroll = useCallback((e) => {
    theadRef.current?.scrollTo({ left: e.target.scrollLeft });
  }, []);

  return (
    <StyledTable height={height} totalWidth={totalColumnsWidth + 'px'}>
      <div className="caption-container">
        <span>{caption}</span>
      </div>
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
                      <div
                        {...column.getResizerProps()}
                        className={`resizer ${
                          column.isResizing ? 'isResizing' : ''
                        }`}
                      />
                    </th>
                  ))}
                  <th></th>
                </tr>
              ))}
            </thead>
          </table>
        </div>
        <Scroll onScroll={onScroll}>
          <div className="tbody-container">
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
        </Scroll>
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

      {/* <p>Selected Rows: {Object.keys(selectedRowIds).length}</p> */}
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              'selectedFlatRows[].original': selectedFlatRows.map(
                (d) => d.original,
              ),
            },
            null,
            2,
          )}
        </code>
      </pre> */}
    </StyledTable>
  );
};

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  },
);

Table.defaultProps = {
  height: '400px',
};

export default React.memo(Table);
