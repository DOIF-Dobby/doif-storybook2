import styled, { css } from 'styled-components';
import { DoifColorType } from '../../styles/themes/DoifThemeProps';

interface StyledDatepickerContainerProps {
  width: number | string;
  color: DoifColorType;
}

export const StyledDatepicker = styled.div<StyledDatepickerContainerProps>`
  & {
    width: ${(props) => props.width};
    min-width: 8rem;
  }

  & input:not(.search-input) {
    color: transparent;
    text-shadow: 0 0 0 ${(props) => props.theme.subColors.text};

    &:focus {
      outline: none;
    }
  }

  /** wrapper class */
  & .custom-wrapper {
    display: block;

    .react-datepicker__input-container {
      & > div {
        width: 100%;
      }
    }
  }

  .react-datepicker-popper {
    z-index: 100;
  }

  & .custom-calendar {
    border: none;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);

    /** picker 열면 보이는 삼각형  */
    .react-datepicker__triangle {
      border-bottom-color: ${(props) => props.theme.subColors.content};
      left: 3rem !important;

      /** 삼각형 border */
      &::before {
        border-bottom-color: rgba(100, 100, 100, 0.2);
        filter: blur(2px);
      }
    }

    .react-datepicker__day-names {
      background-color: ${(props) => props.theme.subColors.content};

      .react-datepicker__day-name {
        color: ${(props) => props.theme.mainColors[props.color].base};
        font-weight: 600;
      }

      /** 일요일 */
      .react-datepicker__day-name:first-of-type {
        color: #fa5252;
      }
    }

    /** 헤더 */
    .react-datepicker__header {
      border-bottom: none;
    }

    /** 커스텀 헤더 */
    .react-datepicker__header--custom {
      background-color: ${(props) => props.theme.subColors.content};
    }

    /** 안에 날짜들 */
    .react-datepicker__week {
      /** hover 시 */
      & > div:hover {
        background-color: ${(props) =>
          props.theme.mainColors[props.color].light};
      }

      .react-datepicker__day {
        color: ${(props) => props.theme.mainColors[props.color].base};
      }

      /** 일요일 빨간색 (선택된 날짜 빼고, 선택 못하는 날짜 뺴고) */
      .react-datepicker__day--weekend:first-of-type:not(.react-datepicker__day--selected):not(.react-datepicker__day--disabled) {
        color: #fa5252;
      }

      /** 선택 된 날 */
      .react-datepicker__day--selected {
        background-color: ${(props) =>
          props.theme.mainColors[props.color].base};
        color: ${(props) => props.theme.subColors.content};

        &:hover {
          background-color: ${(props) =>
            props.theme.mainColors[props.color].base};
        }
      }

      /** picker 달 이동시 선택된 날짜와 같은 날 */
      .react-datepicker__day--keyboard-selected {
        background-color: ${(props) => props.theme.subColors.content};
      }

      /** 선택불가능한 날짜 */
      .react-datepicker__day--disabled {
        color: ${(props) => props.theme.subColors.disabled};

        &:hover {
          background-color: ${(props) => props.theme.subColors.content};
        }
      }

      /** today */
      .react-datepicker__day--today:not(.react-datepicker__day--selected) {
        color: #339af0;
      }
    }

    /** Month Picker */
    .react-datepicker__month {
      margin: 0;
      padding: 0.4rem;
    }

    .react-datepicker__month-container {
      & .react-datepicker__month {
        background-color: ${(props) => props.theme.subColors.content};
      }

      & .react-datepicker__day--outside-month {
        opacity: 0.5;
      }
    }

    .react-datepicker__month-wrapper {
      & > div {
        height: 2rem;
        line-height: 2rem;
        color: ${(props) => props.theme.mainColors[props.color].base};

        /** hover 시 */
        &:hover {
          background-color: ${(props) =>
            props.theme.mainColors[props.color].light};
        }
      }

      /** picker 달 이동시 선택된 날짜와 같은 날 */
      .react-datepicker__month-text--keyboard-selected {
        background-color: ${(props) => props.theme.subColors.content};
        color: ${(props) => props.theme.mainColors[props.color].base};
      }

      /** 선택된 날 */
      .react-datepicker__month--selected {
        background-color: ${(props) =>
          props.theme.mainColors[props.color].base};
        color: ${(props) => props.theme.subColors.content};

        &:hover {
          background-color: ${(props) =>
            props.theme.mainColors[props.color].base};
        }
      }

      /** 선택불가능한 날 */
      .react-datepicker__month--disabled {
        color: ${(props) => props.theme.subColors.disabled};

        &:hover {
          background-color: ${(props) => props.theme.subColors.content};
        }
      }
    }

    /** time */
    .react-datepicker__header {
      background-color: ${(props) => props.theme.subColors.content};
    }

    .react-datepicker__time-list {
      display: flex;
      flex-direction: column;

      li.react-datepicker__time-list-item {
        padding: 0.5rem;
      }

      li.react-datepicker__time-list-item--selected {
        background-color: ${(props) =>
          props.theme.mainColors[props.color].base} !important;
      }

      ::-webkit-scrollbar {
        width: 6px;
      }

      ::-webkit-scrollbar-track {
        background-color: transparent;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: ${(props) =>
          props.theme.mainColors[props.color].base};
      }

      ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
      }
    }

    &.react-datepicker--time-only {
      /* width: 12rem; */

      .react-datepicker-time__input {
        width: 7rem;
      }

      .custom-time-style {
      }
    }
  }
`;

export const CustomHeader = styled.div<StyledDatepickerContainerProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.mainColors[props.color].base};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  & > div.month-day {
    font-size: 1rem;
    font-weight: 600;
  }
`;
