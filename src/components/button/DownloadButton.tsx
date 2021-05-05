import React, { ComponentProps } from 'react';
import Icon from '../icon/Icon';
import Button from './Button';

const DownloadButton = ({ ...props }: ComponentProps<typeof Button>) => {
  return (
    <Button {...props} variant="outline">
      <Icon icon="download" color={props.color} />
      {props.children}
    </Button>
  );
};

DownloadButton.defaultProps = {
  children: '다운로드',
  disabled: false,
  color: 'primary',
  variant: 'fill',
  size: 'medium',
  width: 'auto',
  iconOnly: false,
};

export default React.memo(DownloadButton);
