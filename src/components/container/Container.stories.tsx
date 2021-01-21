import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Container from './Container';
import Button from '../button/Button';
import Icon from '../icon/Icon';

export default {
  title: 'Components/Container',
  component: Container.type,
};

const Template: Story<ComponentProps<typeof Container>> = (args) => (
  <Container {...args}>
    <Button>
      <Icon icon="check" />
      확인
    </Button>
    <Button variant="outline">
      <Icon icon="exit" />
      취소
    </Button>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  direction: 'row',
  align: 'left',
  gap: '0.5rem',
};

export const Direction = () => {
  return (
    <Container direction="column">
      <Button style={{ width: '100%' }}>
        <Icon icon="check" />
        확인
      </Button>
      <Button variant="outline" style={{ width: '100%' }}>
        <Icon icon="exit" />
        취소
      </Button>
    </Container>
  );
};

export const Align = () => {
  return (
    <>
      <Container align="left">
        <Button>
          <Icon icon="check" />
          확인
        </Button>
        <Button variant="outline">
          <Icon icon="exit" />
          취소
        </Button>
      </Container>
      <Container align="center">
        <Button>
          <Icon icon="check" />
          확인
        </Button>
        <Button variant="outline">
          <Icon icon="exit" />
          취소
        </Button>
      </Container>
      <Container align="right">
        <Button>
          <Icon icon="check" />
          확인
        </Button>
        <Button variant="outline">
          <Icon icon="exit" />
          취소
        </Button>
      </Container>
    </>
  );
};

export const RowGap = () => {
  return (
    <Container gap="2rem">
      <Button>
        <Icon icon="check" />
        확인
      </Button>
      <Button variant="outline">
        <Icon icon="exit" />
        취소
      </Button>
    </Container>
  );
};

export const ColumnGap = () => {
  return (
    <Container direction="column" gap="2rem">
      <Button style={{ width: '100%' }}>
        <Icon icon="check" />
        확인
      </Button>
      <Button variant="outline" style={{ width: '100%' }}>
        <Icon icon="exit" />
        취소
      </Button>
    </Container>
  );
};

export const CustomStyle = () => {
  return (
    <Container style={{ backgroundColor: '#fab', padding: '10px' }}>
      <div>안녕하신가요</div>
      <div>
        <ul>
          <li>즐거운</li>
          <li>코딩</li>
          <li>되시길</li>
        </ul>
      </div>
    </Container>
  );
};
