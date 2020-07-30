import { Coordinate } from "./coordinate.interface";
import { Weather } from "./weather.interface";
import { Main } from "./main.interface";
import { Wind } from "./wind.interface";
import { Clouds } from "./clouds.interface";
import { Sys } from "./sys.interface";

export interface CurrentWeatherResponse {
  coord: Coordinate;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
