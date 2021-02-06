import React, {
  ChangeEvent,
  ComponentProps,
  forwardRef,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Story } from '@storybook/react/types-6-0';
import Datepicker from './Datepicker';
import Container from '../container/Container';
import Page from '../common/Page';
import Box from '../common/Box';
import Input from '../input/Input';
import Icon from '../icon/Icon';
import { setHours, setMinutes, addMonths, startOfMonth, endOfMonth} from 'date-fns';

export default {
  title: 'Components/Datepicker',
  component: Datepicker.type,
  decorators: [
    (Story) => (
      <Page>
        <Box>
          <div style={{ height: '300px' }}>{Story()}</div>
        </Box>
      </Page>
    ),
  ],
};

const Template: Story<ComponentProps<typeof Datepicker>> = (args) => {
  const [startDate, setStartDate] = useState(new Date());

  const onChange = useCallback(
    (
      date: Date | null,
      e: SyntheticEvent<any, Event> | undefined,
      name: string | undefined,
    ) => {
      setStartDate(date);
    },
    [],
  );

  return <Datepicker {...args} selected={startDate} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
  width: '100%',
  color: 'primary',
};

/**
 * Custom Input
 */
export const customInputDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  const onChange = useCallback((date) => {
    setStartDate(date);
  }, []);

  const CustomInputDatePicker = forwardRef((props, ref) => {
    const CustomInput = forwardRef((props, ref) => (
      <Input
        {...props}
        variant="underline"
        placeholder="Custom Input"
        backIcon={<Icon icon="heart" />}
      />
    ));

    return (
      <Datepicker
        {...props}
        selected={startDate}
        onChange={onChange}
        customInput={<CustomInput />}
      />
    );
  });

  return <CustomInputDatePicker />;
};

/**
 * Range Date
 */
export const rangeDatePicker = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const { startDate, endDate } = dates;

  /** datepicker Change 함수 */
  const onChangeDate = useCallback(
    (date: Date, e: SyntheticEvent<any, Event>, name: string) => {
      setDates((dates) => ({
        ...dates,
        [name]: date,
      }));
    },
    [],
  );

  return (
    <Container>
      <Datepicker
        selected={startDate}
        onChange={onChangeDate}
        maxDate={endDate}
        name="startDate"
      />
      <Datepicker
        selected={endDate}
        onChange={onChangeDate}
        minDate={startDate}
        name="endDate"
      />
    </Container>
  );
};

/**
 * Month Picker
 */
export const monthPicker = () => {
  const [months, setMonths] = useState({
    month: new Date(),
  });

  const { month } = months;

  /** datepicker Change 함수 */
  const onChangeDate = useCallback(
    (
      date: Date | null,
      e: SyntheticEvent<any, Event> | undefined,
      name: string | undefined,
    ) => {
      setMonths((dates) => ({
        ...dates,
        [name]: date,
      }));
    },
    [],
  );

  return (
    <Datepicker
      selected={month}
      onChange={onChangeDate}
      name="month"
      width="30%"
      showMonthYearPicker
    />
  );
};

/**
 * Range Month Picker
 */
export const rangeMonthPicker = () => {
  const [months, setMonths] = useState({
    startMonth: new Date(),
    endMonth: addMonths(new Date(), 1),
  });

  const { startMonth, endMonth } = months;

  /** datepicker Change 함수 */
  const onChangeDate = useCallback(
    (
      date: Date | null,
      e: SyntheticEvent<any, Event> | undefined,
      name: string | undefined,
    ) => {
      setMonths((dates) => ({
        ...dates,
        [name]: date,
      }));
    },
    [],
  );

  return (
    <Container>
      <Datepicker
        selected={startMonth}
        onChange={onChangeDate}
        name="startMonth"
        showMonthYearPicker
        maxDate={endMonth ? endOfMonth(endMonth) : endMonth}
      />
      <Datepicker
        selected={endMonth}
        onChange={onChangeDate}
        name="endMonth"
        showMonthYearPicker
        minDate={startMonth ? startOfMonth(startMonth) : startMonth}
      />
    </Container>
  );
};

/**
 * Time Picker
 */
export const timePicker = () => {
  const [times, setTimes] = useState({
    time: new Date(),
  });

  const { time } = times;

  /** datepicker Change 함수 */
  const onChangeDate = useCallback(
    (
      date: Date | null,
      e: SyntheticEvent<any, Event> | undefined,
      name: string | undefined,
    ) => {
      setTimes((dates) => ({
        ...dates,
        [name]: date,
      }));
    },
    [],
  );

  return (
    <Datepicker
      selected={time}
      onChange={onChangeDate}
      name="time"
      width="30%"
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={5}
      injectTimes={[setHours(setMinutes(new Date(), 59), 23)]}
    />
  );
};

/**
 * DateTime Picker
 */
export const dateTimePicker = () => {
  const [dates, setDates] = useState({
    date: new Date(),
  });

  const { date } = dates;

  /** datepicker Change 함수 */
  const onChangeDate = useCallback(
    (
      date: Date | null,
      e: SyntheticEvent<any, Event> | undefined,
      name: string | undefined,
    ) => {
      setDates((dates) => ({
        ...dates,
        [name]: date,
      }));
    },
    [],
  );

  return (
    <Datepicker
      selected={date}
      onChange={onChangeDate}
      name="date"
      width="30%"
      showTimeSelect
    />
  );
};

export const Disable = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
  });

  const { startDate } = dates;

  /** datepicker Change 함수 */
  const onChangeDate = useCallback(
    (
      date: Date | null,
      e: SyntheticEvent<any, Event> | undefined,
      name: string | undefined,
    ) => {
      setDates((dates) => ({
        ...dates,
        [name]: date,
      }));
    },
    [],
  );

  return (
    <Datepicker
      selected={startDate}
      onChange={onChangeDate}
      name="startDate"
      width="30%"
      disabled
    />
  );
};

export const readOnly = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
  });

  const { startDate } = dates;

  /** datepicker Change 함수 */
  const onChangeDate = useCallback(
    (
      date: Date | null,
      e: SyntheticEvent<any, Event> | undefined,
      name: string | undefined,
    ) => {
      setDates((dates) => ({
        ...dates,
        [name]: date,
      }));
    },
    [],
  );

  return (
    <Datepicker
      selected={startDate}
      onChange={onChangeDate}
      name="startDate"
      width="30%"
      readOnly
    />
  );
};
