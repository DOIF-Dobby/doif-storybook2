import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button.type,
};

const ButtonWrapper = styled.div`
  display: flex;
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
  disabled: false,
  color: 'primary',
  variant: 'fill',
  size: 'medium',
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
      <Button onClick={onClick}>버튼</Button>
    </ButtonWrapper>
  );
};
