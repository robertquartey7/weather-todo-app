import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lng: null,
  lat: null,
  setLocate: false,
};

const userLocationSlice = createSlice({
  name: "userLocation",
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.lat = payload.lat;
      state.lng = payload.lng;
      state.setLocate = true;
    },
  },
});

export const { setLocation } = userLocationSlice.actions;

export default userLocationSlice.reducer;
