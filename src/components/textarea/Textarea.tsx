import React from 'react';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import { StyledTextarea } from './Textarea.style';

interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  /** textarea의 색을 정합니다. */
  color: DoifColorType;
  /** textarea의 넓이를 설정합니다. */
  width: string | number;
  /** textarea을 비활성화 시킵니다. */
  disabled: boolean;
  /** textarea의 크기 조정 옵션을 설정합니다. */
  resize: 'none' | 'both' | 'vertical' | 'horizontal';
  /** textarea의 `rows` 속성을 설정합니다. */
  rows: number;
  /** placeholder를 설정합니다. */
  placeholder?: string;
}

/**
 * `Textarea` 컴포넌트는 긴 문자열을 입력할 때 사용합니다.
 */
const Textarea = ({
  color,
  width,
  disabled,
  placeholder,
  resize,
  rows,
  ...props
}: TextareaProps) => {
  return (
    <StyledTextarea
      color={color}
      width={width}
      disabled={disabled}
      resize={resize}
    >
      <textarea
        title={placeholder}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        {...props}
      />
    </StyledTextarea>
  );
};

Textarea.defaultProps = {
  color: 'primary',
  width: '100%',
  disabled: false,
  resize: 'none',
  rows: 10,
};

export default React.memo(Textarea);
