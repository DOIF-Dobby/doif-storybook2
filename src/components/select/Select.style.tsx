import styled from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface StyledSelectContainerProps {
  color: DoifColorType;
  width: string | number;
  heigth: string | number;
  disabled: boolean;
}

export const StyledSelectContainer = styled.div<StyledSelectContainerProps>`
  & {
    display: flex;
  }

  .back-icon {
    cursor: ${(props) => !props.disabled && 'pointer'};
  }
`;
