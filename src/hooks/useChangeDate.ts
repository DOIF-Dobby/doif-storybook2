import { ChangeEvent, useCallback, useReducer } from 'react';

function reducer(
  state: any,
  action: { type: string; name?: string; date?: Date; replaceState?: any },
) {
  switch (action.type) {
    case 'CHANGE':
      if (action.name) {
        return {
          ...state,
          [action.name]: action.date,
        };
      }
    case 'REPLACE':
      return action.replaceState;
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

  /** state를 통째로 바꾸는 함수 */
  const onReplace = useCallback((replaceState: any) => {
    dispatch({ type: 'REPLACE', replaceState });
  }, []);

  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  return [form, onChange, onReplace, reset];
}

export default useChangeDate;
