import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Cambiamos la URL de la API a la que proporcionaste para países
const API_URL = 'https://rawcdn.githack.com/kamikazechaser/administrative-divisions-db/master/api';

// Creamos una acción asíncrona para obtener los datos de países
export const getCountries = createAsyncThunk('countries/getCountries', async (countryCode) => {
  try {
    const response = await axios.get(`${API_URL}/${countryCode}.json`);
    return response.data; // Retorna los datos del país
  } catch (error) {
    throw new Error(error.message); // Lanza un error si ocurre algún problema
  }
});

// Definimos el estado inicial para el slice de países
const initialState = {
  countriesArr: [],
  filteredList: [],
  status: 'idle',
  error: null,
};

// Creamos el slice de países con sus reducers y extraReducers
const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    updateFoundList: (state, action) => {
      const filteredList = state.countriesArr.filter((country) => (
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      ));
      state.filteredList = filteredList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.countriesArr = action.payload; // Actualiza la lista de países con los datos obtenidos
      })
      .addCase(getCountries.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

// Exportamos las acciones y el reducer de países
export const { updateFoundList } = countriesSlice.actions;
export default countriesSlice.reducer;
