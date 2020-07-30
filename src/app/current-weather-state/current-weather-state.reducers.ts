import * as currentWeatherActions from "./current-weather-state.actions";
import { createReducer, on, Action } from "@ngrx/store";
import { CurrentWeatherResponse } from "../interfaces/current-weather-response.interface";

const initialState: CurrentWeatherResponse = {
  coord: null,
  weather: null,
  base: null,
  main: null,
  visibility: 0,
  wind: null,
  clouds: null,
  dt: 0,
  sys: null,
  timezone: 0,
  id: 0,
  name: null,
  cod: 0,
};

const currentWeatherReducer = createReducer(
  initialState,
  on(currentWeatherActions.setCurrentWeather, (state, { currentWeather }) => ({
    ...currentWeather,
  }))
);

export function reducer(
  state: CurrentWeatherResponse | undefined,
  action: Action
) {
  return currentWeatherReducer(state, action);
}
