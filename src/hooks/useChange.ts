import { ChangeEvent, useCallback, useReducer } from 'react';

function reducer(
  state: any,
  action: {
    type: string;
    name?: string;
    value?: string;
    replaceState?: any;
    initForm?: any;
  },
) {
  switch (action.type) {
    case 'CHANGE':
      if (action.name) {
        return {
          ...state,
          [action.name]: action.value,
        };
      }
    case 'REPLACE':
      return action.replaceState;
    case 'RESET':
      return action.initForm;
    default:
      return state;
    case 'EMPTY':
      return Object.keys(state).reduce(
        (acc: { [index: string]: any }, current) => {
          acc[current] = '';
          return acc;
        },
        {},
      );
  }
}

function useChange(initForm: { [index: string]: string }) {
  const [form, dispatch] = useReducer(reducer, initForm);

  /** input, selectbox, radiobox Change 함수 */
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      dispatch({ type: 'CHANGE', name, value });
    },
    [],
  );

  /** state를 통째로 바꾸는 함수 */
  const onReplace = useCallback((replaceState: any) => {
    dispatch({ type: 'REPLACE', replaceState });
  }, []);

  const empty = useCallback(() => dispatch({ type: 'EMPTY' }), []);
  const reset = useCallback(() => dispatch({ type: 'RESET', initForm }), []);

  return [form, onChange, onReplace, reset, empty];
}

export default useChange;
