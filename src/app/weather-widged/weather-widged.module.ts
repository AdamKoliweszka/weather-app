import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsWeatherComponent } from "./components/details-weather/details-weather.component";
import { WeatherStatusComponent } from "./components/weather-status/weather-status.component";
import { WidgedCalculationInfoComponent } from "./components/widged-calculation-info/widged-calculation-info.component";
import { WidgedRefreshButtonComponent } from "./components/widged-refresh-button/widged-refresh-button.component";
import { WidgedTemperatureComponent } from "./components/widged-temperature/widged-temperature.component";
import { CurrentWeatherStateModule } from "./states/current-weather-state/current-weather-state.module";
import { DateToTimeOfDayPipe } from "./pipes/date-to-time-of-day/date-to-time-of-day.pipe";
import { TemperatureToCelsiusPipe } from "./pipes/temperature-to-celsius/temperature-to-celsius.pipe";
import { CurrentWeatherWidgedComponent } from "./components/current-weather-widged/current-weather-widged.component";

@NgModule({
  declarations: [
    DetailsWeatherComponent,
    WeatherStatusComponent,
    WidgedCalculationInfoComponent,
    WidgedRefreshButtonComponent,
    WidgedTemperatureComponent,
    DateToTimeOfDayPipe,
    TemperatureToCelsiusPipe,
    CurrentWeatherWidgedComponent,
  ],
  imports: [CommonModule, CurrentWeatherStateModule],
  exports: [CurrentWeatherWidgedComponent],
  providers: [DateToTimeOfDayPipe, TemperatureToCelsiusPipe],
})
export class WeatherWidgedModule {}
