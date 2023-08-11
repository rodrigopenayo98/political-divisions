import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import StatusType from '../../components/StatusTypes';

const API_URL = 'https://secure.geonames.org/countryInfoJSON?username=rodrigopenayo98';
export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data.geonames;
    } catch (error) {
      console.error('Error en la solicitud API:', error);
      throw new Error(error.message);
    }
  },
);

const initialState = {
  countriesArr: [],
  filteredList: [],
  searchString: '',
  status: StatusType.LOADING,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    updateFoundList: (state, action) => {
      state.searchString = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = StatusType.FULFILLED;
        state.countriesArr = action.payload;
      })
      .addCase(getCountries.pending, (state) => {
        state.status = StatusType.LOADING;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = StatusType.ERROR;
        state.error = action.error.message;
      });
  },
});

export const { updateFoundList } = countriesSlice.actions;
export default countriesSlice.reducer;
