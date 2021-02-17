import React, { ComponentProps, useCallback, useRef, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import MarkdownEditor from './MarkdownEditor';
import Page from '../common/Page';
import Box from '../common/Box';
import { defaultMarkdown } from './defaultMarkdown';

export default {
  title: 'Components/MarkdownEditor',
  component: MarkdownEditor.type,
  decorators: [
    (Story) => (
      <Page>
        <Box>{Story()}</Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof MarkdownEditor>> = (args) => {
  const [content, setContent] = useState(defaultMarkdown);

  const onChangeMarkdown = useCallback((markdown: string) => {
    setContent(markdown);
  }, []);

  return (
    <MarkdownEditor
      {...args}
      onChangeMarkdown={onChangeMarkdown}
      content={content}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  width: '100%',
  disabled: false,
};
