import { Injectable } from "@angular/core";
import { CurrentWeather } from "../interfaces/current-weather.interface";
import { Store } from "@ngrx/store";
import * as CurrentWeatherSelectors from "../current-weather-state/current-weather-state.selectors";
import * as CurrentWeatherActions from "../current-weather-state/current-weather-state.actions";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CurrentWeatherDataContainerService {
  constructor(private store: Store<CurrentWeather>) {}

  loadCurrentWeather() {
    this.store.dispatch(CurrentWeatherActions.loadCurrentWeather());
  }
  setCurrentWeather(currentWeather: CurrentWeather) {
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
  get cloudiness(): Observable<number> {
    return this.store.select(CurrentWeatherSelectors.selectCloudiness);
  }
  get dataOfCalculation(): Observable<Date> {
    return this.store.select(CurrentWeatherSelectors.selectDataOfCalculation);
  }

  get nameOfCity(): Observable<string> {
    return this.store.select(CurrentWeatherSelectors.selectCityName);
  }

  get iconId(): Observable<string> {
    return this.store.select(CurrentWeatherSelectors.selectIconId);
  }

  get athmosphericPressure(): Observable<number> {
    return this.store.select(
      CurrentWeatherSelectors.selectAthmosphericPressure
    );
  }
}
