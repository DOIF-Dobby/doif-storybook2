import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Dialog from './Dialog';
import Container from '../container/Container';

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
