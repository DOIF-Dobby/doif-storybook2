import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Overlay from './Overlay';

export default {
  title: 'Components/Overlay',
  component: Overlay.type,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '300px',
    },
  },
};

const Template: Story<ComponentProps<typeof Overlay>> = (args) => {
  return <Overlay {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  zIndex: 1000,
};
