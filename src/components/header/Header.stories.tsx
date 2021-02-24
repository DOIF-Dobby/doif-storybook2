import React, { ComponentProps, useCallback, useState } from 'react';
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
import Button from '../button/Button';

export default {
  title: 'Components/Header',
  component: Header.type,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <SideMenu
          bigLogo={<img src={bigLogo} />}
          smallLogo={<img src={smallLogo} />}
          items={items}
        />
        {Story()}
        <PageComponent />
      </BrowserRouter>
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
  const [visibleSearchField, setVisibleSearchField] = useState(false);

  const onClickSearchItem = useCallback(() => {
    setVisibleSearchField(false);
  }, []);

  const onInputSearch = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setVisibleSearchField(true);
      const searchItem = (
        <div style={{ border: `1px solid red` }} onClick={onClickSearchItem}>
          {event.currentTarget.value}
        </div>
      );

      setSearchField(searchItem);
    },
    [],
  );
  return (
    <Header
      {...args}
      onInputSearch={onInputSearch}
      searchField={searchField}
      visibleSearchField={visibleSearchField}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  profileName: '임진성',
  left: '15rem',
};

const PageComponent = styled.div`
  background-color: ${(props) => props.theme.subColors.pageBackground};
  width: 100%;
  height: 500px;
`;

const items: Array<CategoryProps | MenuProps> = [
  {
    code: 'CATEGORY_01',
    name: '기본정보 관리',
    icon: 'heart',
    childrenItems: [
      {
        code: 'CATEGORY_01_01',
        name: '가맹점 정보',
        childrenItems: [
          {
            code: 'MENU_01',
            name: '가맹점 정보 관리',
            url: '/entp1',
          },
          {
            code: 'MENU_02',
            name: '계약승인처리',
            url: '/entp2',
          },
        ],
      },
      {
        code: 'CATEGORY_01_02',
        name: '원천사업자 정보',
        icon: '',
        childrenItems: [
          {
            code: 'MENU_03',
            name: '원천사업자 정보 관리',
            url: '/optr1',
          },
        ],
      },
    ],
  },
  {
    code: 'CATEGORY_02',
    name: '개발자 메뉴',
    icon: 'pencil',
    childrenItems: [
      {
        code: 'MENU_DEV_01',
        name: '시스템캐시리로드',
        url: '/dev1',
      },
      {
        code: 'MENU_DEV_02',
        name: '메뉴 관리',
        url: '/dev2',
      },
    ],
  },
  {
    code: 'MENU_04',
    name: '테스트 메뉴',
    icon: 'exit',
    url: '/test',
  },
];
