import { RECEIVE_MOMENTS } from './actionTypes';
import axios from '../config/axios';

const receiveMoments = moments => ({
  type: RECEIVE_MOMENTS,
  moments,
});

// Action creators
const getMoments = () => async (dispatch) => {
  const data = await axios.get('moments');
  dispatch(receiveMoments(data));
};

export default getMoments;
