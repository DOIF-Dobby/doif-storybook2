import React, { ComponentProps, useCallback, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Form from '../form/Form';
import Container from '../container/Container';
import Page from '../common/Page';
import Box from '../common/Box';
import Row from '../form/Row';
import Column from '../form/Column';
import Label from '../form/Label';
import Field from '../form/Field';
import Input from '../input/Input';

export default {
  title: 'Sample/Form',
  decorators: [
    (Story) => (
      <Page>
        <Box>{Story()}</Box>
      </Page>
    ),
  ],
};

export const Sample = () => {
  return (
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
};
