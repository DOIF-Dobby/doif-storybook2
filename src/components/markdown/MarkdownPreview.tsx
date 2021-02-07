import React, { useEffect } from 'react';
import marked from 'marked';
import Prism from 'prismjs';
import './prism-imports';
import { themes, PrismThemes } from './MarkdownPreview.style';

interface MarkdownPreviewProps {
  /** 마크다운 내용 */
  content: string;
  /** 마크다운 코드 스타일 테마 */
  prismTheme: PrismThemes;
}

/**
 * `MarkdownPreview` 컴포넌트는 마크다운 문법을 마크다운 형식으로 변환해서 화면에 렌더링해주는 컴포넌트입니다.
 *
 * `theme` 속성은 https://prismjs.com/ 이곳을 참조하세요.
 */
const MarkdownPreview = ({ content, prismTheme }: MarkdownPreviewProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [content, prismTheme]);

  const StyledMarkdown = themes[prismTheme];

  return (
    <StyledMarkdown
      dangerouslySetInnerHTML={{
        __html: marked(content),
      }}
    />
  );
};

MarkdownPreview.defaultProps = {
  prismTheme: 'default',
};

export default React.memo(MarkdownPreview);
