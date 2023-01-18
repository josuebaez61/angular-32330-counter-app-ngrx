import { createReducer, on } from '@ngrx/store';
import { decrease, increment, reset } from './counter.actions';
import produce from 'immer';

export interface CounterState {
  value: number;
}


const initialState: CounterState = {
  value: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (oldState) => {
    // const stateCopy = { ...oldState };
    // stateCopy.value += 1;
    // return {
    //   ...oldState,
    //   value: oldState + 1,
    // };
    const newState = produce(oldState, (draft) => {
      draft.value += 1;
    })
    return newState;
  }),
  on(decrease, (oldState) => {
    if (oldState.value < 1) return oldState
    return {
      ...oldState,
      value: oldState.value - 1
    }
  }),
  on(reset, () => initialState)
);
