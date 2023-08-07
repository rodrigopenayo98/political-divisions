import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://api.geonames.org/countryInfo?username=rodrigopenayo98';
console.log('------------------slice');
export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response);
    return response.data.geonames;
  } catch (error) {
    console.error('Error en la solicitud API:', error);
    throw new Error(error.message);
  }
});

const initialState = {
  countriesArr: [],
  filteredList: [],
  status: 'idle',
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    updateFoundList: (state, action) => {
      const filteredList = state.countriesArr.filter(
        (country) => country.countryName.toLowerCase().includes(action.payload.toLowerCase()),
      );
      state.filteredList = filteredList;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.countriesArr = action.payload;
      })
      .addCase(getCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export const { updateFoundList } = countriesSlice.actions;
export default countriesSlice.reducer;
