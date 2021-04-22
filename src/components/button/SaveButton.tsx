import React, { ComponentProps } from 'react';
import { Icon } from '../..';
import Button from './Button';

const SaveButton = ({ ...props }: ComponentProps<typeof Button>) => {
  return (
    <Button type="submit" {...props}>
      <Icon icon="save" color={props.color} />
      {props.children}
    </Button>
  );
};

SaveButton.defaultProps = {
  children: '저장',
  disabled: false,
  color: 'primary',
  variant: 'fill',
  size: 'medium',
  width: 'auto',
  iconOnly: false,
};

export default React.memo(SaveButton);
