import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromCurrentWeather from "./current-weather-state.reducers";
import { currentWeatherStateKey } from "./current-weather-state.key";
import { CurrentWeatherEffect } from "./current-weather-state.effects";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(currentWeatherStateKey, fromCurrentWeather.reducer),
    EffectsModule.forFeature([CurrentWeatherEffect]),
  ],
})
export class CurrentWeatherStateModule {}
