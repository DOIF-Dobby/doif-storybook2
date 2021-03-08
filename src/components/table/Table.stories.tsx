import React, { ComponentProps, useCallback, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Table from './Table';
import Page from '../common/Page';
import Box from '../common/Box';
import { data1, columns1 } from './data';
import { useMemo } from '@storybook/client-api';

export default {
  title: 'Components/Table',
  component: Table.type,
  decorators: [
    (Story) => (
      <Page>
        <Box>{Story()}</Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof Table>> = (args) => {
  const columns = useMemo(() => columns1, []);
  const data = useMemo(() => data1, []);

  return <Table columns={columns} data={data} caption="테이블 1" />;
};

export const Default = Template.bind({});
Default.args = {};
