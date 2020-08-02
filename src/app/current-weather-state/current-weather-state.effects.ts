import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs/operators";
import { CurrentWeatherApiService } from "../services/current-weather-api.service";
import {
  loadCurrentWeather,
  setCurrentWeather,
  setIsRefreshing,
} from "./current-weather-state.actions";

@Injectable()
export class CurrentWeatherEffect {
  constructor(
    private action: Actions,
    private currentWeatherApiService: CurrentWeatherApiService
  ) {}

  @Effect()
  loadCurrentWeather$ = this.action.pipe(
    ofType(loadCurrentWeather),
    mergeMap((action) => {
      return this.currentWeatherApiService.getActualWeather().pipe(
        map((value) => {
          return setCurrentWeather({ currentWeather: value });
        })
      );
    })
  );
}
