import React from 'react';

export interface TableModelProps {
  label: string;
  name: string;
  width?: number;
  align?: 'left' | 'center' | 'right';
  hidden?: boolean;
  formatter?: (cellValue: React.ReactNode) => React.ReactNode;
}

export interface TableGroupHeaderProps {
  startColumn: string;
  size: number;
  label: string;
}

export interface TableFetchDataProps {
  pageSize: number;
  pageIndex: number;
}
