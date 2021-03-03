import React from 'react';
import styled from 'styled-components';
import Icon from '../icon/Icon';

interface LabelProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  /** `Label` 컴포넌트 안에 표시될 ReactNode입니다. */
  children?: React.ReactNode;
  /** 필수 항목 여부 */
  required: boolean;
}

/**
 * `Label` 컴포넌트는 `Column` 컴포넌트 안에서 사용합니다.
 */
const Label = ({ required, children, ...props }: LabelProps) => {
  return (
    <StyledLabel className="label">
      <div>{required && <Icon icon="check" size="small" />}</div>
      <label {...props}>{children}</label>
    </StyledLabel>
  );
};

Label.defaultProps = {
  required: false,
};

const StyledLabel = styled.div`
  display: flex;
  min-width: 10rem;
  max-width: 10rem;
  min-height: 2.5rem;
  background-color: ${(props) => props.theme.formColors.labelBackground};
  border-right: 1px solid ${(props) => props.theme.formColors.border};
  height: 100%;

  > div:first-of-type {
    display: flex;
    justify-content: center;
    width: 1.5rem;

    & svg {
      fill: ${(props) => props.theme.formColors.required};
    }
  }

  > label {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
  }
`;

export default React.memo(Label);
