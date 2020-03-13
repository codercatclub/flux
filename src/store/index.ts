import { Action } from 'redux';

interface FooAction extends Action<'FOO'> {
  payload: string;
}

export type FooState = {
  foo: string;
};

const defaultState: FooState = { foo: '' };

const reducer = (state = defaultState, action: FooAction): FooState => {
  switch (action.type) {
    case 'FOO':
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof reducer>;
export default reducer;