import React from 'react';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import Button from '../button/Button';
import Container from '../container/Container';
import Icon from '../icon/Icon';
import Overlay from '../overlay/Overlay';
import { StyledDialog } from './Dialog.style';

export interface DialogProps {
  /** `true`: 화면에 나타남, `false`: 화면에서 사라짐 */
  visible: boolean;
  /** `Dialog` 컴포넌트 상단에 표시되는 글자 */
  title?: string;
  /** `Dialog` 컴포넌트 유형  `undefined`가 아니면 icon과 버튼이 나옴 */
  type?: 'success' | 'warning' | 'error' | 'info';
  /** `Dialog` 컴포넌트의 z-index 속성 */
  zIndex: number;
  /** `Dialog` 컴포넌트에 넣을 커스텀한 ReactNode */
  children?: React.ReactNode;
  /** `Dialog` 컴포넌트의 색상을 정함 */
  color: DoifColorType;
  /** 확인/취소 여부를 묻는 confrim 창 여부, `true`: confrim창 `false`: Alert창  `true`면 취소버튼이 나옴 */
  isConfirm: boolean;
  /** 확인 버튼 텍스트명 */
  confirmText: string;
  /** 취소 버튼 텍스명 */
  cancelText: string;
  /** 확인 버튼 클릭 시 실행할 콜백함수 */
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** 취소 버튼 클릭 시 실행할 콜백함수 */
  onCancel?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * `Dialog` 컴포넌트는 메시지를 띄울 때 사용합니다.
 */
const Dialog = ({
  visible,
  title,
  type,
  zIndex,
  children,
  color,
  isConfirm,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: DialogProps) => {
  // visible이 false면 null return
  if (!visible) return null;

  return (
    <div className="overlay">
      <Overlay zIndex={zIndex} />
      <StyledDialog zIndex={zIndex + 1} type={type}>
        <Container direction="column" gap="1rem">
          {title && <div className="title">{title}</div>}
          <div className="content">
            {type && (
              <div className="icon-container">{<Icon icon={type} />}</div>
            )}
            {children && <div className="children-container">{children}</div>}
            {type && (
              <Container align="center" className="button-container">
                <Button
                  color={color}
                  onClick={onConfirm}
                  className="confirm-button"
                >
                  {confirmText}
                </Button>
                {isConfirm && (
                  <Button color={color} variant="ghost" onClick={onCancel}>
                    {cancelText}
                  </Button>
                )}
              </Container>
            )}
          </div>
        </Container>
      </StyledDialog>
    </div>
  );
};

Dialog.defaultProps = {
  zIndex: 1200,
  color: 'primary',
  isConfirm: false,
  confirmText: '확인',
  cancelText: '취소',
};

export default React.memo(Dialog);
