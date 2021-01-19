import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Colors from './Colors';

export default {
  title: 'Style/Colors',
  component: Colors,
};

const Template: Story<ComponentProps<typeof Colors>> = (args) => (
  <Colors {...args} />
);

export const MainColors = Template.bind({});
MainColors.args = {
  type: 'main',
};

export const SubColors = Template.bind({});
SubColors.args = {
  type: 'sub',
};
