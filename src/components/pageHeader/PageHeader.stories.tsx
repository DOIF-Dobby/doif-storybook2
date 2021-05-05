import { Story } from '@storybook/react/types-6-0';
import React, { ComponentProps } from 'react';
import Box from '../common/Box';
import Page from '../common/Page';
import PageHeader from './PageHeader';

export default {
  title: 'Components/PageHeader',
  component: PageHeader.type,
  decorators: [
    (Story) => (
      <Page>
        <Box>{Story()}</Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof PageHeader>> = (args) => (
  <PageHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  menuName: '메뉴명',
  menuList: ['메뉴 카테고리1', '메뉴 카테고리2', '메뉴명'],
};
