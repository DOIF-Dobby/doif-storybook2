import styled from 'styled-components';

interface StyledContainerProps {
  direction: 'row' | 'column';
  align: 'flex-start' | 'center' | 'flex-end';
  gap: number | string;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  & {
    display: flex;
  }

  & > div {
    width: 100%;
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: ${(props) => props.align};
    overflow: hidden;

    // 내용들 스타일
    & > div + div {
      margin-left: ${(props) => props.direction === 'row' && props.gap};
      margin-top: ${(props) => props.direction === 'column' && props.gap};
    }
  }
`;
