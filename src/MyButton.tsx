import React from 'react';

interface MyButtonPrpos {
  /** 안녕하세요 */
  label: string;
}

/**
 * 버튼 입니다
 */
export const MyButton = ({ label, ...props }: MyButtonPrpos) => {
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
};
