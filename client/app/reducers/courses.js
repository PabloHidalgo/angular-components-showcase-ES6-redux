import * as actions from '../actions/action-types.js';

const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case actions.LOAD_COURSES:
      return payload;
    default:
      return state;
  }
}
