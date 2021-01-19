import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import Icon, { iconTypes } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon.type,
};

const IconWrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;

  > div + div {
    margin-left: 5px;
  }
`;

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
    <IconWrapper>
      <Icon icon="heart" />
      <Icon icon="heart" color="secondary" />
      <Icon icon="exit" />
      <Icon icon="exit" color="secondary" />
      <Icon icon="calendar" />
      <Icon icon="calendar" color="secondary" />
    </IconWrapper>
  );
};

export const CustomStyle = () => {
  return (
    <IconWrapper>
      <Icon icon="heart" style={{ fill: '#f00', width: '4rem' }} />
    </IconWrapper>
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
