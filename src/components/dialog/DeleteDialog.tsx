import React, { ComponentProps } from 'react';
import Dialog from './Dialog';

const DeleteDialog = ({ ...props }: ComponentProps<typeof Dialog>) => {
  return <Dialog {...props}>{props.children}</Dialog>;
};

DeleteDialog.defaultProps = {
  children: '정말 삭제하시겠습니까?',
  type: 'info',
  zIndex: 1200,
  color: 'primary',
  isConfirm: true,
  confirmText: '확인',
  cancelText: '취소',
};

export default React.memo(DeleteDialog);
