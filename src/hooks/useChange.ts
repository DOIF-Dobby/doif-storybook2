import { ChangeEvent, useCallback, useReducer } from 'react';

function reducer(
  state: any,
  action: { type: string; name?: string; value?: string }
) {
  switch (action.type) {
    case 'CHANGE':
      if (action.name) {
        return {
          ...state,
          [action.name]: action.value,
        };
      }
    case 'RESET':
      return Object.keys(state).reduce(
        (acc: { [index: string]: any }, current) => {
          acc[current] = '';
          return acc;
        },
        {}
      );
    default:
      return state;
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
    []
  );

  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  return [form, onChange, reset];
}

export default useChange;
