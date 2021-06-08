import styled from 'styled-components';

interface StyledContainerProps {
  direction: 'row' | 'column';
  align: 'flex-start' | 'center' | 'flex-end';
  gap: number | string;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  & {
    display: flex;
    width: 100%;
  }

  & > div.container-warpper {
    width: 100%;
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: ${(props) => props.align};
    cursor: default;

    // 내용들 스타일
    & > div:not(.overlay) + div:not(.overlay) {
      margin-left: ${(props) => props.direction === 'row' && props.gap};
      margin-top: ${(props) => props.direction === 'column' && props.gap};
    }
  }
`;
