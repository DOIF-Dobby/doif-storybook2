import React, { useCallback, useEffect, useRef } from 'react';
import CodeMirror, { EditorFromTextArea, Editor } from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/display/placeholder';

interface MarkdownEditorProps {
  onChangeMarkdown: (markdown: string) => void;
  initialMarkdown?: string;
}

const MarkdownEditor = ({
  onChangeMarkdown,
  initialMarkdown,
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
      theme: 'one-light',
      lineWrapping: true,
      tabSize: 2,
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
    <textarea ref={textArea} style={{ border: 'none', display: 'none' }} />
  );
};

export default React.memo(MarkdownEditor);
