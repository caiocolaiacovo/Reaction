import axios from '../config/axios';

const ReactionApi = {
  getMoments: async () => axios.get('moments'),
};

export default ReactionApi;
