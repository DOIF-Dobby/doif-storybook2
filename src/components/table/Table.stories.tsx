import React, { ComponentProps, useCallback, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Table from './Table';
import { TableModelProps, TableGroupHeaderProps } from './table.model';
import Page from '../common/Page';
import Box from '../common/Box';
import { data1 } from './data';
import { useMemo, useRef } from '@storybook/client-api';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import axios from 'axios';

export default {
  title: 'Components/Table',
  component: Table.type,
  decorators: [
    (Story) => (
      <Page>
        <Box style={{ height: '1000px' }}>{Story()}</Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof Table>> = (args) => {
  const model: TableModelProps[] = useMemo(
    () => [
      {
        label: '정산배치타입',
        name: 'batchConfTypeNm',
        width: 120,
        align: 'left',
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
    ],
    [],
  );
  const data = useMemo(() => data1, []);
  const onSelectRow = useCallback((id: string, rowValue: Object) => {
    // console.log('click');
    // console.log(id);
    // console.log(rowValue);
  }, []);

  const onDoubleClickRow = useCallback((id: string, rowValue: Object) => {
    // console.log('double click');
    // console.log(rowValue);
  }, []);

  const onMultiSelectRow = useCallback((rowValues: Object[]) => {
    // console.log(rowValues);
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
      onDoubleClickRow={onDoubleClickRow}
      onMultiSelectRow={onMultiSelectRow}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
};

export const GroupHeader = () => {
  const model2: TableModelProps[] = useMemo(
    () => [
      {
        label: '정산배치타입',
        name: 'batchConfTypeNm',
        width: 120,
        align: 'left',
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
    ],
    [],
  );
  const data = useMemo(() => data1, []);
  const groupHeaders: TableGroupHeaderProps[] = useMemo(
    () => [
      {
        startColumn: 'batchConfTypeNm',
        size: 3,
        label: '그룹 헤더 1',
      },
      {
        startColumn: 'remark1',
        size: 2,
        label: '그룹 헤더 2',
      },
    ],
    [],
  );

  return (
    <Table
      model={model2}
      data={data}
      caption="그룹 헤더"
      groupHeaders={groupHeaders}
      enableMultiSelectRow
      enableTreeTable
    />
  );
};

export const ServerSidePagination = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  const fetchIdRef = useRef(0);

  const onFetchData = useCallback(({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current;

    setLoading(true);

    axios
      .get('/v1/search/movie.json', {
        params: {
          query: '의',
          display: pageSize,
          start: pageSize * pageIndex + 1,
          genre: 4,
        },
        headers: {
          'X-Naver-Client-Id': '3rix0uDFzcyO5kNYDwOT',
          'X-Naver-Client-Secret': 'JWE_XiWwEc',
        },
      })
      .then((response) => {
        if (fetchId === fetchIdRef.current) {
          const serverData = response.data;
          setData(serverData.items);

          console.log(serverData);

          setPageCount(Math.ceil(serverData.total / pageSize));

          setLoading(false);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const model2: TableModelProps[] = useMemo(
    () => [
      {
        label: '제목',
        name: 'title',
        width: 200,
        align: 'left',
      },
      {
        label: '링크',
        name: 'link',
        width: 500,
        align: 'left',
        formatter: (cellValue: React.ReactNode) => {
          return <a>{cellValue}</a>;
        },
      },
      {
        label: '원 제목',
        name: 'subtitle',
        width: 200,
        align: 'left',
      },
      {
        label: '제작연도',
        name: 'pubDate',
        width: 100,
        align: 'center',
      },
      {
        label: '감독',
        name: 'director',
        width: 200,
        align: 'left',
      },
      {
        label: '평점',
        name: 'userRating',
        width: 100,
        align: 'center',
      },
    ],
    [],
  );

  return (
    <Table
      model={model2}
      data={data}
      caption="영화"
      onFetchData={onFetchData}
      loading={loading}
      pageCount={pageCount}
      enableServerSidePagination
    />
  );
};
