import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Button from './Button';
import Icon from '../icon/Icon';

export default {
  title: 'Components/Button',
  component: Button.type,
};

const ButtonWrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;

  > div + div {
    margin-left: 5px;
  }
`;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: '버튼',
};

export const Varaints = () => {
  return (
    <ButtonWrapper>
      <Button>Fill</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </ButtonWrapper>
  );
};

export const Colors = () => {
  return (
    <ButtonWrapper>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </ButtonWrapper>
  );
};

export const Sizes = () => {
  return (
    <ButtonWrapper>
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
    </ButtonWrapper>
  );
};

export const Disable = () => {
  return (
    <ButtonWrapper>
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
    </ButtonWrapper>
  );
};

export const ClickAction = () => {
  const onClick = () => alert('버튼을 클릭하셨군요!');

  return (
    <ButtonWrapper>
      <Button variant="outline" color="secondary" onClick={onClick}>
        버튼
      </Button>
    </ButtonWrapper>
  );
};

export const CustomStyle = () => {
  return (
    <Button style={{ backgroundColor: '#fab', width: '50%' }}>버튼</Button>
  );
};

export const WithIcon = () => {
  return (
    <>
      <ButtonWrapper>
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
      </ButtonWrapper>
      <br />
      <ButtonWrapper>
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
      </ButtonWrapper>
      <br />
      <ButtonWrapper>
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
      </ButtonWrapper>
      <br />
      <ButtonWrapper>
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
      </ButtonWrapper>
    </>
  );
};

export const OnlyIcon = () => {
  return (
    <>
      <ButtonWrapper>
        <Button iconOnly>
          <Icon icon="heart" />
        </Button>
        <Button variant="outline" iconOnly>
          <Icon icon="heart" />
        </Button>
        <Button variant="ghost" iconOnly>
          <Icon icon="heart" />
        </Button>
      </ButtonWrapper>
      <br />
      <ButtonWrapper>
        <Button color="secondary" size="small" iconOnly>
          <Icon icon="heart" color="secondary" size="small" />
        </Button>
        <Button variant="outline" color="secondary" iconOnly>
          <Icon icon="heart" color="secondary" />
        </Button>
        <Button variant="ghost" color="secondary" size="large" iconOnly>
          <Icon icon="heart" color="secondary" size="large" />
        </Button>
      </ButtonWrapper>
      <br />
      <ButtonWrapper>
        <Button disabled iconOnly>
          <Icon icon="heart" />
        </Button>
        <Button variant="outline" disabled iconOnly>
          <Icon icon="heart" />
        </Button>
        <Button variant="ghost" disabled iconOnly>
          <Icon icon="heart" />
        </Button>
      </ButtonWrapper>
      <br />
      <ButtonWrapper>
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
      </ButtonWrapper>
    </>
  );
};
