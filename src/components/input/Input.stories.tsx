import React, { ComponentProps, useCallback, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Input from './Input';
import Container from '../container/Container';
import Icon from '../icon/Icon';
import Page from '../common/Page';
import Box from '../common/Box';

export default {
  title: 'Components/Input',
  component: Input.type,
  decorators: [
    (Story) => (
      <Page>
        <Box>{Story()}</Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof Input>> = (args) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: '값을 입력하세요',
};

export const Variants = () => {
  return (
    <Container>
      <Input placeholder="가맹점ID" />
      <Input variant="underline" placeholder="가맹점ID" />
    </Container>
  );
};

export const Colors = () => {
  return (
    <Container direction="column" gap="1rem">
      <Container>
        <Input placeholder="가맹점ID" />
        <Input variant="underline" placeholder="가맹점ID" />
      </Container>
      <Container>
        <Input placeholder="가맹점ID" color="secondary" />
        <Input variant="underline" placeholder="가맹점ID" color="secondary" />
      </Container>
    </Container>
  );
};

export const Disable = () => {
  return (
    <Container>
      <Input placeholder="가맹점ID" disabled />
      <Input variant="underline" placeholder="가맹점ID" disabled />
    </Container>
  );
};

export const Width = () => {
  return (
    <Container>
      <Input placeholder="가맹점ID" width="200px" />
      <Input variant="underline" placeholder="가맹점ID" width="50%" />
    </Container>
  );
};

export const OtherType = () => {
  return (
    <Container>
      <Input type="file" />
      <Input variant="underline" type="password" placeholder="Paasword" />
    </Container>
  );
};

export const WithIcon = () => {
  return (
    <Container direction="column" gap="1rem">
      <Container>
        <Input placeholder="가맹점ID" frontIcon={<Icon icon="heart" />} />
        <Input
          placeholder="가맹점ID"
          color="secondary"
          frontIcon={<Icon icon="heart" color="secondary" />}
        />
        <Input
          placeholder="가맹점ID"
          variant="underline"
          frontIcon={<Icon icon="heart" />}
        />
        <Input
          placeholder="가맹점ID"
          variant="underline"
          color="secondary"
          frontIcon={<Icon icon="heart" color="secondary" />}
        />
      </Container>
      <Container>
        <Input placeholder="가맹점ID" backIcon={<Icon icon="heart" />} />
        <Input
          placeholder="가맹점ID"
          color="secondary"
          backIcon={<Icon icon="heart" color="secondary" />}
        />
        <Input
          placeholder="가맹점ID"
          variant="underline"
          backIcon={<Icon icon="heart" />}
        />
        <Input
          placeholder="가맹점ID"
          variant="underline"
          color="secondary"
          backIcon={<Icon icon="heart" color="secondary" />}
        />
      </Container>
      <Container>
        <Input
          placeholder="가맹점ID"
          frontIcon={<Icon icon="heart" />}
          disabled
        />
        <Input
          placeholder="가맹점ID"
          color="secondary"
          disabled
          frontIcon={<Icon icon="heart" color="secondary" />}
        />
        <Input
          placeholder="가맹점ID"
          variant="underline"
          disabled
          backIcon={<Icon icon="heart" />}
        />
        <Input
          placeholder="가맹점ID"
          variant="underline"
          color="secondary"
          disabled
          backIcon={<Icon icon="heart" color="secondary" />}
        />
      </Container>
      <Container>
        <Input
          placeholder="가맹점ID"
          frontIcon={<Icon icon="heart" style={{ fill: '#f00' }} />}
          backIcon={<Icon icon="heart" style={{ fill: '#f00' }} />}
        />
        <Input
          placeholder="가맹점ID"
          variant="underline"
          frontIcon={<Icon icon="heart" />}
          backIcon={<Icon icon="downArrow" />}
        />
      </Container>
    </Container>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return <Input value={value} onChange={onChange} />;
};

export const CustomStyle = () => {
  return (
    <Input
      placeholder="Custom Style"
      style={{
        backgroundColor: '#fab',
        borderColor: 'yellow',
        borderWidth: '3px',
      }}
    />
  );
};
