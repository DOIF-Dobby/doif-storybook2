import { Column } from 'react-table';

export const data1 = [
  {
    col1: 'Hello',
    col2: 'World',
  },
  {
    col1: 'react-table',
    col2: 'rocks',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
];

export const columns1: Column<Object>[] = [
  {
    Header: 'Column 1',
    accessor: 'col1', // accessor is the "key" in the data
  },
  {
    Header: 'Column 2',
    accessor: 'col2',
  },
] as Column<Object>[];
