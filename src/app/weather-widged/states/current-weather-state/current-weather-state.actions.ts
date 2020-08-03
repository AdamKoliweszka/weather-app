import { createAction, props } from "@ngrx/store";
import { CurrentWeather } from "../../interfaces/current-weather.interface";

export const setCurrentWeather = createAction(
  "[CURRENT_WEATHER] Set current weather",
  props<{ currentWeather: CurrentWeather }>()
);

export const loadCurrentWeather = createAction(
  "[CURRENT_WEATHER] Load current weather"
);

export const setIsRefreshing = createAction(
  "[CURRENT_WEATHER] Set is refreshing flag",
  props<{ isRefreshing: boolean }>()
);
