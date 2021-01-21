import React from 'react';
import styled, { css } from 'styled-components';

interface ContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  /** 컨테이너 내용 */
  children: React.ReactNode;
  /** 내용을 보여줄 방향 */
  direction: 'row' | 'column';
  /** 내용의 위치 */
  align: 'left' | 'center' | 'right';
  /** 내용과 내용 사이의 간격을 설정합니다. */
  gap: number | string;
}

interface StyledContainerProps {
  direction: 'row' | 'column';
  align: 'flex-start' | 'center' | 'flex-end';
  gap: number | string;
}

/**
 * `Container` 컴포넌트는 storybook에서 제공하는 모든 컴포넌트들을 감싸는 컴포넌트입니다.
 */
const Container = ({
  children,
  direction,
  align,
  gap,
  ...props
}: ContainerProps) => {
  const styledAlign: 'flex-start' | 'center' | 'flex-end' =
    align === 'left'
      ? 'flex-start'
      : align === 'center'
      ? 'center'
      : 'flex-end';

  return (
    <StyledContainer direction={direction} align={styledAlign} gap={gap}>
      <div {...props}>{children}</div>
    </StyledContainer>
  );
};

/** Button 컴포넌트의 Default Props */
Container.defaultProps = {
  direction: 'row',
  align: 'left',
  gap: '0.5rem',
};

const StyledContainer = styled.div<StyledContainerProps>`
  & {
    display: flex;
  }

  & > div {
    width: 100%;
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: ${(props) => props.align};

    // 내용들 스타일
    & > div + div {
      margin-left: ${(props) => props.direction === 'row' && props.gap};
      margin-top: ${(props) => props.direction === 'column' && props.gap};
    }
  }
`;

export default React.memo(Container);
