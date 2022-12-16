import BaseUrl from './base_url';

const REQUEST_RESERVATION = 'REQUEST_RESERVATION';

const initialState = [];

export const requestReservation = (data) => ({
  type: REQUEST_RESERVATION, payload: data,
});

export const requestReservationAction = (params) => async (dispatch) => {
  await fetch(`${BaseUrl}api/v1/reservations`, params)
    .then((res) => res.json())
    .then((data) => {
      dispatch(requestReservation(data));
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RESERVATION:
      return action.payload;
    default:
      return state;
  }
};

export default reservationReducer;
