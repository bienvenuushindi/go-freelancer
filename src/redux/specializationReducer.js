import BaseUrl from './base_url';
import { loaded, loading } from './loaderReducer';

const GET_SPECIALIZATION = 'GET_SPECIALIZATION';

const initialState = [];

export const fetchSpecialization = (data) => ({
  type: GET_SPECIALIZATION, payload: data,
});

export const getSpecializationAction = () => async (dispatch) => {
  dispatch(loading());
  await fetch(`${BaseUrl}api/v1/specializations`, { headers: { Authorization: localStorage.getItem('token') } })
    .then((res) => res.json()).then((data) => {
      dispatch(fetchSpecialization(data));
      dispatch(loaded());
    });
};
const specializationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIALIZATION:
      return [...action.payload];
    default:
      return state;
  }
};

export default specializationReducer;
