import { RECEIVE_MOMENTS } from './actionTypes';
import ReactionApi from '../services/reactionApi';

const receiveMoments = moments => ({
  type: RECEIVE_MOMENTS,
  moments,
});

const getMoments = () => async (dispatch) => {
  const response = await ReactionApi.getMoments();
  dispatch(receiveMoments(response.data));
};

export default getMoments;
