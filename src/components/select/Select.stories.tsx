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
import Page from '../common/Page';
import Box from '../common/Box';
import Icon from '../icon/Icon';

export default {
  title: 'Components/Select',
  component: Select.type,
  decorators: [
    (Story) => (
      <Page>
        <Box>
          <div style={{ height: '250px' }}>{Story()}</div>
        </Box>
      </Page>
    ),
  ],
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
  placeholder: '결제수단',
};

export const Variants = () => {
  const [value, setValue] = useState('CC');

  const data: Array<DoifDataProps> = [
    { code: 'CC', name: '신용카드' },
    { code: 'AT', name: '계좌이체' },
  ];

  const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Container>
      <Select data={data} value={value} onChange={onChange} />
      <Select
        variant="underline"
        data={data}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export const Colors = () => {
  const [value, setValue] = useState('CC');

  const data: Array<DoifDataProps> = [
    { code: 'CC', name: '신용카드' },
    { code: 'AT', name: '계좌이체' },
  ];

  const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Container>
      <Select data={data} value={value} onChange={onChange} color="secondary" />
      <Select
        variant="underline"
        data={data}
        value={value}
        onChange={onChange}
        color="secondary"
      />
    </Container>
  );
};

export const Disable = () => {
  const [value, setValue] = useState('CC');

  const data: Array<DoifDataProps> = [
    { code: 'CC', name: '신용카드' },
    { code: 'AT', name: '계좌이체' },
  ];

  const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Container>
      <Select data={data} value={value} onChange={onChange} disabled />
      <Select
        variant="underline"
        data={data}
        value={value}
        onChange={onChange}
        disabled
      />
    </Container>
  );
};

export const Width = () => {
  const [value, setValue] = useState('CC');

  const data: Array<DoifDataProps> = [
    { code: 'CC', name: '신용카드' },
    { code: 'AT', name: '계좌이체' },
  ];

  const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Container>
      <Select data={data} value={value} onChange={onChange} width="50%" />
      <Select
        variant="underline"
        data={data}
        value={value}
        onChange={onChange}
        width="170px"
      />
    </Container>
  );
};

export const Height = () => {
  const [value, setValue] = useState('CODE_1');

  const data: Array<DoifDataProps> = [
    { code: 'CODE_1', name: '코드명 1' },
    { code: 'CODE_2', name: '코드명 2' },
    { code: 'CODE_3', name: '코드명 3' },
    { code: 'CODE_4', name: '코드명 4' },
    { code: 'CODE_5', name: '코드명 5' },
    { code: 'CODE_6', name: '코드명 6' },
    { code: 'CODE_7', name: '코드명 7' },
    { code: 'CODE_8', name: '코드명 8' },
    { code: 'CODE_9', name: '코드명 9' },
    { code: 'CODE_10', name: '코드명 10' },
    { code: 'CODE_11', name: '코드명 11' },
    { code: 'CODE_12', name: '코드명 12' },
  ];

  const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Container>
      <Select data={data} value={value} onChange={onChange} />
      <Select data={data} value={value} onChange={onChange} height="250px" />
    </Container>
  );
};

export const DefaultValue = () => {
  const [value, setValue] = useState('');

  const data: Array<DoifDataProps> = [
    { code: 'CC', name: '신용카드' },
    { code: 'AT', name: '계좌이체' },
  ];

  const defaultValue: DoifDataProps = {
    code: '',
    name: '선택없음',
  };

  const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Container>
      <Select
        data={data}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      />
      <Select
        variant="underline"
        data={data}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </Container>
  );
};

export const RenderReactNode = () => {
  const [value, setValue] = useState('');

  const data: Array<DoifDataProps> = [
    {
      code: 'CC',
      name: '신용카드',
      render: (
        <Container>
          <Icon icon="gear" />
          <div>신용카드</div>
        </Container>
      ),
    },
    { code: 'AT', name: '계좌이체' },
  ];

  const defaultValue: DoifDataProps = {
    code: '',
    name: '선택없음',
  };

  const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Container>
      <Select
        data={data}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      />
      <Select
        variant="underline"
        data={data}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </Container>
  );
};
