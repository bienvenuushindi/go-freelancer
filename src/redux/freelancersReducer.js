import axios from 'axios';
import BaseUrl from './base_url';

const GET_FREELANCERS = 'GET_FREELANCERS';

const initialState = [];

export const fetchFreelancers = (data) => ({
  type: GET_FREELANCERS, payload: data,
});

export const getFreelancersAction = () => async (dispatch) => {
  await axios.get(`${BaseUrl}api/v1/freelancers`)
    .then((res) => {
      dispatch(fetchFreelancers(res.data));
    });
};

const freelancersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FREELANCERS:
      return [...action.payload];

    default:
      return state;
  }
};

export default freelancersReducer;
