import { configureStore, combineReducers } from '@reduxjs/toolkit';
import freelancersReducer from './freelancersReducer';
import specializationReducer from './specializationReducer';
import reservationReducer from './reservationReducer';

const rootReducer = combineReducers({
  freelancers: freelancersReducer,
  specializations: specializationReducer,
  reservation: reservationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
