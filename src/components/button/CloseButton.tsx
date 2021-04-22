import React, { ComponentProps } from 'react';
import { Icon } from '../..';
import Button from './Button';

const CloseButton = ({ ...props }: ComponentProps<typeof Button>) => {
  return (
    <Button {...props} variant="outline">
      <Icon icon="exit" color={props.color} />
      {props.children}
    </Button>
  );
};

CloseButton.defaultProps = {
  children: '닫기',
  disabled: false,
  color: 'primary',
  variant: 'fill',
  size: 'medium',
  width: 'auto',
  iconOnly: false,
};

export default React.memo(CloseButton);
