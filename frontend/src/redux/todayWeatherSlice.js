import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherData: null
};

const todayWeatherSlice = createSlice({
  name: "userLocation",
  initialState,
  reducers: {
    setCurrentWeather: (state, { payload }) => {
        console.log("payload".payload)
     state.weatherData = payload.weatherData
    },
  },
});

export const { setCurrentWeather } = todayWeatherSlice.actions;

export default todayWeatherSlice.reducer;
