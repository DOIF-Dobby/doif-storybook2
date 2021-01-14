import React from 'react';
import styled from 'styled-components';
import light from '../../styles/themes/light';
import { DoifThemeColorProps } from '../../styles/themes/DoifThemeProps';

interface StyledColorProps {
  color: keyof DoifThemeColorProps;
}

/**
 * `Colors`는 스토리북에서 제공하는 테마별 색상을 보여줍니다.
 */
const Colors = () => {
  // light 테마로 key를 가져온다.
  const colors: any = Object.keys(light.colors);

  return (
    <StyledColorsWrapper>
      {colors.map((color: keyof DoifThemeColorProps) => (
        <StyledColorWrapper>
          <StyledColor color={color}></StyledColor>
          <span>{color}</span>
        </StyledColorWrapper>
      ))}
    </StyledColorsWrapper>
  );
};

/** 컴포넌트 전체 Wrapper */
const StyledColorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

/** Color 1개 Wrapper */
const StyledColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > span {
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
    padding-top: 10px;
    padding-bottom: 30px;
    font-size: 1.3rem;
  }
`;

/** Color 한 개당 스타일 */
const StyledColor = styled.div<StyledColorProps>`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors[props.color]};
`;

export default Colors;
