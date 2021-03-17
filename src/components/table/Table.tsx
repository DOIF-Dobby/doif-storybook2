import React, {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {
  Column,
  PluginHook,
  Row,
  usePagination,
  useResizeColumns,
  useRowSelect,
  useTable,
  useSortBy,
  useFilters,
} from 'react-table';
import Scroll from '../common/Scroll';
import useMultiRowSelect from './hooks/useMultiRowSelect';
import Pagination from './Pagination';
import { StyledTable } from './Table.style';
import { TableModelProps } from './table.model';
import Icon from '../icon/Icon';
import DefaultFilter from './filter/DefaultFilter';
import { fuzzyTextFilter } from './filter/fuzzyFilter';
import { DoifDataProps } from '../../props/DoifCommonProps';

interface TableProps {
  /** Table Data 배열 */
  data: Object[];
  /** Table 모델 배열 */
  model: TableModelProps[];
  /** caption을 설정합니다. */
  caption: string;
  /** `Table`컴포넌트의 높이를 설정합니다. */
  height: string;
  /** `Button` 배열입니다. */
  buttons?: React.ReactNode[];
  /** multi select 여부입니다. */
  enableMultiSelectRow: boolean;
  /** 컬럼 sorting 여부입니다. */
  disableSortBy: boolean;
  /** 필터링 헤더 여부입니다. */
  disableFilters: boolean;
  /** 페이지 사이즈를 설정합니다. */
  initPageSize: number;
  /** 페이지 시작 위치를 설정합니다. */
  initPageIndex: number;
  /** 페이지 사이즈 배열입니다. */
  pageSizeArray: DoifDataProps[];
  /** row를 선택했을 때 실행되는 콜백함수입니다. */
  onSelectRow?: (id: string, rowValue: Object) => void;
  /** mulit row를 선택했을 때 실행되는 콜백함수입니다. */
  onMultiSelectRow?: (rowValues: Object[]) => void;
}

const filterTypes = {
  fuzzyText: fuzzyTextFilter,
};

/**
 * `Table` 컴포넌트는 기존의 `JqGrid`와 같은 컴포넌트입니다. 자세한 내용은 https://react-table.tanstack.com/ 이곳을 참조하세요.
 */
const Table = ({
  model,
  data,
  caption,
  height,
  buttons,
  enableMultiSelectRow,
  disableSortBy,
  disableFilters,
  initPageSize,
  initPageIndex,
  pageSizeArray,
  onSelectRow,
  onMultiSelectRow,
}: TableProps) => {
  const initColumns: Column<Object>[] = useMemo(() => getColumns(model), [
    model,
  ]);

  /** react-table hooks */
  const hooks: PluginHook<Object>[] = [
    useFilters,
    useSortBy,
    usePagination,
    useResizeColumns,
    useRowSelect,
  ];

  /** enableMultiSelectRow가 true라면 useMultiRowSelect 추가 */
  enableMultiSelectRow && hooks.push(useMultiRowSelect);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    selectedFlatRows,
    footerGroups,
    rows,
    page,
    columns,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    totalColumnsWidth,
    toggleAllRowsSelected,
    allColumns,
    visibleColumns,
    state: { pageIndex, pageSize, selectedRowIds, columnResizing },
  } = useTable(
    {
      columns: initColumns,
      data,
      filterTypes,
      initialState: { pageIndex: initPageIndex, pageSize: initPageSize },
      disableSortBy,
      disableFilters,
    },
    ...hooks,
  );

  console.log(initColumns);

  console.log(columns);
  console.log(headerGroups);

  console.log(allColumns);
  console.log(visibleColumns);

  console.log(columnResizing);

  /** mulit row Select 시 enableMultiSelectRow가 ture면 콜백실행 */
  useEffect(() => {
    if (enableMultiSelectRow && onMultiSelectRow) {
      onMultiSelectRow(
        selectedFlatRows.map((row) => {
          return { _id: row.id, ...row.original };
        }),
      );
    }
  }, [selectedFlatRows]);

  /** thead 스크롤을 움직이기 위한 ref */
  const theadRef: RefObject<HTMLDivElement> = useRef(null);

  /** tbody 스크롤시 thead도 스크롤 되게끔 하는 함수 */
  const onScroll = useCallback((e) => {
    theadRef.current?.scrollTo({ left: e.target.scrollLeft });
  }, []);

  /** row 선택했을 때 실행되는 함수 */
  const handleSelectRow = useCallback(
    (row: Row) => {
      if (!enableMultiSelectRow) {
        toggleAllRowsSelected(false);
      }
      row.toggleRowSelected();

      if (onSelectRow) {
        onSelectRow(row.id, row.original);
      }
    },
    [onSelectRow, enableMultiSelectRow],
  );

  return (
    <StyledTable height={height} totalWidth={totalColumnsWidth + 'px'}>
      <div className="caption-container">
        <span>{caption}</span>
      </div>
      {buttons && (
        <div className="button-container">
          {buttons.map((button, i) => (
            <div key={i}>{button}</div>
          ))}
        </div>
      )}
      <div className="table-container">
        <div className="thead-container" ref={theadRef}>
          <table {...getTableProps()} summary={caption}>
            <colgroup>
              {allColumns.map((column) => {
                return (
                  <col
                    {...column.getHeaderProps()}
                    style={{
                      width: column.totalWidth,
                    }}
                  />
                );
              })}
            </colgroup>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    return (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps(),
                        )}
                        style={{
                          cursor: disableSortBy ? 'auto' : 'pointer',
                        }}
                        title={column.id}
                      >
                        <span>{column.render('Header')}</span>
                        <span className="sort-icon-container">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <Icon icon="downArrow" size="small" />
                            ) : (
                              <Icon icon="topArrow" size="small" />
                            )
                          ) : (
                            ''
                          )}
                        </span>
                        {column.id !== '_multi-row-select' && (
                          <div
                            {...column.getResizerProps()}
                            className={`resizer ${
                              column.isResizing ? 'isResizing' : ''
                            }`}
                          />
                        )}
                      </th>
                    );
                  })}
                  <th rowSpan={3}></th>
                </tr>
              ))}
              {!disableFilters && (
                <tr>
                  {allColumns.map((column) => {
                    console.log(column);
                    return (
                      <th
                        {...column.getHeaderProps()}
                        style={{
                          width: column.totalWidth,
                        }}
                      >
                        <div>
                          {column.canFilter ? column.render('Filter') : null}
                        </div>
                        {column.id !== '_multi-row-select' && (
                          <div
                            {...column.getResizerProps()}
                            className={`resizer ${
                              column.isResizing ? 'isResizing' : ''
                            }`}
                          />
                        )}
                      </th>
                    );
                  })}
                  {/* <th rowSpan={2}></th> */}
                </tr>
              )}
            </thead>
          </table>
        </div>
        <Scroll onScroll={onScroll}>
          <div className="tbody-container">
            <table {...getTableProps()} summary={caption}>
              <tbody {...getTableBodyProps()}>
                {page.map((row: Row, i) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      onClick={() => handleSelectRow(row)}
                      className={row.isSelected ? 'selected' : ''}
                    >
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              width: cell.column.width,
                              textAlign: cell.column.align,
                            }}
                          >
                            {cell.column.formatter
                              ? cell.column.formatter(cell.render('Cell'))
                              : cell.render('Cell')}
                          </td>
                        );
                      })}
                      <td></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Scroll>
      </div>

      <Pagination
        rowNumber={rows.length}
        pageNumber={page.length}
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
        pageSizeArray={pageSizeArray}
      />

      <pre>
        <code>{JSON.stringify(columnResizing, null, 2)}</code>
      </pre>
    </StyledTable>
  );
};

Table.defaultProps = {
  height: '400px',
  enableMultiSelectRow: false,
  disableSortBy: false,
  disableFilters: false,
  initPageSize: 100,
  initPageIndex: 0,
  pageSizeArray: [
    { code: '10', name: '10' },
    { code: '20', name: '20' },
    { code: '50', name: '50' },
    { code: '100', name: '100' },
    { code: '200', name: '200' },
    { code: '1000', name: '1000' },
  ],
};

export default React.memo(Table);

function getColumns(model: TableModelProps[]): Column<Object>[] {
  return model.map((m) => {
    if (m.groupHeader) {
      const columns: Column<Object>[] = m.columns?.map((m) => {
        return getColumn(m);
      }) as Column<Object>[];

      return {
        Header: m.groupHeader,
        columns: columns,
      };
    }

    return getColumn(m);
  }) as Column<Object>[];
}

function getColumn(m: TableModelProps): Column<Object> {
  return {
    Header: m.label,
    accessor: m.name,
    width: m.width,
    align: m.align,
    formatter: m.formatter,
    Filter: DefaultFilter,
  } as Column<Object>;
}
