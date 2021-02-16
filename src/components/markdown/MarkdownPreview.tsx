import React, { useEffect } from 'react';
import Prism from 'prismjs';
import './prism-imports';
import { themes, PrismThemes } from './MarkdownPreview.style';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface MarkdownPreviewProps {
  /** 마크다운 내용 */
  markdown: string;
  /** 마크다운 코드 스타일 테마 */
  prismTheme: PrismThemes;
  /** 마크다운 색상 */
  color: DoifColorType;
}

/**
 * `MarkdownPreview` 컴포넌트는 마크다운 문법을 마크다운 형식으로 변환해서 화면에 렌더링해주는 컴포넌트입니다.
 *
 * `theme` 속성은 https://prismjs.com/ 이곳을 참조하세요.
 */
const MarkdownPreview = ({
  markdown,
  prismTheme,
  color,
}: MarkdownPreviewProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [markdown, prismTheme]);

  const StyledMarkdown = themes[prismTheme];

  return (
    <StyledMarkdown
      color={color}
      dangerouslySetInnerHTML={{
        __html: markdown,
      }}
    />
  );
};

MarkdownPreview.defaultProps = {
  prismTheme: 'default',
  color: 'primary',
};

export default React.memo(MarkdownPreview);
