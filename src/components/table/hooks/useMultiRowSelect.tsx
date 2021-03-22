import React, { forwardRef, MutableRefObject, useEffect } from 'react';
import { CellProps, HeaderProps, Hooks } from 'react-table';

interface CheckboxProps {
  indeterminate?: boolean;
}

const useCombinedRefs = (...refs: any): MutableRefObject<any> => {
  const targetRef = React.useRef();

  React.useEffect(() => {
    refs.forEach((ref: any) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

const IndeterminateCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef(null);
    const combinedRef = useCombinedRefs(ref, defaultRef);

    useEffect(() => {
      combinedRef.current.indeterminate = indeterminate;
    }, [combinedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={combinedRef} {...rest} />
      </>
    );
  },
);

function useMultiRowSelect(hooks: Hooks<any>) {
  hooks.visibleColumns.push((columns) => [
    {
      id: '_multi-row-select',
      // disableResizing: true,
      // disableGroupBy: true,
      minWidth: 40,
      width: 40,
      maxWidth: 40,
      Header: ({ getToggleAllPageRowsSelectedProps }: HeaderProps<any>) => (
        <div style={{ position: 'absolute', width: '100%' }}>
          <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
        </div>
      ),
      Cell: ({ row }: CellProps<any>) => (
        <div style={{ textAlign: 'center', height: '100%' }}>
          <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
        </div>
      ),
    },
    ...columns,
  ]);
}

export default useMultiRowSelect;
