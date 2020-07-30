import { createAction, props } from "@ngrx/store";
import { CurrentWeatherResponse } from "../interfaces/current-weather-response.interface";

export const setCurrentWeather = createAction(
  "[CURRENT_WEATHER] Set current weather",
  props<{ currentWeather: CurrentWeatherResponse }>()
);

export const loadCurrentWeather = createAction(
  "[CURRENT_WEATHER] Load current weather"
);
