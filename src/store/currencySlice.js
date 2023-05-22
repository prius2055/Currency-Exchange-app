import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCurrencies = createAsyncThunk('get/currencies', async () => {
  const currencies = await axios.get('https://api.vatcomply.com/currencies');
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
    builder.addCase(getCurrencies.fulfilled, (state, { payload }) => {
      state.loadingCurrencies = false;

      const arrayOfCurrencies = Object.entries(payload);

      const flatArray = arrayOfCurrencies.flatMap(([key, value]) => ({
        ...value,
        currency: key,
        id: nanoid(),
      }));

      state.items = flatArray;
    });
    builder.addCase(getCurrencies.rejected, (state) => {
      state.loadingCurrencies = false;
      state.loadingError = true;
    });
  },
});

export default currencySlice.reducer;
