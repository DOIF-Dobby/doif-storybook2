import styled, { css } from 'styled-components';
import {
  DoifColorType,
  DoifSizeType,
} from '../../styles/themes/DoifThemeProps';

interface StyledIconProps {
  mainColor: DoifColorType;
  size: DoifSizeType;
}

/** Icon 컴포넌트의 스타일 */
export const StyledIconContainer = styled.div<StyledIconProps>`
  & {
    display: flex;
  }

  & > svg {
    // 크기에 따른 스타일
    ${(props) => props.size === 'small' && SmallButtonStyle}
    ${(props) => props.size === 'medium' && MediumButtonStyle}
    ${(props) => props.size === 'large' && LargeButtonStyle}

    fill: ${(props) => props.theme.mainColors[props.mainColor].base};
    height: auto;
  }
`;

/** size === 'small' 인 아이콘 스타일 */
export const SmallButtonStyle = css<StyledIconProps>`
  width: 0.8rem;
`;

/** size === 'medium' 인 아이콘 스타일 */
export const MediumButtonStyle = css<StyledIconProps>`
  width: 1rem;
`;

/** size === 'large' 인 아이콘 스타일 */
export const LargeButtonStyle = css<StyledIconProps>`
  width: 1.2rem;
`;
