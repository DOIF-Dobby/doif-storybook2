import React, { ComponentProps, useCallback, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import SideMenu, { MenuProps } from './SideMenu';
import Container from '../container/Container';
import Page from '../common/Page';
import Box from '../common/Box';
// @ts-ignore
import smallLogo from '../../images/v-logo-small.png';
// @ts-ignore
import bigLogo from '../../images/v-logo-big.png';

export default {
  title: 'Components/SideMenu',
  component: SideMenu.type,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '500px',
    },
  },
};

const Template: Story<ComponentProps<typeof SideMenu>> = (args) => {
  const menus: Array<MenuProps> = [
    {
      code: 'CATEGORY_01',
      name: '기본정보 관리',
      sort: 1,
      depth: 1,
      type: 'CATEGORY',
      icon: 'heart',
      url: '',
    },
    {
      code: 'CATEGORY_01_01',
      name: '가맹점 정보',
      sort: 1,
      depth: 2,
      type: 'CATEGORY',
      icon: '',
      url: '',
    },
    {
      code: 'MENU_01',
      name: '가맹점 정보 관리',
      sort: 1,
      depth: 3,
      type: 'MENU',
      icon: '',
      url: '/entp',
    },
    {
      code: 'MENU_02',
      name: '계약승인처리',
      sort: 2,
      depth: 3,
      type: 'MENU',
      icon: '',
      url: '/entp',
    },
    {
      code: 'CATEGORY_01_02',
      name: '원천사업자 정보',
      sort: 2,
      depth: 2,
      type: 'CATEGORY',
      icon: '',
      url: '',
    },
    {
      code: 'MENU_03',
      name: '원천사업자 정보 관리',
      sort: 1,
      depth: 3,
      type: 'MENU',
      icon: '',
      url: '/optr',
    },
  ];

  return (
    <SideMenu
      {...args}
      bigLogo={<img src={bigLogo} />}
      smallLogo={<img src={smallLogo} />}
      menus={menus}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
};
