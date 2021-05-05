import React, { ComponentProps } from 'react';
import Icon from '../icon/Icon';
import Button from './Button';

const SearchButton = ({ ...props }: ComponentProps<typeof Button>) => {
  return (
    <Button type="submit" {...props}>
      <Icon icon="search" color={props.color} />
      {props.children}
    </Button>
  );
};

SearchButton.defaultProps = {
  children: '조회',
  disabled: false,
  color: 'primary',
  variant: 'fill',
  size: 'medium',
  width: 'auto',
  iconOnly: false,
};

export default React.memo(SearchButton);
