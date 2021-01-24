import React from 'react';
import light from '../../styles/themes/light';
import {
  DoifThemeSubColorProps,
  DoifThemeMainColorProps,
} from '../../styles/themes/DoifThemeProps';
import {
  StyledColorWrapper,
  StyledColorsWrapper,
  StyledMainColor,
  StyledSubColor,
} from './Color.style';

interface ColorProps {
  type: 'main' | 'sub';
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
          <StyledColorWrapper key={color}>
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
          <StyledColorWrapper key={color}>
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

export default Colors;
