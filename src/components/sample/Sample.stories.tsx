import React, { ComponentProps, FormEvent, useCallback, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Form from '../form/Form';
import Page from '../common/Page';
import Box from '../common/Box';
import Row from '../form/Row';
import useChange from '../../hooks/useChange';
import useChangeDate from '../../hooks/useChangeDate';
import useChangeCheck from '../../hooks/useChangeCheck';
import LabelInput from '../form/labelXXX/LabelInput';
import LabelSelect from '../form/labelXXX/LabelSelect';
import LabelDatepicker from '../form/labelXXX/LabelDatepicker';
import LabelCheck from '../form/labelXXX/LabelCheck';
import LabelRadio from '../form/labelXXX/LabelRadio';
import LabelTextarea from '../form/labelXXX/LabelTextarea';
import InFormContainer from '../container/InFormContainer';
import Button from '../button/Button';
import DateUtils from '../../libs/DateUtils';

export default {
  title: 'Sample/Form',
  decorators: [
    (Story) => (
      <Page>
        <Box style={{ height: '600px' }}>{Story()}</Box>
      </Page>
    ),
  ],
};

export const UseCustomHookSample = () => {
  const data = [
    { code: 'CC', name: '신용카드' },
    { code: 'AT', name: '계좌이체' },
  ];

  const defaultValue = {
    code: '',
    name: '선택없음',
  };

  const [inputForm, onChange, resetInput] = useChange({
    inputValue1: '',
    inputValue2: '',
    selectValue1: '',
    selectValue2: '',
    radioValue1: '',
    radioValue2: '',
    textareaValue1: '',
  });

  const [dateForm, onChangeDate, resetDate] = useChangeDate({
    startDate: null,
    endDate: null,
    month: null,
    time: null,
  });

  const [checkForm, onChangeCheck, resetCheck] = useChangeCheck({
    checkValue1: [],
    checkValue2: [],
  });

  const {
    inputValue1,
    inputValue2,
    selectValue1,
    selectValue2,
    radioValue1,
    radioValue2,
    textareaValue1,
  } = inputForm;

  const { startDate, endDate, month, time } = dateForm;
  const { checkValue1, checkValue2 } = checkForm;

  /** 버튼 클릭시 values log 찍음 */
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const transDateForm = DateUtils.mapDateString(dateForm);
      const combineValues = { ...inputForm, ...transDateForm, ...checkForm };

      let str = '';

      for (const [key, value] of Object.entries(combineValues)) {
        str = str.concat(`${key}: ${value} \r\n`);
      }

      alert(str);
    },
    [inputForm, dateForm, checkForm],
  );

  /** 초기화 */
  const onReset = useCallback(() => {
    resetInput();
    resetDate();
    resetCheck();
  }, [resetInput, resetDate, resetCheck]);

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <LabelInput
          required
          label="Input 1"
          value={inputValue1}
          name="inputValue1"
          onChange={onChange}
        />
        <LabelInput
          required
          label="Input 2"
          value={inputValue2}
          name="inputValue2"
          onChange={onChange}
        />
      </Row>
      <Row>
        <LabelSelect
          label="Select 1"
          data={data}
          value={selectValue1}
          defaultValue={defaultValue}
          name="selectValue1"
          onChange={onChange}
        />
        <LabelSelect
          label="Select 2"
          data={data}
          value={selectValue2}
          defaultValue={defaultValue}
          name="selectValue2"
          onChange={onChange}
        />
      </Row>
      <Row>
        <LabelDatepicker
          label="Datepicker 1"
          selected={startDate}
          onChange={onChangeDate}
          name="startDate"
        />
        <LabelDatepicker
          label="Datepicker 2"
          selected={endDate}
          onChange={onChangeDate}
          name="endDate"
        />
      </Row>
      <Row>
        <LabelDatepicker
          label="Monthpicker"
          selected={month}
          onChange={onChangeDate}
          name="month"
          showMonthYearPicker
        />
        <LabelDatepicker
          label="Timepicker"
          selected={time}
          onChange={onChangeDate}
          name="time"
          showTimeSelect
          showTimeSelectOnly
        />
      </Row>
      <Row>
        <LabelCheck
          label="Check 1"
          data={data}
          values={checkValue1}
          name="checkValue1"
          onChange={onChangeCheck}
        />
        <LabelCheck
          label="Check 2"
          data={data}
          values={checkValue2}
          name="checkValue2"
          onChange={onChangeCheck}
        />
      </Row>
      <Row>
        <LabelRadio
          label="Radio 1"
          data={data}
          value={radioValue1}
          name="radioValue1"
          onChange={onChange}
        />
        <LabelRadio
          label="Radio 2"
          data={data}
          value={radioValue2}
          name="radioValue2"
          onChange={onChange}
        />
      </Row>
      <Row>
        <LabelTextarea
          label="Textarea 1"
          value={textareaValue1}
          onChange={onChange}
          name="textareaValue1"
        />
      </Row>
      <InFormContainer align="center">
        <Button type="submit">호잇</Button>
        <Button variant="outline" onClick={onReset}>
          초기화
        </Button>
      </InFormContainer>
    </Form>
  );
};
