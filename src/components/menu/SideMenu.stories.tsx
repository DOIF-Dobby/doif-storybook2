import React, { ComponentProps, useCallback, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story } from '@storybook/react/types-6-0';
import SideMenu, { CategoryProps, MenuProps } from './SideMenu';
import Container from '../container/Container';
// @ts-ignore
import smallLogo from '../../images/v-logo-small.png';
// @ts-ignore
import bigLogo from '../../images/v-logo-big.png';

export default {
  title: 'Components/SideMenu',
  component: SideMenu.type,
  decorators: [(Story) => <BrowserRouter>{Story()}</BrowserRouter>],
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '500px',
    },
  },
};

const Template: Story<ComponentProps<typeof SideMenu>> = (args) => {
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

  return (
    <SideMenu
      {...args}
      bigLogo={<img src={bigLogo} />}
      smallLogo={<img src={smallLogo} />}
      items={items}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  isFold: true,
};
