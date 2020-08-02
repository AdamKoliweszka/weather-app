import { createSelector, createFeatureSelector } from "@ngrx/store";
import { currentWeatherStateKey } from "./current-weather-state.key";
import { CurrentWeatherState } from "./current-weather-state.reducers";

export const selectCurrentWeatherState = createFeatureSelector<
  CurrentWeatherState
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
export const selectCloudiness = createSelector(
  selectCurrentWeatherState,
  (state) => (state.clouds ? state.clouds.all : null)
);

export const selectDataOfCalculation = createSelector(
  selectCurrentWeatherState,
  (state) => state.dt
);

export const selectCityName = createSelector(
  selectCurrentWeatherState,
  (state) => state.name
);

export const selectIconId = createSelector(selectCurrentWeatherState, (state) =>
  state.weather && state.weather.length > 0 ? state.weather[0].icon : null
);

export const selectAthmosphericPressure = createSelector(
  selectCurrentWeatherState,
  (state) => (state.main ? state.main.pressure : null)
);

export const selectIsRefreshing = createSelector(
  selectCurrentWeatherState,
  (state) => state.isRefreshing
);
