import React, { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Modal from './Modal';
import Container from '../container/Container';
import Input from '../input/Input';
import Button from '../button/Button';

export default {
  title: 'Components/Modal',
  component: Modal.type,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '300px',
    },
  },
};

const Template: Story<ComponentProps<typeof Modal>> = (args) => {
  return (
    <Modal {...args}>
      <Container direction="column">
        <Input />
        <Input />
        <Container align="center">
          <Button>저장</Button>
          <Button variant="outline">닫기</Button>
        </Container>
      </Container>
    </Modal>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: '안녕하세요',
  visible: true,
};
