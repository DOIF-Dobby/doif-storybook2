import React, {
  ChangeEvent,
  ComponentProps,
  useCallback,
  useState,
} from 'react';
import { Story } from '@storybook/react/types-6-0';
import Check from './Check';
import Container from '../container/Container';

export default {
  title: 'Components/Check',
  component: Check.type,
};

const Template: Story<ComponentProps<typeof Check>> = (args) => {
  const [values, setValues] = useState([]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value: codeValue } = e.target;

    setValues((value) =>
      checked
        ? value.concat(codeValue)
        : value.filter((val) => val !== codeValue),
    );
  }, []);

  return <Check {...args} values={values} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
  data: [
    { code: 'hi', name: '안녕하세요' },
    { code: 'hello', name: '반갑습니다.' },
  ],
  values: [],
  name: 'checkbox1',
};

export const Colors = () => {
  const [values, setValues] = useState([]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value: codeValue } = e.target;

    setValues((value) =>
      checked
        ? value.concat(codeValue)
        : value.filter((val) => val !== codeValue),
    );
  }, []);

  const data = [
    { code: 'hi', name: '안녕하세요' },
    { code: 'hello', name: '반갑습니다.' },
  ];

  return (
    <Container>
      <Check data={data} values={values} name="checkbox1" onChange={onChange} />
      <Check
        color="secondary"
        data={data}
        values={values}
        name="checkbox2"
        onChange={onChange}
      />
    </Container>
  );
};

export const Disable = () => {
  const [values, setValues] = useState(['hi', 'hello']);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value: codeValue } = e.target;

    setValues((value) =>
      checked
        ? value.concat(codeValue)
        : value.filter((val) => val !== codeValue),
    );
  }, []);

  const data = [
    { code: 'hi', name: '안녕하세요' },
    { code: 'hello', name: '반갑습니다.' },
  ];

  return (
    <Container>
      <Check
        data={data}
        values={values}
        name="checkbox1"
        onChange={onChange}
        disabled
      />
      <Check
        color="secondary"
        data={data}
        values={values}
        name="checkbox2"
        onChange={onChange}
        disabled
      />
    </Container>
  );
};

export const Icons = () => {
  const [values, setValues] = useState([]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value: codeValue } = e.target;

    setValues((value) =>
      checked
        ? value.concat(codeValue)
        : value.filter((val) => val !== codeValue),
    );
  }, []);

  const data = [
    { code: 'hi', name: '안녕하세요' },
    { code: 'hello', name: '반갑습니다.' },
  ];

  return (
    <Container>
      <Check
        icon="exit"
        data={data}
        values={values}
        name="checkbox1"
        onChange={onChange}
      />
      <Check
        icon="heart"
        color="secondary"
        data={data}
        values={values}
        name="checkbox2"
        onChange={onChange}
      />
    </Container>
  );
};
