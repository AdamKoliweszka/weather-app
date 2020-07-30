import { createSelector, createFeatureSelector } from "@ngrx/store";
import { currentWeatherStateKey } from "./current-weather-state.key";
import { CurrentWeatherResponse } from "../interfaces/current-weather-response.interface";

export const selectCurrentWeatherState = createFeatureSelector<
  CurrentWeatherResponse
>(currentWeatherStateKey);

export const selectTemperature = createSelector(
  selectCurrentWeatherState,
  (state) => (state.main ? state.main.temp : null)
);

export const selectFeelsTemperature = createSelector(
  selectCurrentWeatherState,
  (state) => (state.main ? state.main.feels_like : null)
);

export const selectMinTemperature = createSelector(
  selectCurrentWeatherState,
  (state) => (state.main ? state.main.temp_min : null)
);

export const selectMaxTemperature = createSelector(
  selectCurrentWeatherState,
  (state) => (state.main ? state.main.temp_max : null)
);

export const selectPressure = createSelector(
  selectCurrentWeatherState,
  (state) => (state.main ? state.main.pressure : null)
);

export const selectHumidity = createSelector(
  selectCurrentWeatherState,
  (state) => (state.main ? state.main.humidity : null)
);
