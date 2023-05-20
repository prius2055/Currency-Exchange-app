import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCurrencies = createAsyncThunk('get/currencies', async () => {
  const currencies = await axios.get(
    'https://api.vatcomply.com/currencies HTTP/1.1'
);
  return currencies.data;
});

const initialState = {
  items: [],
  loadingCurrencies: false,
  loadingError: undefined,
};

const currencySlice = createSlice({
  name: 'curreny',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCurrencies.pending, (state) => {
      state.loadingCurrencies = true;
    });
    builder.addCase(getCurrencies.fulfilled, (state, action) => {
      state.items = action.payload;
      console.log(action.payload);
    });
  },
});

export default currencySlice.reducer;
