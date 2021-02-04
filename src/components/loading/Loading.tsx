import React from 'react';
import Overlay from '../overlay/Overlay';
import { StyledLoading, StyledLoadingContainer } from './Loading.style';

interface LoadingProps {
  /** z-index 속성을 설정합니다. */
  zIndex: number;
}

/**
 * `Loading` 컴포넌트는 Loading 중일 때 사용하는 컴포넌트입니다.
 */
const Loading = ({ zIndex }: LoadingProps) => {
  return (
    <>
      <Overlay zIndex={zIndex} />
      <StyledLoadingContainer zIndex={zIndex + 1}>
        <StyledLoading zIndex={zIndex + 2}>
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
    </>
  );
};

Loading.defaultProps = {
  zIndex: 1300,
};

export default React.memo(Loading);
