import * as currentWeatherActions from "./current-weather-state.actions";
import { createReducer, on, Action } from "@ngrx/store";
import { CurrentWeather } from "../interfaces/current-weather.interface";
import { Clouds } from "../interfaces/clouds.interface";
import { Sys } from "../interfaces/sys.interface";
import { Wind } from "../interfaces/wind.interface";
import { Main } from "../interfaces/main.interface";
import { Weather } from "../interfaces/weather.interface";
import { Coordinate } from "../interfaces/coordinate.interface";

export interface CurrentWeatherState {
  coord: Coordinate;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: Date;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const initialState: CurrentWeatherState = {
  coord: null,
  weather: null,
  base: null,
  main: null,
  visibility: 0,
  wind: null,
  clouds: null,
  dt: null,
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
    dt: new Date(currentWeather.dt * 1000),
  }))
);

export function reducer(
  state: CurrentWeatherState | undefined,
  action: Action
) {
  return currentWeatherReducer(state, action);
}
