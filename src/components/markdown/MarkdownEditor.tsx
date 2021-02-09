import React from 'react';
import { StyledMarkdownEditor } from './MarkdownEditor.style';
import { PrismThemes } from './MarkdownPreview.style';
import SplitPane, { Pane } from 'react-split-pane';
import Textarea from '../textarea/Textarea';
import MarkdownPreview from './MarkdownPreview';

interface MarkdownEditorProps {
  /** 마크다운 내용 */
  content: string;
  /** 마크다운 코드 스타일 테마 */
  prismTheme: PrismThemes;
  /** 마크다운 컨텐츠 Chnage 콜백 함수 */
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * `MarkdownEditor` 컴포넌트는 마크다운 형식의 글을 작성할 수 있게 해주는 컴포넌트입니다.
 *
 * `theme` 속성은 https://prismjs.com/ 이곳을 참조하세요.
 */
const MarkdownEditor = ({
  content,
  prismTheme,
  onChange,
}: MarkdownEditorProps) => {
  return (
    <StyledMarkdownEditor>
      <SplitPane
        split="vertical"
        defaultSize="50%"
        style={{ position: 'relative' }}
      >
        <Textarea
          value={content}
          onChange={onChange}
          style={{ height: '100%' }}
        />
        <MarkdownPreview content={content} prismTheme={prismTheme} />
      </SplitPane>
    </StyledMarkdownEditor>
  );
};

MarkdownEditor.defaultProps = {
  prismTheme: 'default',
};

export default React.memo(MarkdownEditor);
