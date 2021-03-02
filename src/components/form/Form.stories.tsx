import React, { ComponentProps, useCallback, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Form from './Form';
import Container from '../container/Container';
import Page from '../common/Page';
import Box from '../common/Box';
import Row from './Row';
import Column from './Column';
import Label from './Label';
import Field from './Field';
import Input from '../input/Input';

export default {
  title: 'Components/Form',
  component: Form.type,
  decorators: [
    (Story) => (
      <Page>
        <Box>{Story()}</Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof Form>> = (args) => (
  <Form>
    <Row>
      <Column>
        <Label required>정산배치타입</Label>
        <Field>
          <Input />
        </Field>
      </Column>
      <Column>
        <Label required>정산배치설정ID</Label>
        <Field>
          <Input />
        </Field>
      </Column>
      <Column>
        <Label>실행순서</Label>
        <Field>
          <Input />
        </Field>
      </Column>
    </Row>
    <Row>
      <Column>
        <Label>실행타입</Label>
        <Field>
          <Input />
        </Field>
      </Column>
      <Column>
        <Label>실행타입</Label>
        <Field>
          <Input />
        </Field>
      </Column>
      <Column>
        <Label>실행커맨드</Label>
        <Field>
          <Input />
        </Field>
      </Column>
    </Row>
    <Row>
      <Column width="66.66%">
        <Label>재처리가능여부</Label>
        <Field>
          <Input />
        </Field>
      </Column>
      <Column width="33.33%">
        <Label>비고</Label>
        <Field>
          <Input />
        </Field>
      </Column>
    </Row>
  </Form>
);

export const Default = Template.bind({});
Default.args = {};
