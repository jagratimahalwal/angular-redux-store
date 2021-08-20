import { INCREMENT, DECREMENT } from '../actions/counter.actions';

const INITIAL_STATE = { value: 0 };

export function CounterReducer(state = INITIAL_STATE, action: any): any {

  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };

    case DECREMENT:
      return { value: state.value - 1 };

    default:
      return state;
  }
}

