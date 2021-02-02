import React, {
  ChangeEvent,
  ComponentProps,
  useCallback,
  useState,
} from 'react';
import { Story } from '@storybook/react/types-6-0';
import Container from './Container';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import Input from '../input/Input';
import Check from '../check/Check';
import Radio from '../radio/Radio';
import Page from '../common/Page';
import Box from '../common/Box';

export default {
  title: 'Components/Container',
  component: Container.type,
  decorators: [
    (Story) => (
      <Page>
        <Box>{Story()}</Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof Container>> = (args) => (
  <Container {...args}>
    <Button>
      <Icon icon="check" />
      확인
    </Button>
    <Button variant="outline">
      <Icon icon="exit" />
      취소
    </Button>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  direction: 'row',
  align: 'left',
  gap: '0.5rem',
};

export const Direction = () => {
  return (
    <Container direction="column">
      <Button style={{ width: '100%' }}>
        <Icon icon="check" />
        확인
      </Button>
      <Button variant="outline" style={{ width: '100%' }}>
        <Icon icon="exit" />
        취소
      </Button>
    </Container>
  );
};

export const Align = () => {
  return (
    <>
      <Container align="left">
        <Button>
          <Icon icon="check" />
          확인
        </Button>
        <Button variant="outline">
          <Icon icon="exit" />
          취소
        </Button>
      </Container>
      <Container align="center">
        <Button>
          <Icon icon="check" />
          확인
        </Button>
        <Button variant="outline">
          <Icon icon="exit" />
          취소
        </Button>
      </Container>
      <Container align="right">
        <Button>
          <Icon icon="check" />
          확인
        </Button>
        <Button variant="outline">
          <Icon icon="exit" />
          취소
        </Button>
      </Container>
    </>
  );
};

export const RowGap = () => {
  return (
    <Container gap="2rem">
      <Button>
        <Icon icon="check" />
        확인
      </Button>
      <Button variant="outline">
        <Icon icon="exit" />
        취소
      </Button>
    </Container>
  );
};

export const ColumnGap = () => {
  return (
    <Container direction="column" gap="2rem">
      <Button style={{ width: '100%' }}>
        <Icon icon="check" />
        확인
      </Button>
      <Button variant="outline" style={{ width: '100%' }}>
        <Icon icon="exit" />
        취소
      </Button>
    </Container>
  );
};

export const VariousCase = () => {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState('hi');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value: codeValue } = e.target;

    setValues((value) =>
      checked
        ? value.concat(codeValue)
        : value.filter((val) => val !== codeValue),
    );
  }, []);

  const onChageRadio = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const data = [
    { code: 'hi', name: '안녕하세요' },
    { code: 'hello', name: '반갑습니다.' },
  ];

  return (
    <Container>
      <Input />
      <Check data={data} values={values} name="checkbox1" onChange={onChange} />
      <Radio
        data={data}
        value={value}
        name="radiobox1"
        onChange={onChageRadio}
      />
      <Button>안녕하세요</Button>
    </Container>
  );
};

export const CustomStyle = () => {
  return (
    <Container style={{ backgroundColor: '#fab', padding: '10px' }}>
      <div>안녕하신가요</div>
      <div>
        <ul>
          <li>즐거운</li>
          <li>코딩</li>
          <li>되시길</li>
        </ul>
      </div>
    </Container>
  );
};
