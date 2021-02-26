import React, {
  ComponentProps,
  RefObject,
  useCallback,
  useRef,
  useState,
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story } from '@storybook/react/types-6-0';
import Header from './Header';
import styled from 'styled-components';
import SideMenu from '../menu/SideMenu';
// @ts-ignore
import smallLogo from '../../images/v-logo-small.png';
// @ts-ignore
import bigLogo from '../../images/v-logo-big.png';
import { CategoryProps, MenuProps } from '../menu/menu.model';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
// @ts-ignore
import defaultProfilePicture from '../../images/default-profile-picture.png';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import Container from '../container/Container';

export default {
  title: 'Components/Header',
  component: Header.type,
  decorators: [
    (Story) => (
      <>
        {Story()}
        <PageComponent />
      </>
    ),
  ],
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '500px',
    },
  },
};

const Template: Story<ComponentProps<typeof Header>> = (args) => {
  const [searchField, setSearchField] = useState<React.ReactNode>('');
  const [profileField, setProfileField] = useState<React.ReactNode>('');
  const [settingField, setSettingField] = useState<React.ReactNode>('');
  const [visibleSearchField, setVisibleSearchField] = useState(false);
  const [visibleProfileField, setVisibleProfileField] = useState(false);
  const [visibleSettingField, setVisibleSettingField] = useState(false);

  // SearchField 바깥 쪽 클릭했을 때 닫히게 하는 함수
  const searchFieldRef: RefObject<HTMLDivElement> = useRef(null);
  useOutsideAlerter(
    searchFieldRef,
    useCallback(() => setVisibleSearchField(false), []),
  );

  // ProfileField 바깥 쪽 클릭했을 때 닫히게 하는 함수
  const profileFieldRef: RefObject<HTMLDivElement> = useRef(null);
  useOutsideAlerter(
    profileFieldRef,
    useCallback(() => {
      return setVisibleProfileField(false);
    }, []),
  );

  // SettingField 바깥 쪽 클릭했을 때 닫히게 하는 함수
  const settingFieldRef: RefObject<HTMLDivElement> = useRef(null);
  useOutsideAlerter(
    settingFieldRef,
    useCallback(() => {
      return setVisibleSettingField(false);
    }, []),
  );

  /** SearchField 아이템 클릭했을 때 */
  const onClickSearchItem = useCallback(() => {
    setVisibleSearchField(false);
  }, []);

  /** ProfileField 아이템 클릭했을 때 */
  const onClickProfileItem = useCallback(() => {
    setVisibleProfileField(false);
  }, []);

  /** SettingField 아이템 클릭했을 때 */
  const onClickSettingItem = useCallback(() => {
    setVisibleSettingField(false);
  }, []);

  /** Search 검색했을 때 */
  const onInputSearch = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setVisibleSearchField(true);
      const searchItem = (
        <div style={{ padding: '0.5rem' }}>
          <div style={{ border: `1px solid red` }} onClick={onClickSearchItem}>
            {event.currentTarget.value}
          </div>
        </div>
      );

      setSearchField(searchItem);
    },
    [],
  );

  /** Profile 클릭했을 때 */
  const onClickProfile = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setVisibleProfileField((visibleProfileField) => !visibleProfileField);
      const profileItem = (
        <div style={{ padding: '0.5rem' }}>
          <div style={{ border: `1px solid red` }} onClick={onClickProfileItem}>
            프로필 변경
          </div>
          <div style={{ border: `1px solid red` }} onClick={onClickProfileItem}>
            로그아웃
          </div>
        </div>
      );

      setProfileField(profileItem);
    },
    [],
  );

  /** Setting 클릭했을 때 */
  const onClickSetting = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setVisibleSettingField((visibleProfileField) => !visibleProfileField);
      const settingItem = (
        <div style={{ padding: '0.5rem' }}>
          <Container align="right">
            <Button
              iconOnly
              variant="ghost"
              style={{
                borderRadius: '1.125rem',
                width: '2.25rem',
                height: '2.25rem',
              }}
              onClick={onClickSettingItem}
            >
              <Icon icon="exit" />
            </Button>
          </Container>
        </div>
      );

      setSettingField(settingItem);
    },
    [],
  );

  return (
    <Header
      {...args}
      defaultProfilePicture={<img src={defaultProfilePicture} />}
      onInputSearch={onInputSearch}
      searchField={searchField}
      visibleSearchField={visibleSearchField}
      searchFieldRef={searchFieldRef}
      onClickProfile={onClickProfile}
      profileField={profileField}
      visibleProfileField={visibleProfileField}
      profileFieldRef={profileFieldRef}
      onClickSetting={onClickSetting}
      settingField={settingField}
      visibleSettingField={visibleSettingField}
      settingFieldRef={settingFieldRef}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  profileName: '임진성',
  left: '0px',
};

const PageComponent = styled.div`
  background-color: ${(props) => props.theme.subColors.pageBackground};
  width: 100%;
  height: 500px;
`;
