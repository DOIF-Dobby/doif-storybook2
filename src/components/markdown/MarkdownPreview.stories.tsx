import React, { ComponentProps, useCallback, useRef, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import MarkdownPreview from './MarkdownPreview';
import Page from '../common/Page';
import Box from '../common/Box';
import { defaultMarkdown } from './defaultMarkdown';
import marked from 'marked';

export default {
  title: 'Components/MarkdownPreview',
  component: MarkdownPreview.type,
  decorators: [
    (Story) => (
      <Page>
        <Box>{Story()}</Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof MarkdownPreview>> = (args) => {
  return <MarkdownPreview {...args} markdown={marked(defaultMarkdown)} />;
};

export const Default = Template.bind({});
Default.args = {
  prismTheme: 'default',
};
