import React from 'react';
import { FilterProps } from 'react-table';
import Input from '../../input/Input';

function DefaultFilter<T extends Record<string, unknown>>({
  column: { filterValue, preFilteredRows, setFilter },
}: FilterProps<T>) {
  return (
    <Input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      style={{ height: '1.5rem' }}
    />
  );
}

export default DefaultFilter;
