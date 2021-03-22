import React, {
  forwardRef,
  MutableRefObject,
  useCallback,
  useEffect,
} from 'react';
import { Hooks, Row } from 'react-table';
import Icon from '../../icon/Icon';

function useTreeRow(hooks: Hooks<any>) {
  const handleToggleRowExpanded = useCallback((row: Row) => {
    row.toggleRowExpanded();
  }, []);

  hooks.visibleColumns.push((columns) => [
    {
      // Build our expander column
      id: '_expander', // Make sure it has an ID
      width: 40,
      Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
        <div
          {...getToggleAllRowsExpandedProps()}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {isAllRowsExpanded ? (
            <Icon
              icon="fillArrow"
              size="small"
              style={{ transform: 'rotate(90deg)' }}
            />
          ) : (
            <Icon icon="fillArrow" size="small" />
          )}
        </div>
      ),
      Cell: ({ row }) => {
        if (!row.canExpand) {
          return null;
        }

        // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
        // to build the toggle for expanding a row
        return (
          <div
            {...row.getToggleRowExpandedProps({
              style: {
                // We can even use the row.depth property
                // and paddingLeft to indicate the depth
                // of the row
                paddingLeft: `${row.depth * 1}rem`,
              },
            })}
            onClick={(e) => {
              handleToggleRowExpanded(row);
              e.stopPropagation();
            }}
            onDoubleClick={(e) => {
              // handleToggleRowExpanded(row);
              e.stopPropagation();
            }}
          >
            {row.isExpanded ? (
              <Icon
                icon="fillArrow"
                size="small"
                style={{ transform: 'rotate(90deg)' }}
              />
            ) : (
              <Icon icon="fillArrow" size="small" />
            )}
          </div>
        );
      },
    },
    ...columns,
  ]);
}

export default useTreeRow;
