import { createSlice } from "@reduxjs/toolkit";

const TrendingSlice = createSlice({
  name: "trendingSongs",
  initialState: {
    trendingSongs: [],
  },
  reducers: {
    setTrendingSongs: (state, action) => {
      state.trendingSongs = action.payload;
    },
  },
});

export const { setTrendingSongs } = TrendingSlice.actions;
export default TrendingSlice;
