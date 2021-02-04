import React, { forwardRef, SyntheticEvent } from 'react';
import ReactDatePicker, {
  registerLocale,
  ReactDatePickerProps,
} from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { getMonth, getYear } from 'date-fns';
import { StyledDatepicker, CustomHeader } from './Datepicker.style';
import Input from '../input/Input';
import Icon from '../icon/Icon';
import Button from '../button/Button';

import 'react-datepicker/dist/react-datepicker.min.css';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface DatepickerProps extends ReactDatePickerProps {
  /** datepicker의 넓이를 설정합니다. */
  width: number | string;
  /** datepicker의 색상을 설정합니다. */
  color: DoifColorType;
  /**
   * onChange 함수의 첫번째 parameter는 `Date` 형식
   * */
  onChange: (
    date: Date | null,
    event: SyntheticEvent<any> | undefined,
    name?: string,
  ) => void;
}

registerLocale('ko', ko);

/**
 * `Datepicker` 컴포넌트는 날짜 혹은 시간을 선택할 때 사용합니다.
 * https://reactdatepicker.com/ 더 자세한 사용법은 여기를 참조하세요
 */
const Datepicker = (props: DatepickerProps) => {
  const nameOnChange = (
    date: Date | null,
    event: SyntheticEvent<HTMLInputElement> | undefined,
  ) => {
    props.onChange(date, event, props.name);
  };

  const dateFormat = props.dateFormat
    ? props.dateFormat
    : props.showMonthYearPicker
    ? 'yyyy-MM'
    : props.showTimeInput || props.showTimeSelect
    ? props.showTimeSelectOnly
      ? 'HH:mm'
      : 'yyyy-MM-dd HH:mm'
    : 'yyyy-MM-dd';

  return (
    <StyledDatepicker width={props.width} color={props.color}>
      <ReactDatePicker
        {...props}
        onChange={nameOnChange}
        dateFormat={dateFormat}
        locale={props.locale ? props.locale : 'ko'}
        customInput={props.customInput ? props.customInput : <DefaultInput />}
        className="custom-date-picker"
        calendarClassName="custom-calendar"
        wrapperClassName="custom-wrapper"
        timeClassName={(time) => 'custom-time-style'}
        renderCustomHeader={({
          date,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          decreaseMonth,
          increaseMonth,
          prevYearButtonDisabled,
          nextYearButtonDisabled,
          increaseYear,
          decreaseYear,
        }) => (
          <CustomHeader width={props.width} color={props.color}>
            <Button
              variant="ghost"
              color={props.color}
              size="small"
              onClick={props.showMonthYearPicker ? decreaseYear : decreaseMonth}
              disabled={
                props.showMonthYearPicker
                  ? prevYearButtonDisabled
                  : prevMonthButtonDisabled
              }
              iconOnly
              style={{ borderRadius: '1rem', width: '2rem', height: '2rem' }}
            >
              <Icon icon="leftArrow" color={props.color} />
            </Button>

            <div className="month-day">
              {props.showMonthYearPicker
                ? getYear(date)
                : `${getYear(date)}.${getMonth(date) + 1} `}
            </div>

            <Button
              variant="ghost"
              color={props.color}
              size="small"
              onClick={props.showMonthYearPicker ? increaseYear : increaseMonth}
              disabled={
                props.showMonthYearPicker
                  ? nextYearButtonDisabled
                  : nextMonthButtonDisabled
              }
              iconOnly
              style={{ borderRadius: '1rem', width: '2rem', height: '2rem' }}
            >
              <Icon icon="rightArrow" color={props.color} />
            </Button>
          </CustomHeader>
        )}
      />
    </StyledDatepicker>
  );
};

Datepicker.defaultProps = {
  width: '100%',
  color: 'primary',
};

const DefaultInput = forwardRef((props, ref) => (
  <Input {...props} autoComplete="off" backIcon={<Icon icon="calendar" />} />
));

export default React.memo(Datepicker);
