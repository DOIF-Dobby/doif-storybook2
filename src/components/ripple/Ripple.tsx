import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

interface RippleProps {
  duration: number;
  disabled: boolean;
}

interface StyledRippleProps {
  duration: number;
}

/** 리플 효과를 주기 위해 span를 추가하는데 그것을 지우는 함수 */
const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: Function,
) => {
  useLayoutEffect(() => {
    let bounce: any = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

/** 리플 효과를 주는 컴포넌트 */
const Ripple = ({ duration, disabled }: RippleProps) => {
  if (disabled) {
    return null;
  }

  const [rippleArray, setRippleArray] = useState<
    Array<{ x: number; y: number; size: number }>
  >([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();

    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.clientX - rippleContainer.x - size / 2;
    const y = event.clientY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer duration={duration} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              className="ripple-effect"
              key={'span' + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </RippleContainer>
  );
};

Ripple.defaultProps = {
  duration: 850,
  disabled: false,
};

const RippleContainer = styled.div<StyledRippleProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.5;
    animation-name: ripple;
    animation-duration: ${(props) => props.duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

export default Ripple;
