import React, { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Dialog from './Dialog';
import DeleteDialog from './DeleteDialog';

export default {
  title: 'Components/Dialog',
  component: Dialog.type,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '300px',
    },
  },
};

const Template: Story<ComponentProps<typeof Dialog>> = (args) => {
  return <Dialog {...args}>반갑습니다.</Dialog>;
};

export const Default = Template.bind({});
Default.args = {
  title: '안녕하세요',
  visible: true,
  type: 'info',
};

export const Success = () => {
  return (
    <Dialog visible type="success">
      성공
    </Dialog>
  );
};

export const Warning = () => {
  return (
    <Dialog visible type="warning">
      경고
    </Dialog>
  );
};

export const Error = () => {
  return (
    <Dialog visible type="error">
      에러
    </Dialog>
  );
};

export const Info = () => {
  return (
    <Dialog visible type="info">
      정보
    </Dialog>
  );
};

export const SecondaryColor = () => {
  return (
    <Dialog visible type="info" color="secondary">
      정보
    </Dialog>
  );
};

export const onConfirm = () => {
  const onConfirm = () => alert('확인');

  return (
    <Dialog visible type="info" isConfirm onConfirm={onConfirm}>
      정말 진행하시겠습니까?
    </Dialog>
  );
};

export const onCancel = () => {
  const [visible, setVisible] = useState(true);

  const onCancel = () => setVisible((visible) => !visible);

  return (
    <Dialog visible={visible} type="info" isConfirm onCancel={onCancel}>
      정말 진행하시겠습니까?
    </Dialog>
  );
};

export const deleteDialog = () => {
  const [visible, setVisible] = useState(true);
  return <DeleteDialog visible={visible} />;
};
