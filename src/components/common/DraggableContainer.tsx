import styled from 'styled-components';

interface DraggableContainerProps {
  isRendered: boolean;
}

export const DraggableContainer = styled.div<DraggableContainerProps>`
  .react-draggable {
    ${(props) => props.isRendered && 'width: auto;'}
    ${(props) => props.isRendered && 'height: auto;'}
  }
`;
