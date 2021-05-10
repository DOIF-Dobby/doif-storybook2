import styled from 'styled-components';

export const StyledValidation = styled.div`
  position: absolute;
  right: -10px;
  top: -15px;

  font-size: 0.8rem;
  color: white;
  background-color: ${(props) => props.theme.formColors.required};
  border-radius: ${(props) => props.theme.variants.borderRadius};
  padding: 5px;

  &:after {
    border-top: 8px solid ${(props) => props.theme.formColors.required};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 0 solid transparent;
    content: '';
    position: absolute;
    top: 20px;
    right: 15px;
  }
`;
