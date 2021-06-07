import React, { Children } from 'react';
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
  width: 100%;
  
  & > form {
    display: flex;
    flex-direction: column;
    /* border-radius: ${(props) => props.theme.variants.borderRadius}; */
    /* border: 1px solid ${(props) => props.theme.formColors.border}; */

    & > div.row {
      border-left: 1px solid ${(props) => props.theme.formColors.border};
      border-right: 1px solid ${(props) => props.theme.formColors.border};
    }

    & > div.row:first-of-type {
      border-top: 1px solid ${(props) => props.theme.formColors.border};
      border-top-left-radius: ${(props) => props.theme.variants.borderRadius};
      border-top-right-radius: ${(props) => props.theme.variants.borderRadius};

      div.column:first-of-type  {
        div.label {
          border-top-left-radius: ${(props) =>
            props.theme.variants.borderRadius};
        }
      }

      div.column:last-of-type  {
        div.field {
          border-top-right-radius: ${(props) =>
            props.theme.variants.borderRadius};
        }
      }
    }

    & > div.row:last-of-type {
      border-bottom: 1px solid ${(props) => props.theme.formColors.border};
      border-bottom-left-radius: ${(props) =>
        props.theme.variants.borderRadius};
      border-bottom-right-radius: ${(props) =>
        props.theme.variants.borderRadius};

      div.column:first-of-type  {
        div.label {
          border-bottom-left-radius: ${(props) =>
            props.theme.variants.borderRadius};
        }
      }

      div.column:last-of-type  {
        div.field {
          border-bottom-right-radius: ${(props) =>
            props.theme.variants.borderRadius};
        }
      }
    }

    & > div.row + div.row {
      border-top: 1px solid ${(props) => props.theme.formColors.border};
    }
  }
`;

export default React.memo(Form);
