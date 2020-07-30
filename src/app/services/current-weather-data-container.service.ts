import { Injectable } from "@angular/core";
import { CurrentWeatherResponse } from "../interfaces/current-weather-response.interface";
import { Store } from "@ngrx/store";
import * as CurrentWeatherSelectors from "../current-weather-state/current-weather-state.selectors";
import * as CurrentWeatherActions from "../current-weather-state/current-weather-state.actions";

@Injectable({
  providedIn: "root",
})
export class CurrentWeatherDataContainerService {
  constructor(private store: Store<CurrentWeatherResponse>) {}

  loadCurrentWeather() {
    this.store.dispatch(CurrentWeatherActions.loadCurrentWeather());
  }
  setCurrentWeather(currentWeather: CurrentWeatherResponse) {
    this.store.dispatch(
      CurrentWeatherActions.setCurrentWeather({ currentWeather })
    );
  }
  get temperature() {
    return this.store.select(CurrentWeatherSelectors.selectTemperature);
  }
  get feelsTemperature() {
    return this.store.select(CurrentWeatherSelectors.selectFeelsTemperature);
  }
  get minTemperature() {
    return this.store.select(CurrentWeatherSelectors.selectMinTemperature);
  }
  get maxTemperature() {
    return this.store.select(CurrentWeatherSelectors.selectMaxTemperature);
  }
  get pressure() {
    return this.store.select(CurrentWeatherSelectors.selectPressure);
  }
  get humidity() {
    return this.store.select(CurrentWeatherSelectors.selectHumidity);
  }
}
