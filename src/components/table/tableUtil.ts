import { TableModelProps } from './table.model';

export function getColumsSize(items: TableModelProps[]) {
  let count = 0;

  if (!items) {
    return count;
  }

  for (const item of items) {
    if (item.hasOwnProperty('childrenItems')) {
    }
  }
}
