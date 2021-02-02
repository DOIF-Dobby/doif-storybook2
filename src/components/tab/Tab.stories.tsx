import React, {
  ChangeEvent,
  ComponentProps,
  useCallback,
  useState,
} from 'react';
import { Story } from '@storybook/react/types-6-0';
import Tab from './Tab';
import Container from '../container/Container';
import Button from '../button/Button';
import Input from '../input/Input';
import Page from '../common/Page';
import Box from '../common/Box';

export default {
  title: 'Components/Tab',
  component: Tab.type,
  decorators: [
    (Story) => (
      <Page>
        <Box>{Story()}</Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof Tab>> = (args) => {
  const [selected, setSelected] = useState('TAB_1');

  const tabs = [
    {
      id: 'TAB_1',
      name: '가맹점정보',
      disabled: false,
      content: <div>탭 1입니다.</div>,
    },
    {
      id: 'TAB_3',
      name: '담당자정보',
      disabled: false,
      content: (
        <Container>
          <Input />
          <Button>안녕하세요</Button>
          <Button variant="outline">안녕하세요</Button>
        </Container>
      ),
    },
  ];

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  }, []);

  return (
    <Tab
      {...args}
      tabs={tabs}
      selected={selected}
      name="tab-sample"
      onChange={onChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Colors = () => {
  const [selected, setSelected] = useState('TAB_1');

  const tabs = [
    {
      id: 'TAB_1',
      name: '가맹점정보',
      disabled: false,
      content: <div>탭 1입니다.</div>,
    },
    {
      id: 'TAB_3',
      name: '담당자정보',
      disabled: false,
      content: (
        <Container>
          <Input />
          <Button>안녕하세요</Button>
          <Button variant="outline">안녕하세요</Button>
        </Container>
      ),
    },
  ];

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  }, []);

  return (
    <Container>
      <Tab
        tabs={tabs}
        selected={selected}
        name="tab-sample"
        onChange={onChange}
      />
      <Tab
        tabs={tabs}
        selected={selected}
        name="tab-sample2"
        onChange={onChange}
        color="secondary"
      />
    </Container>
  );
};

export const Disable = () => {
  const [selected, setSelected] = useState('TAB_1');

  const tabs = [
    {
      id: 'TAB_1',
      name: '가맹점정보',
      disabled: false,
      content: <div>탭 1입니다.</div>,
    },
    {
      id: 'TAB_2',
      name: '상점정보',
      disabled: true,
      content: <div>탭 2입니다.</div>,
    },
    {
      id: 'TAB_3',
      name: '담당자정보',
      disabled: false,
      content: (
        <Container>
          <Input />
          <Button>안녕하세요</Button>
          <Button variant="outline">안녕하세요</Button>
        </Container>
      ),
    },
  ];

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  }, []);

  return (
    <Container>
      <Tab
        tabs={tabs}
        selected={selected}
        name="tab-sample"
        onChange={onChange}
      />
      <Tab
        tabs={tabs}
        selected={selected}
        name="tab-sample2"
        onChange={onChange}
        color="secondary"
      />
    </Container>
  );
};

export const Height = () => {
  const [selected, setSelected] = useState('TAB_1');

  const tabs = [
    {
      id: 'TAB_1',
      name: '가맹점정보',
      disabled: false,
      content: <div>탭 1입니다.</div>,
    },
    {
      id: 'TAB_3',
      name: '담당자정보',
      disabled: false,
      content: (
        <Container>
          <Input />
          <Button>안녕하세요</Button>
          <Button variant="outline">안녕하세요</Button>
        </Container>
      ),
    },
  ];

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  }, []);

  return (
    <Container>
      <Tab
        tabs={tabs}
        selected={selected}
        name="tab-sample"
        onChange={onChange}
        height="0"
      />
      <Tab
        tabs={tabs}
        selected={selected}
        name="tab-sample2"
        onChange={onChange}
        color="secondary"
        height="20rem"
      />
    </Container>
  );
};

export const ManyTab = () => {
  const [selected, setSelected] = useState('TAB_1');

  const tabs = [
    {
      id: 'TAB_1',
      name: '탭 1입니다',
      disabled: false,
      content: <div>탭 1입니다.</div>,
    },
    {
      id: 'TAB_2',
      name: '탭 2입니다',
      disabled: false,
      content: <div>탭 2입니다.</div>,
    },
    {
      id: 'TAB_3',
      name: '탭 3입니다',
      disabled: false,
      content: <div>탭 3입니다.</div>,
    },
    {
      id: 'TAB_4',
      name: '탭 4입니다',
      disabled: false,
      content: <div>탭 4입니다.</div>,
    },
    {
      id: 'TAB_5',
      name: '탭 5입니다',
      disabled: false,
      content: <div>탭 5입니다.</div>,
    },
    {
      id: 'TAB_6',
      name: '탭 6입니다',
      disabled: false,
      content: <div>탭 6입니다.</div>,
    },
    {
      id: 'TAB_7',
      name: '탭 7입니다',
      disabled: false,
      content: <div>탭 7입니다.</div>,
    },
    {
      id: 'TAB_8',
      name: '탭 8입니다',
      disabled: false,
      content: <div>탭 8입니다.</div>,
    },
    {
      id: 'TAB_9',
      name: '탭 9입니다',
      disabled: false,
      content: <div>탭 9입니다.</div>,
    },
    {
      id: 'TAB_10',
      name: '탭 10입니다',
      disabled: false,
      content: <div>탭 10입니다.</div>,
    },
    {
      id: 'TAB_11',
      name: '탭 11입니다',
      disabled: false,
      content: <div>탭 11입니다.</div>,
    },
    {
      id: 'TAB_12',
      name: '탭 12입니다',
      disabled: false,
      content: <div>탭 12입니다.</div>,
    },
    {
      id: 'TAB_13',
      name: '탭 13입니다',
      disabled: false,
      content: <div>탭 13입니다.</div>,
    },
    {
      id: 'TAB_14',
      name: '탭 14입니다',
      disabled: false,
      content: <div>탭 14입니다.</div>,
    },
  ];

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  }, []);

  return (
    <Container>
      <Tab
        tabs={tabs}
        selected={selected}
        name="tab-sample"
        onChange={onChange}
      />
    </Container>
  );
};
