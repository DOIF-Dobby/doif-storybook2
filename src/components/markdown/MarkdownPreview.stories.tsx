import React, { ComponentProps, useCallback, useRef, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import MarkdownPreview from './MarkdownPreview';
import MarkdownEditor from './MarkdownEditor';
import Container from '../container/Container';
import Textarea from '../textarea/Textarea';
import Tab from '../tab/Tab';
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
  const [content, setContent] = useState(defaultMarkdown);
  const [selected, setSelected] = useState('TAB_WRITE');

  const onChangeMarkdown = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    },
    [],
  );

  const onChangeMarkdown2 = useCallback((markdown: string) => {
    setContent(markdown);
  }, []);

  const onChangeTab = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  }, []);

  const tabs = [
    {
      id: 'TAB_WRITE',
      name: 'Write',
      disabled: false,
      content: (
        // <Textarea value={content} onChange={onChangeMarkdown}>
        //   탭 1입니다.
        // </Textarea>
        <MarkdownEditor
          onChangeMarkdown={onChangeMarkdown2}
          initialMarkdown={content}
        />
      ),
    },
    {
      id: 'TAB_PREVIEW',
      name: 'Preview',
      disabled: false,
      content: (
        <Container>
          <MarkdownPreview {...args} markdown={marked(content)} />
        </Container>
      ),
    },
  ];

  return (
    <Tab
      tabs={tabs}
      selected={selected}
      name="tab-sample"
      onChange={onChangeTab}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  prismTheme: 'default',
};
