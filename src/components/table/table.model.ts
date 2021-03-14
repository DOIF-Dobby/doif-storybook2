import React from 'react';

export interface TableModelProps {
  label: string;
  name: string;
  width: number;
  align: 'left' | 'center' | 'right';
  formatter?: (cellValue: React.ReactNode) => React.ReactNode;
}
