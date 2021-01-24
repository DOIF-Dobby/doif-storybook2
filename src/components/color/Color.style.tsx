import styled from 'styled-components';
import {
  DoifThemeMainColorProps,
  DoifThemeSubColorProps,
} from '../../styles/themes/DoifThemeProps';

interface StyledMainColorProps {
  mainColor: keyof DoifThemeMainColorProps;
}

interface StyledSubColorProps {
  subColor: keyof DoifThemeSubColorProps;
}

/** 컴포넌트 전체 Wrapper */
export const StyledColorsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  & > div + div {
    margin-left: 10px;
  }
`;

/** Color 1개 Wrapper */
export const StyledColorWrapper = styled.div`
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
export const StyledMainColor = styled.div<StyledMainColorProps>`
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
export const StyledSubColor = styled.div<StyledSubColorProps>`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.subColors[props.subColor]};
`;
