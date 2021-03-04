import React, {
  ChangeEvent,
  ComponentProps,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';
import { Story } from '@storybook/react/types-6-0';
import Form from './Form';
import Page from '../common/Page';
import Box from '../common/Box';
import Row from './Row';
import Column from './Column';
import Label from './Label';
import Field from './Field';
import Input from '../input/Input';
import LabelInput from './labelXXX/LabelInput';
import LabelSelect from './labelXXX/LabelSelect';
import LabelCheck from './labelXXX/LabelCheck';
import LabelRadio from './labelXXX/LabelRadio';
import LabelDatepicker from './labelXXX/LabelDatepicker';
import LabelTextarea from './labelXXX/LabelTextarea';
import Select from '../select/Select';
import Check from '../check/Check';
import Radio from '../radio/Radio';
import Datepicker from '../datepicker/Datepicker';
import Textarea from '../textarea/Textarea';

export default {
  title: 'Components/Form',
  component: Form.type,
  decorators: [
    (Story) => (
      <Page>
        <Box style={{ height: '400px' }}>{Story()}</Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof Form>> = (args) => {
  const [selectValue, setSelectValue] = useState('CC');
  const [checkValues, setCheckValues] = useState([]);
  const [radioValue, setRadioValue] = useState('CC');
  const [startDate, setStartDate] = useState(new Date());

  const onChangeSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectValue(e.target.value);
    },
    [],
  );

  const onChangeCheck = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value: codeValue } = e.target;

    setCheckValues((value) =>
      checked
        ? value.concat(codeValue)
        : value.filter((val) => val !== codeValue),
    );
  }, []);

  const onChangeRadio = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  }, []);

  const onChangeDate = useCallback(
    (
      date: Date | null,
      e: SyntheticEvent<any, Event> | undefined,
      name: string | undefined,
    ) => {
      setStartDate(date);
    },
    [],
  );

  const data = [
    { code: 'CC', name: '신용카드' },
    { code: 'AT', name: '계좌이체' },
  ];

  return (
    <Form>
      <Row>
        <Column>
          <Label required>Input입니다.</Label>
          <Field>
            <Input />
          </Field>
        </Column>
        <Column>
          <Label required>Select입니다.</Label>
          <Field>
            <Select data={data} onChange={onChangeSelect} value={selectValue} />
          </Field>
        </Column>
        <Column>
          <Label>Check입니다.</Label>
          <Field>
            <Check
              data={data}
              values={checkValues}
              onChange={onChangeCheck}
              name="checkbox"
            />
          </Field>
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>Input입니다.</Label>
          <Field>
            <Input />
          </Field>
        </Column>
        <Column>
          <Label>Radio입니다.</Label>
          <Field>
            <Radio
              data={data}
              value={radioValue}
              onChange={onChangeRadio}
              name="raidobox"
            />
          </Field>
        </Column>
        <Column>
          <Label>Datepicker입니다.</Label>
          <Field>
            <Datepicker selected={startDate} onChange={onChangeDate} />
          </Field>
        </Column>
      </Row>
      <Row>
        <Column width="66.66%">
          <Label>넓이를 조정할 수 있습니다.</Label>
          <Field>
            <Input placeholder="넓이를 조정할 수 있습니다." />
          </Field>
        </Column>
        <Column width="33.33%">
          <Label>Input입니다</Label>
          <Field>
            <Input />
          </Field>
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>Textarea입니다.</Label>
          <Field>
            <Textarea />
          </Field>
        </Column>
      </Row>
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {};

/**
 * LabelXXX 컴포넌트를 사용해서 위에서 만든 것과 똑같이 렌더링함
 */
export const LabelXXX = () => {
  const [selectValue, setSelectValue] = useState('CC');
  const [checkValues, setCheckValues] = useState([]);
  const [radioValue, setRadioValue] = useState('CC');
  const [startDate, setStartDate] = useState(new Date());

  const onChangeSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectValue(e.target.value);
    },
    [],
  );

  const onChangeCheck = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value: codeValue } = e.target;

    setCheckValues((value) =>
      checked
        ? value.concat(codeValue)
        : value.filter((val) => val !== codeValue),
    );
  }, []);

  const onChangeRadio = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  }, []);

  const onChangeDate = useCallback(
    (
      date: Date | null,
      e: SyntheticEvent<any, Event> | undefined,
      name: string | undefined,
    ) => {
      setStartDate(date);
    },
    [],
  );

  const data = [
    { code: 'CC', name: '신용카드' },
    { code: 'AT', name: '계좌이체' },
  ];

  return (
    <Form>
      <Row>
        <LabelInput required label="Input입니다." />
        <LabelSelect
          required
          label="Select입니다."
          data={data}
          onChange={onChangeSelect}
          value={selectValue}
        />
        <LabelCheck
          label="Check입니다."
          data={data}
          values={checkValues}
          onChange={onChangeCheck}
          name="checkbox"
        />
      </Row>
      <Row>
        <LabelInput label="Input입니다." />
        <LabelRadio
          label="Radio입니다"
          data={data}
          value={radioValue}
          onChange={onChangeRadio}
          name="raidobox"
        />
        <LabelDatepicker
          label="Datepicker입니다."
          selected={startDate}
          onChange={onChangeDate}
        />
      </Row>
      <Row>
        <LabelInput
          label="넓이를 조정할 수 있습니다."
          columnWidth="66.66%"
          placeholder="넓이를 조정할 수 있습니다."
        />
        <LabelInput label="Input입니다." columnWidth="33.33%" />
      </Row>
      <Row>
        <LabelTextarea label="Textarea입니다." />
      </Row>
    </Form>
  );
};
