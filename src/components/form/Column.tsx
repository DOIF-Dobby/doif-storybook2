import React from 'react';
import styled from 'styled-components';

interface ColumnProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  /** `Column` 컴포넌트 안에 표시될 ReactNode입니다. */
  children?: React.ReactNode;
  /** width */
  width?: string;
}

/**
 * `Column` 컴포넌트는 `Row` 컴포넌트 안에서 사용합니다.
 */
const Column = ({ width, children, ...props }: ColumnProps) => {
  return (
    <StyledColumn className="column" width={width}>
      <div {...props}>{children}</div>
    </StyledColumn>
  );
};

interface StyledColumnProps {
  width?: string;
}

const StyledColumn = styled.div<StyledColumnProps>`
  flex-basis: ${(props) => props.width && props.width + ' !important'};
  height: 100%;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export default React.memo(Column);
