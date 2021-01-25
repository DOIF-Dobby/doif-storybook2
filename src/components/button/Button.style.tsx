import styled, { css } from 'styled-components';
import {
  DoifColorType,
  DoifSizeType,
  DoifVariantType,
} from '../../styles/themes/DoifThemeProps';

interface StyledButtonContainerProps {
  disabled: boolean;
  color: DoifColorType;
  variant: DoifVariantType;
  size: DoifSizeType;
  iconLocation: string;
  iconOnly: boolean;
  width: string | number;
}

/** Button 컴포넌트의 스타일 */
export const StyledButtonContainer = styled.div<StyledButtonContainerProps>`
  & {
    display: flex;
    width: ${(props) => props.width};
  }

  & > button {

    // 모양에 따른 스타일
    ${(props) => props.variant === 'fill' && FillButtonStyle}
    ${(props) => props.variant === 'outline' && OutlineButtonStyle}
    ${(props) => props.variant === 'ghost' && GhostButtonStyle}

    // 크기에 따른 스타일
    ${(props) => props.size === 'small' && SmallButtonStyle}
    ${(props) => props.size === 'medium' && MediumButtonStyle}
    ${(props) => props.size === 'large' && LargeButtonStyle}

    width: ${(props) => (props.width === 'auto' ? 'max-content' : '100%')};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    outline: none;
    position: relative;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }

    /** 아이콘 위치에 따른 margin 설정 */
    & svg {
      margin-right: ${(props) => props.iconLocation === 'left' && '0.5rem'};
      margin-left: ${(props) => props.iconLocation === 'right' && '0.5rem'};
    }
  }
`;

/** variant === 'fill' 인 버튼 스타일 */
export const FillButtonStyle = css<StyledButtonContainerProps>`
  background-color: ${(props) => props.theme.mainColors[props.color].base};
  color: ${(props) => props.theme.subColors.content};
  border: none;
  border-radius: ${(props) => props.theme.variants.borderRadius};

  &:hover {
    background-color: ${(props) =>
      !props.disabled && props.theme.mainColors[props.color].dark};
  }

  & svg {
    fill: ${(props) => props.theme.subColors.content};
  }

  span.ripple-effect {
    background-color: ${(props) => props.theme.subColors.content};
  }
`;

/** variant === 'outline' 인 버튼 스타일 */
export const OutlineButtonStyle = css<StyledButtonContainerProps>`
  background-color: transparent;
  color: ${(props) => props.theme.mainColors[props.color].base};
  border: ${(props) =>
    `${props.theme.variants.borderWidth} solid ${
      props.theme.mainColors[props.color].base
    }`};
  border-radius: ${(props) => props.theme.variants.borderRadius};

  &:hover {
    background-color: ${(props) =>
      !props.disabled && props.theme.mainColors[props.color].light};
  }

  span.ripple-effect {
    background-color: ${(props) => props.theme.mainColors[props.color].base};
  }
`;

/** variant === 'ghost' 인 버튼 스타일 */
export const GhostButtonStyle = css<StyledButtonContainerProps>`
  background-color: transparent;
  color: ${(props) => props.theme.mainColors[props.color].base};
  border: none;
  border-radius: ${(props) => props.theme.variants.borderRadius};

  &:hover {
    background-color: ${(props) =>
      !props.disabled && props.theme.mainColors[props.color].light};
  }

  span.ripple-effect {
    background-color: ${(props) => props.theme.mainColors[props.color].base};
  }
`;

/** size === 'small' 인 버튼 스타일 */
export const SmallButtonStyle = css<StyledButtonContainerProps>`
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.75rem;
`;

/** size === 'medium' 인 버튼 스타일 */
export const MediumButtonStyle = css<StyledButtonContainerProps>`
  height: 2rem;
  line-height: 2rem;
  font-size: 1rem;
`;

/** size === 'large' 인 버튼 스타일 */
export const LargeButtonStyle = css<StyledButtonContainerProps>`
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1.25rem;
`;
