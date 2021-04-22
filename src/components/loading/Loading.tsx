import React from 'react';
import Overlay from '../overlay/Overlay';
import { StyledLoading, StyledLoadingContainer } from './Loading.style';

interface LoadingProps {
  /** z-index 속성을 설정합니다. */
  zIndex: number;
  /** position 속성을 설정합니다. */
  position: string;
}

/**
 * `Loading` 컴포넌트는 Loading 중일 때 사용하는 컴포넌트입니다.
 */
const Loading = ({ zIndex, position }: LoadingProps) => {
  return (
    <div className="overlay">
      <Overlay zIndex={zIndex} position={position} />
      <StyledLoadingContainer zIndex={zIndex + 1} position={position}>
        <StyledLoading zIndex={zIndex + 2} position={position}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </StyledLoading>
      </StyledLoadingContainer>
    </div>
  );
};

Loading.defaultProps = {
  zIndex: 1300,
  position: 'fixed',
};

export default React.memo(Loading);
