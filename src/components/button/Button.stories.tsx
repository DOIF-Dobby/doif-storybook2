import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button from './Button';
import Icon from '../icon/Icon';
import Container from '../container/Container';
import Page from '../common/Page';
import Box from '../common/Box';
import SaveButton from './SaveButton';
import CloseButton from './CloseButton';

export default {
  title: 'Components/Button',
  component: Button.type,
  decorators: [
    (Story) => (
      <Page>
        <Box>{Story()}</Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: '버튼',
};

export const Varaints = () => {
  return (
    <Container>
      <Button>Fill</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </Container>
  );
};

export const Colors = () => {
  return (
    <Container>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </Container>
  );
};

export const Width = () => {
  return (
    <Container>
      <Button width="50%">Primary</Button>
      <Button width="200px" color="secondary">
        Secondary
      </Button>
    </Container>
  );
};

export const Sizes = () => {
  return (
    <Container>
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
    </Container>
  );
};

export const Disable = () => {
  return (
    <Container>
      <Button disabled>Fill</Button>
      <Button disabled variant="outline">
        Outline
      </Button>
      <Button disabled variant="ghost">
        Ghost
      </Button>
      <Button disabled color="secondary">
        Fill
      </Button>
      <Button disabled variant="outline" color="secondary">
        Outline
      </Button>
      <Button disabled variant="ghost" color="secondary">
        Ghost
      </Button>
    </Container>
  );
};

export const ClickAction = () => {
  const onClick = () => alert('버튼을 클릭하셨군요!');

  return (
    <Container>
      <Button variant="outline" color="secondary" onClick={onClick}>
        버튼
      </Button>
    </Container>
  );
};

export const CustomStyle = () => {
  return (
    <Button style={{ backgroundColor: '#fab', color: '#f00' }}>버튼</Button>
  );
};

export const WithIcon = () => {
  return (
    <>
      <Container>
        <Button>
          <Icon icon="heart" />
          버튼
        </Button>
        <Button variant="outline">
          <Icon icon="heart" />
          버튼
        </Button>
        <Button variant="ghost">
          <Icon icon="heart" />
          버튼
        </Button>
      </Container>
      <br />
      <Container>
        <Button color="secondary" size="small">
          버튼
          <Icon icon="exit" color="secondary" size="small" />
        </Button>
        <Button variant="outline" color="secondary">
          버튼
          <Icon icon="check" color="secondary" />
        </Button>
        <Button variant="ghost" color="secondary" size="large">
          버튼
          <Icon icon="calendar" color="secondary" size="large" />
        </Button>
      </Container>
      <br />
      <Container>
        <Button disabled>
          <Icon icon="heart" />
          버튼
        </Button>
        <Button variant="outline" disabled>
          <Icon icon="heart" />
          버튼
        </Button>
        <Button variant="ghost" disabled>
          <Icon icon="heart" />
          버튼
        </Button>
      </Container>
      <br />
      <Container>
        <Button>
          <Icon icon="heart" style={{ fill: '#f00' }} />
          버튼
        </Button>
        <Button style={{ backgroundColor: '#fab', borderRadius: '20px' }}>
          <Icon icon="heart" style={{ fill: 'yellow' }} />
          버튼
        </Button>
        <Button
          style={{ backgroundColor: '#fab', borderRadius: '20px' }}
          disabled
        >
          <Icon icon="heart" style={{ fill: '#aaffb8' }} />
          버튼
        </Button>
      </Container>
    </>
  );
};

export const OnlyIcon = () => {
  return (
    <>
      <Container>
        <Button iconOnly>
          <Icon icon="heart" />
        </Button>
        <Button variant="outline" iconOnly>
          <Icon icon="heart" />
        </Button>
        <Button variant="ghost" iconOnly>
          <Icon icon="heart" />
        </Button>
      </Container>
      <br />
      <Container>
        <Button color="secondary" size="small" iconOnly>
          <Icon icon="heart" color="secondary" size="small" />
        </Button>
        <Button variant="outline" color="secondary" iconOnly>
          <Icon icon="heart" color="secondary" />
        </Button>
        <Button variant="ghost" color="secondary" size="large" iconOnly>
          <Icon icon="heart" color="secondary" size="large" />
        </Button>
      </Container>
      <br />
      <Container>
        <Button disabled iconOnly>
          <Icon icon="heart" />
        </Button>
        <Button variant="outline" disabled iconOnly>
          <Icon icon="heart" />
        </Button>
        <Button variant="ghost" disabled iconOnly>
          <Icon icon="heart" />
        </Button>
      </Container>
      <br />
      <Container>
        <Button iconOnly>
          <Icon icon="heart" style={{ fill: '#f00' }} />
        </Button>
        <Button
          style={{
            backgroundColor: '#fab',
            borderRadius: '1.25rem',
            width: '2.5rem',
            height: '2.5rem',
          }}
          iconOnly
        >
          <Icon icon="heart" style={{ fill: 'yellow' }} />
        </Button>
        <Button
          style={{ backgroundColor: '#fab', borderRadius: '20px' }}
          disabled
          iconOnly
        >
          <Icon icon="heart" style={{ fill: '#aaffb8' }} />
        </Button>
      </Container>
    </>
  );
};

export const SaveAndCloseButton = () => {
  return (
    <Container>
      <SaveButton />
      <CloseButton />
    </Container>
  );
};
