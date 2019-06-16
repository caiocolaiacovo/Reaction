import initialState from './initialState';
import { GET_MOMENTS } from '../actions/actionTypes';

const momentsReducer = (state = initialState.moments, action) => {
  switch (action.type) {
    case GET_MOMENTS:
      return { ...action.moments };
    default:
      return state;
  }
};

export default momentsReducer;
