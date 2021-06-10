import React, {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Column,
  PluginHook,
  Row,
  usePagination,
  useResizeColumns,
  // useRowSelect,
  useTable,
  useSortBy,
  useFilters,
  useExpanded,
  useRowState,
} from 'react-table';
//@ts-ignore
import { useRowSelect } from './hooks/useRowSelect.jsx';
import Scroll from '../common/Scroll';
import useMultiRowSelect from './hooks/useMultiRowSelect';
import Pagination from './Pagination';
import { StyledTable } from './Table.style';
import {
  TableFetchDataProps,
  TableGroupHeaderProps,
  TableModelProps,
} from './table.model';
import Icon from '../icon/Icon';
import DefaultFilter from './filter/DefaultFilter';
import { fuzzyTextFilter } from './filter/fuzzyFilter';
import { DoifDataProps } from '../../props/DoifCommonProps';
import useTreeRow from './hooks/useTreeRow';
import Loading from '../loading/Loading';

interface TableProps {
  /** Table Data 배열 */
  data: Object[];
  /** Table 모델 배열 */
  model: TableModelProps[];
  /** caption을 설정합니다. */
  caption: string;
  /** `Table`컴포넌트의 높이를 설정합니다. */
  height: string;
  /** `Table` 컴포넌트의 넓이를 설정합니다. */
  width: string;
  /** `Button` 배열입니다. */
  buttons?: React.ReactNode;
  /** multi select 여부입니다. */
  enableMultiSelectRow: boolean;
  /** tree 구조 테이블 여부입니다. */
  enableTreeTable: boolean;
  /** tree 구조 테이블 row exapnd 여부입니다. true면 펼쳐놓고 false면 접습니다. */
  treeTableRowExpanded: boolean;
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
  /** group header를 설정하기 위한 배열입니다. */
  groupHeaders?: TableGroupHeaderProps[];
  /** loading 여부입니다. */
  loading: boolean;
  /** server side pagination 여부입니다. */
  enableServerSidePagination: boolean;
  /** pageCount */
  pageCount: number;
  /** 데이터의 총 갯수를 나타냅니다. Server Side Pagination 사용 시 필요합니다. */
  totalCount?: number;
  /** server side pagination을 할 때 data를 불러오는 콜백함수 입니다. */
  onFetchData?: ({ pageSize, pageIndex }: TableFetchDataProps) => void;
  /** row를 선택했을 때 실행되는 콜백함수 입니다. */
  onSelectRow?: (id: string, rowValue: Object) => void;
  /** row를 더블클릭 했을 때 실행되는 콜백함수 입니다. */
  onDoubleClickRow?: (id: string, rowValue: Object) => void;
  /** mulit row를 선택했을 때 실행되는 콜백함수 입니다. */
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
  width,
  height,
  buttons,
  enableMultiSelectRow,
  enableTreeTable,
  treeTableRowExpanded,
  disableSortBy,
  disableFilters,
  initPageSize,
  initPageIndex,
  pageSizeArray,
  groupHeaders,
  loading,
  enableServerSidePagination,
  pageCount: controlledPageCount,
  totalCount,
  onFetchData,
  onSelectRow,
  onDoubleClickRow,
  onMultiSelectRow,
}: TableProps) => {
  /** groupHeaders가 있다면 해당 정보로 Grouping Column을 만들어 낸다. */
  const initColumns = useMemo(() => {
    const initModel: Column<Object>[] = getColumns(model);
    const groupingData = [];

    if (groupHeaders) {
      for (let i = 0; i < initModel.length; ) {
        const column = initModel[i];

        const matched = groupHeaders.find((groupHeader) => {
          return groupHeader.startColumn === column.accessor;
        });

        if (matched) {
          groupingData.push({
            Header: matched.label,
            columns: initModel.slice(i, i + matched.size),
          });
          i += matched.size;
        } else {
          i++;
          groupingData.push(column);
        }
      }
    }

    return groupingData.length > 0 ? groupingData : initModel;
  }, [model, groupHeaders]);

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
    visibleColumns,
    toggleAllRowsExpanded,
    state: { pageIndex, pageSize, selectedRowIds, columnResizing },
  } = useTable(
    {
      columns: initColumns,
      data,
      filterTypes,
      initialState: {
        pageIndex: initPageIndex,
        pageSize: initPageSize,
        selectedRowIds: (() => {
          const selectedRowIds: any = {};

          data.forEach((obj: any, index) => {
            if (obj.checked) {
              selectedRowIds[String(index)] = obj.checked;
            }
          });
          return selectedRowIds;
        })(),
      },
      manualPagination: enableServerSidePagination,
      pageCount: controlledPageCount,
      autoResetPage: false,
      disableSortBy,
      disableFilters,
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowState,
    useResizeColumns,
    useRowSelect,
    useTreeRow(enableTreeTable),
    useMultiRowSelect(enableMultiSelectRow),
  );

  /** tree table 처음에 row expand 설정 */
  useEffect(() => {
    if (enableTreeTable) {
      toggleAllRowsExpanded(treeTableRowExpanded);
    }
  }, [enableTreeTable, treeTableRowExpanded, data]);

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

  /** 서버사이드 페이징 할 때  */
  useEffect(() => {
    if (enableServerSidePagination && onFetchData) {
      onFetchData({ pageSize, pageIndex });
    }
  }, [onFetchData, pageIndex, pageSize, enableServerSidePagination]);

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

  /** row 더블 클릭했을 때 실행되는 함수 */
  const handleDoubleClickRow = useCallback(
    (row: Row) => {
      if (!enableMultiSelectRow) {
        toggleAllRowsSelected(false);
      }
      row.toggleRowSelected();

      if (onDoubleClickRow) {
        onDoubleClickRow(row.id, row.original);
      }
    },
    [onDoubleClickRow, enableMultiSelectRow],
  );

  return (
    <StyledTable
      width={width}
      height={height}
      totalWidth={totalColumnsWidth + 'px'}
    >
      <div className="total-container">
        {loading && (
          <div className="loading-container">
            <Loading position="absolute" />
          </div>
        )}
        <div className="caption-container">
          <span>{caption}</span>
        </div>
        {buttons && <div className="button-container">{buttons}</div>}
        <div className="table-container">
          <div className="thead-container" ref={theadRef}>
            <table {...getTableProps()} summary={caption}>
              <colgroup>
                {visibleColumns.map((column) => {
                  if (column.hidden) {
                    return null;
                  }

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
                {headerGroups.map((headerGroup, headerGroupIndex) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => {
                      /** 첫번째 headerGroup이 그룹핑 헤더라면 두번째 headerGroup에서 해당 column.placeholderOf.id와 같은 Column 객체를 찾아서 해당 객체를 렌더링한다.  */
                      const renderColumn =
                        (headerGroups[1] &&
                          headerGroups[1].headers.find(
                            (col) =>
                              column.placeholderOf &&
                              col.id === column.placeholderOf.id,
                          )) ||
                        column;

                      // 그리고 rowSpan을 구한다.
                      const rowSpan = column.placeholderOf ? 2 : 1;

                      // groupHeader가 있는 경우 headerGroupIndex === 1이 되는데, 해당 컬럼들을 렌더링할 때 parent 속성이 없다면 첫번째 row에서 rowSpan을 했으니깐 렌더링하면 안된다.
                      if (headerGroupIndex === 1) {
                        if (!renderColumn.parent) {
                          return null;
                        }
                      }

                      if (renderColumn.hidden) {
                        return null;
                      }

                      return (
                        <th
                          {...renderColumn.getHeaderProps()}
                          style={{
                            cursor: disableSortBy ? 'auto' : 'pointer',
                          }}
                          title={String(renderColumn.render('Header'))}
                          rowSpan={rowSpan}
                        >
                          <div
                            {...renderColumn.getSortByToggleProps()}
                            title={String(renderColumn.render('Header'))}
                          >
                            {renderColumn.render('Header')}
                            <span className="sort-icon-container">
                              {renderColumn.isSorted ? (
                                renderColumn.isSortedDesc ? (
                                  <Icon icon="downArrow" size="small" />
                                ) : (
                                  <Icon icon="topArrow" size="small" />
                                )
                              ) : (
                                ''
                              )}
                            </span>
                          </div>
                          {renderColumn.id !== '_multi-row-select' && (
                            <div
                              {...renderColumn.getResizerProps()}
                              className={`resizer ${
                                renderColumn.isResizing ? 'isResizing' : ''
                              }`}
                            />
                          )}
                        </th>
                      );
                    })}
                    <th rowSpan={1000}></th>
                  </tr>
                ))}
                {!disableFilters && (
                  <tr>
                    {visibleColumns.map((column) => {
                      if (column.hidden) {
                        return null;
                      }

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
            <div
              className="tbody-container"
              style={{ width: totalColumnsWidth + 'px' }}
            >
              <table {...getTableProps()} summary={caption}>
                <tbody {...getTableBodyProps()}>
                  {page.map((row: Row, i) => {
                    prepareRow(row);

                    return (
                      <tr
                        {...row.getRowProps()}
                        onDoubleClick={(e) => {
                          handleDoubleClickRow(row);
                        }}
                        onClick={(e) => {
                          handleSelectRow(row);
                        }}
                        className={row.isSelected ? 'selected' : ''}
                      >
                        {row.cells.map((cell) => {
                          if (cell.column.hidden) {
                            return null;
                          }
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                width: cell.column.width,
                                textAlign: cell.column.align,
                                paddingLeft:
                                  cell.column.index === 0 && cell.row.depth > 0
                                    ? cell.row.depth * 15 + 3 + 'px'
                                    : '3px',
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
          rowNumber={totalCount ? totalCount : rows.length}
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
          loading={loading}
        />
      </div>
    </StyledTable>
  );
};

Table.defaultProps = {
  width: '100%',
  height: '400px',
  enableMultiSelectRow: false,
  treeTableRowExpanded: true,
  enableTreeTable: false,
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
    { code: '500', name: '500' },
    { code: '1000', name: '1000' },
  ],
  loading: false,
  enableServerSidePagination: false,
  pageCount: 0,
};

export default React.memo(Table);

function getColumns(model: TableModelProps[]): Column<Object>[] {
  return model.map((m, index) => {
    return {
      index: index,
      Header: m.label,
      accessor: m.name,
      width: m.width || 0,
      align: m.align || 'center',
      hidden: m.hidden,
      formatter: m.formatter,
      Filter: DefaultFilter,
    };
  }) as Column<Object>[];
}

// function getColumn(m: TableModelProps): Column<Object> {
//   return {
//     Header: m.label,
//     accessor: m.name,
//     width: m.width,
//     align: m.align,
//     formatter: m.formatter,
//     Filter: DefaultFilter,
//   } as Column<Object>;
// }
