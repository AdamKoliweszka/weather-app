import { Injectable } from "@angular/core";
import { CurrentWeatherResponse } from "../interfaces/current-weather-response.interface";
import { Store } from "@ngrx/store";
import * as CurrentWeatherSelectors from "../current-weather-state/current-weather-state.selectors";
import * as CurrentWeatherActions from "../current-weather-state/current-weather-state.actions";
import { Observable } from "rxjs";

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
  get temperature(): Observable<number> {
    return this.store.select(CurrentWeatherSelectors.selectTemperature);
  }
  get feelsTemperature(): Observable<number> {
    return this.store.select(CurrentWeatherSelectors.selectFeelsTemperature);
  }
  get minTemperature(): Observable<number> {
    return this.store.select(CurrentWeatherSelectors.selectMinTemperature);
  }
  get maxTemperature(): Observable<number> {
    return this.store.select(CurrentWeatherSelectors.selectMaxTemperature);
  }
  get pressure(): Observable<number> {
    return this.store.select(CurrentWeatherSelectors.selectPressure);
  }
  get humidity(): Observable<number> {
    return this.store.select(CurrentWeatherSelectors.selectHumidity);
  }
}
