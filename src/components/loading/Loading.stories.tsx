import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Loading from './Loading';
import Container from '../container/Container';

export default {
  title: 'Components/Loading',
  component: Loading.type,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '300px',
    },
  },
};

const Template: Story<ComponentProps<typeof Loading>> = (args) => {
  return (
    <Container direction="column">
      <Loading />
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = {
  zIndex: 1300,
};
