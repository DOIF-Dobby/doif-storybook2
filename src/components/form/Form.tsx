import React from 'react';
import styled from 'styled-components';

interface FormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  /** `Form` 컴포넌트 안에는 `Row` 컴포넌트와 `Column` 컴포넌트를 사용하여 form을 구성합니다. */
  children: React.ReactNode;
}

const Form = (props: FormProps) => {
  return (
    <StyledForm>
      <form {...props}>{props.children}</form>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  & > form {
    display: flex;
    flex-direction: column;
    /* border-radius: ${(props) => props.theme.variants.borderRadius}; */
    border: 1px solid ${(props) => props.theme.formColors.border};

    & > div.row + div.row {
      border-top: 1px solid ${(props) => props.theme.formColors.border};
    }
  }
`;

export default React.memo(Form);
