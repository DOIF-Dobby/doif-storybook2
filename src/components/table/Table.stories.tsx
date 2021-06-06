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
import { DoifDataProps } from '../../props/DoifCommonProps';

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
        label: '',
        name: 'hiddenCol',
        hidden: true,
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
    console.log(rowValue);
  }, []);

  const onDoubleClickRow = useCallback((id: string, rowValue: Object) => {
    // console.log('double click');
    console.log(rowValue);
  }, []);

  const onMultiSelectRow = useCallback((rowValues: Object[]) => {
    console.log(rowValues);
  }, []);

  const buttons = useMemo(
    () => [
      <Button variant="ghost" key="plus">
        <Icon icon="plus" />
        추가
      </Button>,
      <Button variant="ghost" key="pencil">
        <Icon icon="pencil" />
        수정
      </Button>,
      <Button variant="ghost" key="trashCan">
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

export const AboutColumnProperty = () => {
  const model: TableModelProps[] = useMemo(
    () => [
      {
        label: 'Col 1',
        name: 'col1',
        width: 500,
        align: 'left',
      },
      {
        label: 'Col 2',
        name: 'col2',
        width: 500,
        align: 'left',
      },
      {
        label: 'Col 3',
        name: 'col3',
        width: 500,
        align: 'center',
        formatter: (cellValue: React.ReactNode) => {
          return (
            <Button
              size="small"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                alert('hi');
              }}
            >
              {cellValue}
            </Button>
          );
        },
      },
      {
        label: 'Col 4',
        name: 'col4',
        hidden: true,
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        col1: 'label 속성은 th 태그의 내용입니다.',
        col2: 'name 속성은 column을 구분 짓는 속성입니다.',
        col3:
          'formatter 속성으로 값을 가로채서 원하는 ReactNode로 반환할 수 있습니다.',
        col4: 'hidden 속성으로 숨기지만 row 값은 알 수 있습니다.',
      },
      {
        col1: 'width 속성은 column의 넓이입니다.',
        col2: 'align 속성은 column의 align 속성입니다.',
        col3: 'hidden 속성으로 렌더링을 하지 않을 수 있습니다.',
        col4: 'hidden 속성으로 숨기지만 row 값은 알 수 있습니다.',
      },
    ],
    [],
  );

  const onSelectRow = useCallback((id: string, rowValue: Object) => {
    alert(
      'rowId: ' + id + '\r\n' + 'rowValue: \r\n' + JSON.stringify(rowValue),
    );
  }, []);

  return (
    <Table
      caption="Row 선택 시"
      model={model}
      data={data}
      onSelectRow={onSelectRow}
    />
  );
};

export const SelectRow = () => {
  const model: TableModelProps[] = useMemo(
    () => [
      {
        label: 'Row 선택 시',
        name: 'selectRow',
        width: 500,
        align: 'left',
      },
      {
        label: '호호호',
        name: 'hohoho',
        width: 500,
        align: 'left',
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        selectRow: 'Row 선택 시 onSelectRow 함수를 실행합니다.',
        hohoho: '호호호호호',
      },
    ],
    [],
  );

  const onSelectRow = useCallback((id: string, rowValue: Object) => {
    alert(
      'rowId: ' + id + '\r\n' + 'rowValue: \r\n' + JSON.stringify(rowValue),
    );
  }, []);

  return (
    <Table
      caption="Row 선택 시"
      model={model}
      data={data}
      onSelectRow={onSelectRow}
    />
  );
};

export const MultiSelectRow = () => {
  const model: TableModelProps[] = useMemo(
    () => [
      {
        label: 'Row 선택 시',
        name: 'selectRow',
        width: 500,
        align: 'left',
      },
      {
        label: '호호호',
        name: 'hohoho',
        width: 500,
        align: 'left',
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        selectRow: 'Row 선택 시 onMultiSelectRow 함수를 실행합니다.',
        hohoho: '호호호호호',
      },
      {
        selectRow: 'enableMultiSelectRow 속성을 ture',
        hohoho: '하하하',
      },
    ],
    [],
  );

  const onMultiSelectRow = useCallback((rowValue: Object[]) => {
    console.log(rowValue);
  }, []);

  return (
    <Table
      caption="Row 선택 시"
      model={model}
      data={data}
      enableMultiSelectRow
      onMultiSelectRow={onMultiSelectRow}
    />
  );
};

export const DisableFilter = () => {
  const model: TableModelProps[] = useMemo(
    () => [
      {
        label: 'Col 1',
        name: 'col1',
        width: 500,
        align: 'left',
      },
      {
        label: 'Col 2',
        name: 'col2',
        width: 500,
        align: 'left',
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        col1: 'disableFilters 속성은 기본적으로 false',
        col2: '호호호호호',
      },
      {
        col1: 'disableFilters true로 주면 filter 항목 숨김',
        col2: '하하하',
      },
    ],
    [],
  );

  return (
    <Table caption="Row 선택 시" model={model} data={data} disableFilters />
  );
};

export const DisableSortBy = () => {
  const model: TableModelProps[] = useMemo(
    () => [
      {
        label: 'Col 1',
        name: 'col1',
        width: 500,
        align: 'left',
      },
      {
        label: 'Col 2',
        name: 'col2',
        width: 500,
        align: 'left',
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        col1: 'disableSortBy 속성은 기본적으로 false',
        col2: '호호호호호',
      },
      {
        col1: 'disableSortBy true로 주면 sort가 안됨',
        col2: '하하하',
      },
    ],
    [],
  );

  return (
    <Table caption="Row 선택 시" model={model} data={data} disableSortBy />
  );
};

export const AboutPage = () => {
  const model: TableModelProps[] = useMemo(
    () => [
      {
        label: 'Col 1',
        name: 'col1',
        width: 500,
        align: 'left',
      },
      {
        label: 'Col 2',
        name: 'col2',
        width: 500,
        align: 'left',
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        col1: 'pageSizeArray 속성은 기본적으로 10, 20, 50, 100, 200, 500, 1000',
        col2: 'initPageSize 속성은 기본적으로 100',
      },
      {
        col1: 'initPageIndex 속성은 기본적으로 0',
        col2: '세 가지 속성을 변경해보겠습니다.',
      },
      {
        col1: '하하하',
        col2: '호호호',
      },
      {
        col1: '하하하',
        col2: '호호호',
      },
      {
        col1: '하하하',
        col2: '호호호',
      },
      {
        col1: '하하하',
        col2: '호호호',
      },
      {
        col1: '하하하',
        col2: '호호호',
      },
      {
        col1: '하하하',
        col2: '호호호',
      },
      {
        col1: '하하하',
        col2: '호호호',
      },
      {
        col1: '하하하',
        col2: '호호호',
      },
      {
        col1: '하하하',
        col2: '호호호',
      },
      {
        col1: '하하하',
        col2: '호호호',
      },
    ],
    [],
  );

  const pageSizeArray: DoifDataProps[] = [
    {
      code: '1',
      name: '1',
    },
    {
      code: '2',
      name: '2',
    },
    {
      code: '3',
      name: '3',
    },
  ];

  const initPageSize = 2;
  const initPageIndex = 1;

  return (
    <Table
      caption="Row 선택 시"
      model={model}
      data={data}
      pageSizeArray={pageSizeArray}
      initPageIndex={initPageIndex}
      initPageSize={initPageSize}
    />
  );
};

export const Buttons = () => {
  const model: TableModelProps[] = useMemo(
    () => [
      {
        label: 'Col 1',
        name: 'col1',
        width: 500,
        align: 'left',
      },
      {
        label: 'Col 2',
        name: 'col2',
        width: 500,
        align: 'left',
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        col1: 'buttons 속성으로 원하는 버튼 배열을 렌더링 할 수 있습니다.',
        col2: '호호호호호',
      },
    ],
    [],
  );

  const buttons = useMemo(
    () => [
      <Button variant="ghost" key="plus">
        <Icon icon="plus" />
        추가
      </Button>,
      <Button variant="ghost" key="pencil">
        <Icon icon="pencil" />
        수정
      </Button>,
      <Button variant="ghost" key="trashCan">
        <Icon icon="trashCan" />
        삭제
      </Button>,
    ],
    [],
  );

  return (
    <Table caption="Row 선택 시" model={model} data={data} buttons={buttons} />
  );
};

export const TreeTable = () => {
  const model: TableModelProps[] = useMemo(
    () => [
      {
        label: 'Col 1',
        name: 'col1',
        width: 500,
        align: 'left',
      },
      {
        label: 'Col 2',
        name: 'col2',
        width: 500,
        align: 'left',
      },
      {
        label: 'Col 3',
        name: 'col3',
        width: 500,
        align: 'left',
      },
    ],
    [],
  );

  const data = useMemo(
    () => [
      {
        col1: 'data에 subRows 속성으로 데이터를 담고',
        col2:
          'enableTreeTable 속성을 ture로 주면 tree 형식 table을 사용할 수 있습니다.',
        col3: '호호호호',
        subRows: [
          {
            col1: 'data에 subRows 속성으로 데이터를 담고',
            col2:
              'enableTreeTable 속성을 ture로 주면 tree 형식 table을 사용할 수 있습니다.',
            col3: '호호호호',
            subRows: [
              {
                col1: 'data에 subRows 속성으로 데이터를 담고',
                col2:
                  'enableTreeTable 속성을 ture로 주면 tree 형식 table을 사용할 수 있습니다.',
                col3: '호호호호',
              },
            ],
          },
        ],
      },
      {
        col1: 'data에 subRows 속성으로 데이터를 담고',
        col2:
          'enableTreeTable 속성을 ture로 주면 tree 형식 table을 사용할 수 있습니다.',
        col3: '호호호호',
        subRows: [
          {
            col1: 'data에 subRows 속성으로 데이터를 담고',
            col2:
              'enableTreeTable 속성을 ture로 주면 tree 형식 table을 사용할 수 있습니다.',
            col3: '호호호호',
          },
        ],
      },
    ],
    [],
  );

  return (
    <Table caption="Row 선택 시" model={model} data={data} enableTreeTable />
  );
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
    />
  );
};

export const ServerSidePagination = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const onFetchData = useCallback(({ pageSize, pageIndex }) => {
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
        const serverData = response.data;
        setData(serverData.items);

        setPageCount(Math.ceil(serverData.total / pageSize));
        setTotalCount(serverData.total);

        setLoading(false);
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
      totalCount={totalCount}
      enableServerSidePagination
    />
  );
};

export const NoDataTable = () => {
  const model: TableModelProps[] = useMemo(
    () => [
      {
        label: '데이터 없을 경우',
        name: 'selectRow',
        width: 1000,
        align: 'left',
      },
      {
        label: '호호호',
        name: 'hohoho',
        width: 1000,
        align: 'left',
      },
    ],
    [],
  );

  return <Table caption="Row 선택 시" model={model} data={[]} />;
};
