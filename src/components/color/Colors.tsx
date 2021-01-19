import React from 'react';
import styled from 'styled-components';
import light from '../../styles/themes/light';
import {
  DoifThemeSubColorProps,
  DoifThemeMainColorProps,
} from '../../styles/themes/DoifThemeProps';

interface ColorProps {
  type: 'main' | 'sub';
}

interface StyledMainColorProps {
  mainColor: keyof DoifThemeMainColorProps;
}

interface StyledSubColorProps {
  subColor: keyof DoifThemeSubColorProps;
}

/**
 * `Colors`는 스토리북에서 제공하는 테마별 색상을 보여줍니다.
 */
const Colors = ({ type }: ColorProps) => {
  // light 테마로 key를 가져온다.
  const mainColors: any = Object.keys(light.mainColors);
  const subColors: any = Object.keys(light.subColors);

  if (type === 'main') {
    return (
      <StyledColorsWrapper>
        {mainColors.map((color: keyof DoifThemeMainColorProps) => (
          <StyledColorWrapper>
            <StyledMainColor mainColor={color}>
              <div></div>
              <div></div>
              <div></div>
            </StyledMainColor>
            <span>{color}</span>
          </StyledColorWrapper>
        ))}
      </StyledColorsWrapper>
    );
  } else if (type === 'sub') {
    return (
      <StyledColorsWrapper>
        {subColors.map((color: keyof DoifThemeSubColorProps) => (
          <StyledColorWrapper>
            <StyledSubColor subColor={color}></StyledSubColor>
            <span>{color}</span>
          </StyledColorWrapper>
        ))}
      </StyledColorsWrapper>
    );
  } else {
    return null;
  }
};

Colors.defaultProps = {
  type: 'main',
};

/** 컴포넌트 전체 Wrapper */
const StyledColorsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  & > div + div {
    margin-left: 10px;
  }
`;

/** Color 1개 Wrapper */
const StyledColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > span {
    text-align: center;
    color: ${(props) => props.theme.subColors.text};
    padding-top: 10px;
    padding-bottom: 30px;
    font-size: 1.3rem;
  }
`;

/** Main Color 한 개당 스타일 */
const StyledMainColor = styled.div<StyledMainColorProps>`
  display: flex;

  & > div {
    width: 100px;
    height: 200px;
    border-radius: 10px;
  }

  & > div:first-of-type {
    background-color: ${(props) =>
      props.theme.mainColors[props.mainColor].light};
  }

  & > div:nth-of-type(2) {
    background-color: ${(props) =>
      props.theme.mainColors[props.mainColor].base};
  }

  & > div:nth-of-type(3) {
    background-color: ${(props) =>
      props.theme.mainColors[props.mainColor].dark};
  }
`;

/** Sub Color 한 개당 스타일 */
const StyledSubColor = styled.div<StyledSubColorProps>`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.subColors[props.subColor]};
`;

export default Colors;
