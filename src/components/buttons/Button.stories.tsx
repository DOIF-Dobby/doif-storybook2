import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button.type,
};

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args}>버튼명</Button>
);

export const Button1 = Template.bind({});
Button1.args = {
  disabled: false,
};
