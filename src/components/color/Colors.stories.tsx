import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Colors from './Colors';
import Page from '../common/Page';
import Box from '../common/Box';

export default {
  title: 'Style/Colors',
  component: Colors,
  decorators: [
    (Story) => (
      <Page>
        <Box>{Story()}</Box>
      </Page>
    ),
  ],
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
