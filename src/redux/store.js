import { configureStore, combineReducers } from '@reduxjs/toolkit';
import freelancersReducer from './freelancersReducer';
import specializationReducer from './specializationReducer';

const rootReducer = combineReducers({
  freelancers: freelancersReducer,
  specializations: specializationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
