import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { DraggableContainer } from '../common/DraggableContainer';
import Container from '../container/Container';
import Overlay from '../overlay/Overlay';
import { StyledModal } from './Modal.style';

interface ModalProps {
  /** `true`: 화면에 나타남, `false`: 화면에서 사라짐 */
  visible: boolean;
  /** `Modal` 컴포넌트 상단에 표시되는 글자 */
  title?: string;
  /** `Modal` 컴포넌트의 z-index 속성 */
  zIndex: number;
  /** `Modal` 컴포넌트의 넓이 속성 */
  width: string;
  /** `Modal` 컴포넌트에 넣을 커스텀한 ReactNode */
  children?: React.ReactNode;
}

/**
 * `Modal` 컴포넌트는 등록/수정창 같은 모달을 띄울 때 사용합니다.
 */
const Modal = ({ visible, title, zIndex, width, children }: ModalProps) => {
  // visible이 false면 null return
  if (!visible) return null;

  const [dragState, setDragState] = useState({
    x: 0,
    y: 0,
    isRendered: false,
  });

  const itemRef: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    setDragState({
      x: itemRef.current ? itemRef.current.getBoundingClientRect().x : 0,
      y: itemRef.current ? itemRef.current.getBoundingClientRect().y : 0,
      isRendered: true,
    });
  }, []);

  return (
    <DraggableContainer className="overlay" isRendered={dragState.isRendered}>
      <Overlay zIndex={zIndex} />
      <Draggable
        positionOffset={{ x: dragState.x, y: dragState.y }}
        enableUserSelectHack={false}
        cancel=".container-warpper"
      >
        <StyledModal zIndex={zIndex + 1} width={width}>
          <div ref={itemRef} style={{ cursor: 'grab' }}>
            <Container direction="column" gap="1rem">
              {title && <div className="title">{title}</div>}
              <div className="content">{children}</div>
            </Container>
          </div>
        </StyledModal>
      </Draggable>
    </DraggableContainer>
  );
};

Modal.defaultProps = {
  zIndex: 1100,
  width: '550px',
};

export default React.memo(Modal);
