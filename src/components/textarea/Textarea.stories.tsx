import React, { ComponentProps, useCallback, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Textarea from './Textarea';
import Container from '../container/Container';
import Page from '../common/Page';
import Box from '../common/Box';

export default {
  title: 'Components/Textarea',
  component: Textarea.type,
  decorators: [
    (Story) => (
      <Page>
        <Box>{Story()}</Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof Textarea>> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: '값을 입력하세요',
};

export const Colors = () => {
  return (
    <Container>
      <Textarea placeholder="primary" />
      <Textarea color="secondary" placeholder="secondary" />
    </Container>
  );
};

export const Disable = () => {
  return <Textarea placeholder="disable" disabled />;
};

export const Width = () => {
  return (
    <Container>
      <Textarea placeholder="30%" width="30%" />
      <Textarea placeholder="300px" width="300px" />
    </Container>
  );
};

export const Resize = () => {
  return (
    <Container>
      <Textarea placeholder="both" resize="both" />
      <Textarea placeholder="horizontal" resize="horizontal" />
      <Textarea placeholder="vertical" resize="vertical" />
    </Container>
  );
};

export const Rows = () => {
  return (
    <Container>
      <Textarea placeholder="5" rows={5} />
      <Textarea placeholder="10" rows={10} />
      <Textarea placeholder="20" rows={20} />
    </Container>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Textarea
      placeholder="Controlled textarea"
      onChange={onChange}
      value={value}
    />
  );
};

export const CustomStyle = () => {
  return (
    <Textarea
      placeholder="Custom Style"
      style={{ backgroundColor: '#fab', color: 'yellow' }}
    />
  );
};
