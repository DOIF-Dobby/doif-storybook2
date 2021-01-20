import React from 'react';
import styled, { css } from 'styled-components';
import * as icons from '../../icons/';
import {
  DoifColorType,
  DoifSizeType,
} from '../../styles/themes/DoifThemeProps';

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[]; // 스토리에서 불러오기 위함

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** 사용할 아이콘 타입 */
  icon: IconType;
  /** 아이콘 색상 */
  color: DoifColorType;
  /** 아이콘 크기 */
  size: DoifSizeType;
}

interface StyledIconProps {
  mainColor: DoifColorType;
  size: DoifSizeType;
}

/**
 * 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 */
function Icon({ icon, color, size, ...props }: IconProps) {
  const SVGIcon = icons[icon];
  return (
    <StyledIconContainer
      mainColor={color}
      size={size}
      className="icon-container"
    >
      <SVGIcon {...props} />
    </StyledIconContainer>
  );
}

Icon.defaultProps = {
  color: 'primary',
  size: 'medium',
};

/** Icon 컴포넌트의 스타일 */
const StyledIconContainer = styled.div<StyledIconProps>`
  & {
    display: inline-block;
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
const SmallButtonStyle = css<StyledIconProps>`
  width: 0.9rem;
`;

/** size === 'medium' 인 아이콘 스타일 */
const MediumButtonStyle = css<StyledIconProps>`
  width: 1.15rem;
`;

/** size === 'large' 인 아이콘 스타일 */
const LargeButtonStyle = css<StyledIconProps>`
  width: 1.4rem;
`;

export default React.memo(Icon);
