import React, { RefObject } from 'react';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';
import { StyledHeader } from './Header.style';
import { Icon } from '../..';
import Input from '../input/Input';
import Button from '../button/Button';

interface HeaderProps {
  /** 색상을 설정합니다. */
  color: DoifColorType;
  /** 화면 왼쪽에서 얼만큼 띄울 것인가를 설정합니다. */
  left: string;
  /** 프로필 이름입니다. */
  profileName: string;
  /** default 프로필 사진입니다. */
  defaultProfilePicture: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  /** 프로필 사진입니다. */
  profilePicture?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  /** 메뉴버튼을 숨깁니다. */
  hideMenuButton: boolean;
  /** 검색창을 숨깁니다. */
  hideSearch: boolean;
  /** 셋팅버튼을 숨깁니다. */
  hideSetting: boolean;
  /** 검색창에 검색했을 때 결과를 렌더링합니다. */
  searchField: React.ReactNode;
  /** 검색창 필드를 보이게 합니다. */
  visibleSearchField: boolean;
  /** 검색창 필드의 Ref 입니다. */
  searchFieldRef: RefObject<HTMLDivElement>;
  /** 프로필을 클릭했을 때 결과를 프로필 필드에 렌더링합니다. */
  profileField: React.ReactNode;
  /** 프로필 필드를 보이게 합니다. */
  visibleProfileField: boolean;
  /** 프로필 필드의 Ref 입니다. */
  profileFieldRef: RefObject<HTMLDivElement>;
  /** 셋팅을 클릭했을 때 결과를 셋팅 필드에 렌더링합니다. */
  settingField: React.ReactNode;
  /** 셋팅 필드를 보이게 합니다. */
  visibleSettingField: boolean;
  /** 셋팅 필드의 Ref 입니다. */
  settingFieldRef: RefObject<HTMLDivElement>;
  /** 메뉴버튼을 클릭했을 때 실행될 콜백함수 입니다. */
  onClickMenuButton?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  /** 검색창에 입력할 때 실행될 콜백함수 입니다. */
  onInputSearch?: (event: React.FormEvent<HTMLInputElement>) => void;
  /** 프로필을 클릭했을 때 실행될 콜백함수 입니다. */
  onClickProfile?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  /** 셋팅버튼을 클릭했을 때 실행될 콜백함수 입니다. */
  onClickSetting?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

/**
 * `Header` 컴포넌트는 화면 위쪽에 표시되는 컴포넌트입니다.
 */
const Header = ({
  color,
  left,
  profileName,
  defaultProfilePicture,
  profilePicture,
  hideMenuButton,
  hideSearch,
  hideSetting,
  searchField,
  visibleSearchField,
  searchFieldRef,
  profileField,
  visibleProfileField,
  profileFieldRef,
  settingField,
  visibleSettingField,
  settingFieldRef,
  onClickMenuButton,
  onInputSearch,
  onClickProfile,
  onClickSetting,
}: HeaderProps) => {
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
              <div ref={searchFieldRef} className="search-field">
                {searchField}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="right">
        <div className="profile" ref={profileFieldRef}>
          <div className="profile-picture" onClick={onClickProfile}>
            {profilePicture ? profilePicture : defaultProfilePicture}
          </div>
          <div className="profile-name" onClick={onClickProfile}>
            {profileName}
          </div>
          {visibleProfileField && (
            <div className="profile-field">{profileField}</div>
          )}
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
              onClick={onClickSetting}
            >
              <Icon icon="gear" color={color} />
            </Button>
            {visibleSettingField && (
              <div ref={settingFieldRef} className="setting-field">
                {settingField}
              </div>
            )}
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
