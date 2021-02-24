import React, { useCallback, useState } from 'react';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import { StyledHeader } from './Header.style';
// @ts-ignore
import defaultProfilePicture from '../../images/default-profile-picture.png';
import { Icon } from '../..';
import Input from '../input/Input';
import Button from '../button/Button';

interface HeaderProps {
  color: DoifColorType;
  left: string;
  profileName: string;
  profilePicture?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  hideMenuButton: boolean;
  hideSearch: boolean;
  hideSetting: boolean;
  searchField: React.ReactNode;
  visibleSearchField: boolean;
  onClickMenuButton?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onInputSearch?: (event: React.FormEvent<HTMLInputElement>) => void;
  onClickProfile?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  onClickSetting?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

/**
 * `Header` 컴포넌트는 화면 위쪽에 표시되는 컴포넌트입니다.
 */
const Header = ({
  /** 색상을 설정합니다. */
  color,
  /** 화면 왼쪽에서 얼만큼 띄울 것인가를 설정합니다. */
  left,
  /** 프로필 이름입니다. */
  profileName,
  /** 프로필 사진입니다. */
  profilePicture,
  /** 메뉴버튼을 숨깁니다. */
  hideMenuButton,
  /** 검색창을 숨깁니다. */
  hideSearch,
  /** 셋팅버튼을 숨깁니다. */
  hideSetting,
  /** 검색창에 검색했을 때 결과를 렌더링합니다. */
  searchField,
  /** 검색창을 보이게 합니다. */
  visibleSearchField,
  /** 메뉴버튼을 클릭했을 때 실행될 콜백함수 입니다. */
  onClickMenuButton,
  /** 검색창에 입력할 때 실행될 콜백함수 입니다. */
  onInputSearch,
  /** 프로필을 클릭했을 때 실행될 콜백함수 입니다. */
  onClickProfile,
  /** 셋팅버튼을 클릭했을 때 실행될 콜백함수 입니다. */
  onClickSetting,
}: HeaderProps) => {
  /** 검색창 Input 이벤트 Handler */
  const handleInputSearch = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      if (onInputSearch) {
        onInputSearch(event);
      }
    },
    [],
  );

  return (
    <StyledHeader color={color} left={left}>
      <div className="left">
        {!hideMenuButton && (
          <div className="menu-button">
            <Button
              iconOnly
              color={color}
              variant="ghost"
              style={{
                borderRadius: '1.125rem',
                width: '2.25rem',
                height: '2.25rem',
              }}
              onClick={onClickMenuButton}
            >
              <Icon icon="hamburger" color={color} />
            </Button>
          </div>
        )}
        {!hideSearch && (
          <div className="search">
            <Input
              frontIcon={<Icon icon="search" color={color} />}
              color={color}
              placeholder="Search..."
              onInput={onInputSearch}
            />
            {visibleSearchField && (
              <div className="search-field">{searchField}</div>
            )}
          </div>
        )}
      </div>
      <div className="right">
        <div className="profile">
          <div className="profile-picture">
            {profilePicture ? (
              profilePicture
            ) : (
              <img src={defaultProfilePicture} />
            )}
          </div>
          <div className="profile-name">{profileName}</div>
        </div>
        {!hideSetting && (
          <div className="setting">
            <Button
              iconOnly
              color={color}
              variant="ghost"
              style={{
                borderRadius: '1.125rem',
                width: '2.25rem',
                height: '2.25rem',
              }}
            >
              <Icon icon="gear" color={color} />
            </Button>
          </div>
        )}
      </div>
    </StyledHeader>
  );
};

Header.defaultProps = {
  color: 'primary',
  left: '0px',
  hideMenuButton: false,
  hideSearch: false,
  hideSetting: false,
};

export default React.memo(Header);
