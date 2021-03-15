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
} from 'react-table';
import Scroll from '../common/Scroll';
import useMultiRowSelect from './hooks/useMultiRowSelect';
import Pagination from './Pagination';
import { StyledTable } from './Table.style';
import { TableModelProps } from './table.model';

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
  /** row를 선택했을 때 실행되는 콜백함수입니다. */
  onSelectRow?: (id: string, rowValue: Object) => void;
  /** mulit row를 선택했을 때 실행되는 콜백함수입니다. */
  onMultiSelectRow?: (rowValues: Object[]) => void;
}

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
  onSelectRow,
  onMultiSelectRow,
}: TableProps) => {
  const columns: Column<Object>[] = useMemo(() => {
    return model.map((m) => ({
      Header: m.label,
      accessor: m.name,
      width: m.width,
      align: m.align,
      formatter: m.formatter,
    })) as Column<Object>[];
  }, [model]);

  /** react-table hooks */
  const hooks: PluginHook<Object>[] = [
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
    toggleAllRowsSelected,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable({ columns, data, initialState: { pageIndex: 0 } }, ...hooks);

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

      {/* <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
      <pre>
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

Table.defaultProps = {
  height: '400px',
  enableMultiSelectRow: false,
};

export default React.memo(Table);
