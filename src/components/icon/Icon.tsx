import React from 'react';
import * as icons from '../../icons/';
import {
  DoifColorType,
  DoifSizeType,
} from '../../styles/themes/DoifThemeProps';
import { StyledIconContainer } from './Icon.style';

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

export default React.memo(Icon);
