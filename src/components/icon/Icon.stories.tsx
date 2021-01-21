import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Icon, { iconTypes } from './Icon';
import Container from '../container/Container';

export default {
  title: 'Components/Icon',
  component: Icon.type,
};

const ListIconWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;

const Template: Story<ComponentProps<typeof Icon>> = (args) => (
  <Icon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: 'heart',
};

export const Colors = () => {
  return (
    <Container>
      <Icon icon="heart" />
      <Icon icon="heart" color="secondary" />
      <Icon icon="exit" />
      <Icon icon="exit" color="secondary" />
      <Icon icon="calendar" />
      <Icon icon="calendar" color="secondary" />
    </Container>
  );
};

export const CustomStyle = () => {
  return (
    <Container>
      <Icon icon="heart" style={{ fill: '#f00', width: '4rem' }} />
    </Container>
  );
};

export const ListOfIcons = () => {
  return (
    <ListIconWrapper>
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </ListIconWrapper>
  );
};
