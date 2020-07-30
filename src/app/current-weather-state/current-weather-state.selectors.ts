import { createSelector, createFeatureSelector } from "@ngrx/store";
import { currentWeatherStateKey } from "./current-weather-state.key";
import { CurrentWeatherResponse } from "../interfaces/current-weather-response.interface";

export const selectCurrentWeatherState = createFeatureSelector<
  CurrentWeatherResponse
>(currentWeatherStateKey);

export const selectTemperature = createSelector(
  selectCurrentWeatherState,
  (state) => state.main.temp
);

export const selectFeelsTemperature = createSelector(
  selectCurrentWeatherState,
  (state) => state.main.feels_like
);

export const selectMinTemperature = createSelector(
  selectCurrentWeatherState,
  (state) => state.main.temp_min
);

export const selectMaxTemperature = createSelector(
  selectCurrentWeatherState,
  (state) => state.main.temp_max
);

export const selectPressure = createSelector(
  selectCurrentWeatherState,
  (state) => state.main.pressure
);

export const selectHumidity = createSelector(
  selectCurrentWeatherState,
  (state) => state.main.humidity
);
