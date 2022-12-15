import axios from 'axios';
import BaseUrl from './base_url';

const GET_FREELANCERS = 'GET_FREELANCERS';
const GET_FREELANCER = 'GET_FREELANCER';

const initialState = [];

export const fetchFreelancers = (data) => ({
  type: GET_FREELANCERS, payload: data,
});

export const fetchFreelancer = (data) => ({
  type: GET_FREELANCER, payload: data,
});
export const getFreelancersAction = () => async (dispatch) => {
  await axios.get(`${BaseUrl}api/v1/freelancers`, { headers: { Authorization: localStorage.getItem('token') } })
    .then((res) => {
      dispatch(fetchFreelancers(res.data));
    });
};

export const getFreelancerAction = (id) => async (dispatch) => {
  await axios.get(`${BaseUrl}api/v1/freelancers/${id}`, { headers: { Authorization: localStorage.getItem('token') } })
    .then((res) => {
      dispatch(fetchFreelancer(res.data));
    });
};

const freelancersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FREELANCERS:
      return [...action.payload];
    case GET_FREELANCER:
      return action.payload;
    default:
      return state;
  }
};

export default freelancersReducer;
