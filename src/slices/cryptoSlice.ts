import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cryptoSlice {
  cryptoList: [];
  loading: boolean;
  cryptoDetails: null;
  vsCurrency: string;
  orderBy: string;
  perPage: string;
  page: string;
  priceChangePercentage: string;
}

const initialState: cryptoSlice = {
  cryptoList: [],
  loading: false,
  cryptoDetails: null,
  orderBy: "market_cap_desc",
  perPage: "7",
  page: "1",
  priceChangePercentage: "1h",
  vsCurrency: "usd",
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setPriceChangePercentage: (state, { payload }: PayloadAction<any>) => {
      state.priceChangePercentage = payload;
    },
    setLoading: (state, { payload }: PayloadAction<any>) => {
      state.loading = payload;
    },
    setCryptoList: (state, { payload }: PayloadAction<any>) => {
      state.cryptoList = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPriceChangePercentage, setLoading, setCryptoList } = cryptoSlice.actions;

export default cryptoSlice.reducer;
