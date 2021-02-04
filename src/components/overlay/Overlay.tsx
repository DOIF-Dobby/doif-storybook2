import React from 'react';
import { StyledOverlay } from './Overlay.style';

interface OverlayProps {
  /** z-index 속성을 설정합니다. */
  zIndex: number;
}

/**
 * `Overlay` 컴포넌트는 화면 전체를 반투명한 Layer로 덮습니다.
 */
const Overlay = ({ zIndex }: OverlayProps) => {
  return <StyledOverlay zIndex={zIndex} />;
};

Overlay.defaultProps = {
  zIndex: 1000,
};

export default React.memo(Overlay);
