import React, {
  ChangeEvent,
  ComponentProps,
  useCallback,
  useState,
} from 'react';
import { Story } from '@storybook/react/types-6-0';
import Radio from './Radio';
import Container from '../container/Container';
import { DoifDataProps } from '../../props/DoifCommonProps';

export default {
  title: 'Components/Radio',
  component: Radio.type,
};

const Template: Story<ComponentProps<typeof Radio>> = (args) => {
  const [value, setValue] = useState('hi');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return <Radio {...args} value={value} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
  data: [
    { code: 'hi', name: '안녕하세요' },
    { code: 'hello', name: '반갑습니다.' },
  ],
  value: 'hi',
  name: 'radiobox1',
};

export const Colors = () => {
  const [value, setValue] = useState('hi');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const data = [
    { code: 'hi', name: '안녕하세요' },
    { code: 'hello', name: '반갑습니다.' },
  ];

  return (
    <Container>
      <Radio data={data} value={value} name="radiobox1" onChange={onChange} />
      <Radio
        color="secondary"
        data={data}
        value={value}
        name="radiobox1"
        onChange={onChange}
      />
    </Container>
  );
};

export const Disable = () => {
  const [value, setValue] = useState('hi');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const data = [
    { code: 'hi', name: '안녕하세요' },
    { code: 'hello', name: '반갑습니다.' },
  ];

  return (
    <Container>
      <Radio
        disabled
        data={data}
        value={value}
        name="radiobox1"
        onChange={onChange}
      />
      <Radio
        disabled
        color="secondary"
        data={data}
        value={value}
        name="radiobox1"
        onChange={onChange}
      />
    </Container>
  );
};

export const DefaultValue = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const data = [
    { code: 'hi', name: '안녕하세요' },
    { code: 'hello', name: '반갑습니다.' },
  ];

  const defaultValue: DoifDataProps = {
    code: '',
    name: '선택없음',
  };

  return (
    <Container>
      <Radio
        defaultValue={defaultValue}
        data={data}
        value={value}
        name="radiobox1"
        onChange={onChange}
      />
    </Container>
  );
};
