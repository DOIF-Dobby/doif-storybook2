import React, {
  ChangeEvent,
  ComponentProps,
  useCallback,
  useState,
} from 'react';
import { Story } from '@storybook/react/types-6-0';
import Select from './Select';
import Container from '../container/Container';
import { DoifDataProps } from '../../props/DoifCommonProps';

export default {
  title: 'Components/Select',
  component: Select.type,
};

const Template: Story<ComponentProps<typeof Select>> = (args) => {
  const [value, setValue] = useState('CC');

  const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return <Select {...args} value={value} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
  data: [
    { code: 'CC', name: '신용카드' },
    { code: 'AT', name: '계좌이체' },
  ],
  value: 'hi',
  placeholder: '결제수단',
};
