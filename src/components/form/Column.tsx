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
    <StyledColumn className="column" style={{ flexBasis: width }}>
      <div {...props}>{children}</div>
    </StyledColumn>
  );
};

const StyledColumn = styled.div`
  display: flex;
  height: 100%;
  min-width: 15rem;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export default React.memo(Column);
