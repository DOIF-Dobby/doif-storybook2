import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import MyButton from './MyButton';

export default {
  title: 'Example/MyButton',
  component: MyButton,
};

const Template: Story<ComponentProps<typeof MyButton>> = (args) => (
  <MyButton {...args}>{args.children}</MyButton>
);

export const MyButton1 = Template.bind({});
MyButton1.args = {
  children: '버튼입니다.',
};
