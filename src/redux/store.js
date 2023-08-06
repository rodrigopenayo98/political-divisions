import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    coins: countriesReducer,
  },
});

export default store;
