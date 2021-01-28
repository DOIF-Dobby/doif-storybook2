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
import { DoifDataProps } from '../../props/DoifCommonProps';

export default {
  title: 'Components/Tab',
  component: Tab.type,
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
      id: 'TAB_2',
      name: '상점정보',
      disabled: true,
      content: <div>안녕하세요</div>,
    },
    {
      id: 'TAB_3',
      name: '담당자정보',
      disabled: false,
      content: (
        <Container>
          <Button>안녕하세요</Button>
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
