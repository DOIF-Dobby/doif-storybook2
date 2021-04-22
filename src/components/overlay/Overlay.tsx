import React from 'react';
import { StyledOverlay } from './Overlay.style';

interface OverlayProps {
  /** z-index 속성을 설정합니다. */
  zIndex: number;
  /** position 속성을 설정합니다. */
  position: string;
}

/**
 * `Overlay` 컴포넌트는 화면 전체를 반투명한 Layer로 덮습니다.
 */
const Overlay = ({ zIndex, position }: OverlayProps) => {
  return (
    <StyledOverlay className="overlay" zIndex={zIndex} position={position} />
  );
};

Overlay.defaultProps = {
  zIndex: 1000,
  position: 'fixed',
};

export default React.memo(Overlay);
