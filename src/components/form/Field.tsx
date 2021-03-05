import React from 'react';
import styled from 'styled-components';

interface FieldProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  /** `Field` 컴포넌트 안에 표시될 ReactNode입니다. */
  children?: React.ReactNode;
}

/**
 * `Field` 컴포넌트는 `Column` 컴포넌트 안에서 사용합니다.
 */
const Field = ({ children, ...props }: FieldProps) => {
  return (
    <StyledField className="field">
      <div {...props}>{children}</div>
    </StyledField>
  );
};

const StyledField = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.formColors.fieldBackground};

  & > div {
    display: flex;
    align-items: center;
    flex-basis: 100%;
    padding-left: 0.2rem;
    padding-right: 0.5rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
`;

export default React.memo(Field);
