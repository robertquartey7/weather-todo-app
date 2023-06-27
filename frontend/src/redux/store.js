import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import currentLocationSlice from "./currentLocationSlice";
import todayWeatherSlice from "./todayWeatherSlice";
import thunk from "redux-thunk";
export const store = configureStore(
  {
    reducer: {
      userLocation: currentLocationSlice,
      todayWeatherSlice: todayWeatherSlice,
    },
  },
  applyMiddleware(thunk)
);
