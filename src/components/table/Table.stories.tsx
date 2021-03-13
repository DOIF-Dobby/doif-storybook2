import React, { ComponentProps, useCallback, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Table, { TableModelProps } from './Table';
import Page from '../common/Page';
import Box from '../common/Box';
import { data1 } from './data';
import { useMemo } from '@storybook/client-api';
import Button from '../button/Button';
import Icon from '../icon/Icon';

export default {
  title: 'Components/Table',
  component: Table.type,
  decorators: [
    (Story) => (
      <Page>
        <Box style={{ height: '700px' }}>{Story()}</Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof Table>> = (args) => {
  const model = useMemo(() => model1, []);
  const data = useMemo(() => data1, []);
  const onSelectRow = useCallback((id: string, rowValue: Object) => {
    console.log(id);
    console.log(rowValue);
  }, []);

  const buttons = useMemo(
    () => [
      <Button variant="ghost">
        <Icon icon="plus" />
        추가
      </Button>,
      <Button variant="ghost">
        <Icon icon="pencil" />
        수정
      </Button>,
      <Button variant="ghost">
        <Icon icon="trashCan" />
        삭제
      </Button>,
    ],
    [],
  );

  return (
    <Table
      {...args}
      model={model}
      data={data}
      caption="테이블 1"
      buttons={buttons}
      onSelectRow={onSelectRow}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
};

const model1: TableModelProps[] = [
  {
    label: '정산배치타입',
    name: 'batchConfTypeNm',
    width: 120,
    align: 'center',
  },
  {
    label: '정산배치설정ID',
    name: 'batchConfId',
    width: 150,
    align: 'left',
  },
  {
    label: '정산배치설정명',
    name: 'batchConfNm',
    width: 250,
    align: 'left',
  },
  {
    label: '실행순서',
    name: 'procOrder',
    width: 60,
    align: 'center',
  },
  {
    label: '실행타입',
    name: 'procTypeNm',
    width: 100,
    align: 'center',
  },
  {
    label: '실행커맨드',
    name: 'procCmd',
    width: 400,
    align: 'left',
  },
  {
    label: '비고',
    name: 'remark1',
    width: 150,
    align: 'left',
    formatter: (cellValue: React.ReactNode) => (
      <div style={{ color: '#fab' }}>{cellValue}</div>
    ),
  },
  {
    label: '작업자',
    name: 'updt_user',
    width: 100,
    align: 'center',
  },
  {
    label: '작업일시',
    name: 'updtdt',
    width: 150,
    align: 'center',
  },
];
