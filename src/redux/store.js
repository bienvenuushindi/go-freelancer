import { configureStore, combineReducers } from '@reduxjs/toolkit';
import freelancersReducer from './freelancersReducer';

const rootReducer = combineReducers({
  freelancers: freelancersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
