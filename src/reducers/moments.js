import initialState from './initialState';
import { RECEIVE_MOMENTS } from '../actions/actionTypes';

const momentsReducer = (state = initialState.moments, action) => {
  switch (action.type) {
    case RECEIVE_MOMENTS:
      return action.moments;
    default:
      return state;
  }
};

export default momentsReducer;
