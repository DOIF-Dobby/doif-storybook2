import React, { ComponentProps, useCallback, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import MarkdownEditor from './MarkdownEditor';
import Container from '../container/Container';
import Page from '../common/Page';
import Box from '../common/Box';
import { markdown } from './defaultMarkdown';

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
  const [content, setContent] = useState(markdown);

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  return <MarkdownEditor content={content} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {};
