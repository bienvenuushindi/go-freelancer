import { configureStore, combineReducers } from '@reduxjs/toolkit';
import freelancersReducer from './freelancersReducer';
import specializationReducer from './specializationReducer';
import reservationReducer from './reservationReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  freelancers: freelancersReducer,
  specializations: specializationReducer,
  reservations: reservationReducer,
  loading: loaderReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
