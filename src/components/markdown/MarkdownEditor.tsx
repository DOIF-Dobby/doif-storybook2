import React, { useCallback, useEffect, useRef } from 'react';
import CodeMirror, { EditorFromTextArea, Editor } from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';
// import 'codemirror/theme/idea.css';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import { StyledMarkdownEditor } from './MarkdownEditor.style';

interface MarkdownEditorProps {
  /** markdown의 색을 정합니다. */
  color: DoifColorType;
  /** markdown의 넓이를 설정합니다. */
  width: string | number;
  /** markdown을 비활성화 시킵니다. */
  disabled: boolean;
  /** markdown 내용입니다. */
  content: string;
  /** markdown을 변경했을 때 실행되는 콜백함수 입니다. */
  onChangeMarkdown: (markdown: string) => void;
}

/**
 * `MarkdownEditor` 컴포넌트는 마크다운을 작성할 때 사용하는 컴포넌트입니다.
 */
const MarkdownEditor = ({
  color,
  width,
  disabled,
  onChangeMarkdown,
  content: initialMarkdown,
}: MarkdownEditorProps) => {
  const textArea = useRef<HTMLTextAreaElement | null>(null);
  const codemirror = useRef<EditorFromTextArea | null>(null);

  const onChange = useCallback(
    (cm: Editor) => {
      onChangeMarkdown(cm.getValue());
    },
    [onChangeMarkdown],
  );

  // initialize editor
  useEffect(() => {
    if (!textArea.current) return;
    const cm = CodeMirror.fromTextArea(textArea.current, {
      mode: 'markdown',
      theme: 'doif',
      lineWrapping: true,
      tabSize: 2,
      readOnly: disabled,
    });
    codemirror.current = cm;
    cm.focus();
    cm.on('change', onChange);

    if (initialMarkdown) {
      cm.setValue(initialMarkdown);
    }

    cm.setCursor(cm.lineCount(), 0);

    return () => {
      cm.toTextArea();
    };
  }, [onChange]);

  return (
    <StyledMarkdownEditor color={color} width={width} disabled={disabled}>
      <textarea ref={textArea} style={{ border: 'none', display: 'none' }} />
    </StyledMarkdownEditor>
  );
};

MarkdownEditor.defaultProps = {
  color: 'primary',
  width: '100%',
  disabled: false,
  content: '',
};

export default React.memo(MarkdownEditor);
