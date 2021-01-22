import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Input from './Input';
import Container from '../container/Container';

export default {
  title: 'Components/Input',
  component: Input.type,
};

const Template: Story<ComponentProps<typeof Input>> = (args) => (
  <Input {...args}>{args.children}</Input>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: '값을 입력하세요',
};

export const Variant = () => {
  return <Input variant="underline" placeholder="가맹점ID" />;
};
