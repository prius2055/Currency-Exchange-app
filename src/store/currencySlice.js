import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCurrencies = createAsyncThunk('get/currencies', async () => {
  const currencies = await axios.get('https://api.vatcomply.com/currencies');
  return currencies.data;
});

export const getSingleCurrency = createAsyncThunk(
  'get/singleCurrency',
  async (baseCurrency) => {
    const currencies = await axios.get(
      `https://api.vatcomply.com/rates?base=${baseCurrency}`
    );
    return currencies.data;
  }
);

const initialState = {
  items: [],
  info: {},
  loadingCurrencies: false,
  loadingError: undefined,
};

const currencySlice = createSlice({
  name: 'curreny',
  initialState,
  reducers: {
    filterCurrency: (state, { payload }) => {
      const filteredArray = state.items.filter((item) => item.name === payload);

      state.items = filteredArray;
    },
  },
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

    builder.addCase(getSingleCurrency.pending, (state) => {
      state.loadingCurrencies = true;
      state.loadingError = false;
    });
    builder.addCase(getSingleCurrency.fulfilled, (state, { payload }) => {
      const infoObj = { date: payload.date, base: payload.base };
      const flatArrayOfCurrencies = Object.entries(payload.rates).flatMap(
        ([key, value]) => ({
          name: key,
          rate: value,
        })
      );

      state.items = flatArrayOfCurrencies;
      state.info = infoObj;
      state.loadingCurrencies = false;
      state.loadingError = false;
    });
    builder.addCase(getSingleCurrency.rejected, (state) => {
      state.loadingError = true;
      state.loadingCurrencies = false;
    });
  },
});

export default currencySlice.reducer;

export const { filterCurrency } = currencySlice.actions;
