import { ChangeEvent, useCallback, useReducer } from 'react';

function reducer(
  state: any,
  action: { type: string; name?: string; date?: Date },
) {
  switch (action.type) {
    case 'CHANGE':
      if (action.name) {
        return {
          ...state,
          [action.name]: action.date,
        };
      }
    case 'RESET':
      return Object.keys(state).reduce(
        (acc: { [index: string]: any }, current) => {
          acc[current] = '';
          return acc;
        },
        {},
      );
    default:
      return state;
  }
}

function useChangeDate(initForm: { [index: string]: Date | null }) {
  const [form, dispatch] = useReducer(reducer, initForm);

  /** date Change 함수 */
  const onChange = useCallback(
    (date: Date, e: ChangeEvent<HTMLInputElement>, name: string) => {
      dispatch({ type: 'CHANGE', name, date });
    },
    [],
  );

  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  return [form, onChange, reset];
}

export default useChangeDate;
