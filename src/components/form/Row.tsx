import React, { Children } from 'react';
import styled from 'styled-components';

interface RowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  /** `Row` 컴포넌트 안에는 `Column` 컴포넌트를 사용하여 구성합니다. */
  children: React.ReactNode;
}

/**
 * `Row` 컴포넌트는 `Form` 컴포넌트 안에서 사용합니다.
 */
const Row = ({ children, ...props }: RowProps) => {
  const count = Children.count(children);
  const flexBasis = 100 / count + '%';

  return (
    <StyledRow flexBasis={flexBasis} className="row">
      <div {...props}>{children}</div>
    </StyledRow>
  );
};

interface StyledRowProps {
  flexBasis: string;
}

const StyledRow = styled.div<StyledRowProps>`
  display: flex;

  & > div {
    display: flex;
    min-height: 2.5rem;
    align-items: center;
    width: 100%;

    & > div.column {
      flex-basis: ${(props) => props.flexBasis};
    }

    & > div.column + div.column {
      div.label {
        border-left: 1px solid ${(props) => props.theme.formColors.border};
      }
    }

    /* & > div.column:first-of-type {
      div.label {
        border-top-left-radius: ${(props) => props.theme.variants.borderRadius};
        border-bottom-left-radius: ${(props) =>
          props.theme.variants.borderRadius};
      }
    } */
  }
`;

export default React.memo(Row);
