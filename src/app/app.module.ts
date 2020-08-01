import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CurrentWeatherPageComponent } from "./current-weather-page/current-weather-page.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { environment } from "src/environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CurrentWeatherStateModule } from "./current-weather-state/current-weather-state.module";
import { CurrentWeatherWidgedComponent } from "./current-weather-widged/current-weather-widged.component";
import { WidgedRefreshButtonComponent } from "./widged-refresh-button/widged-refresh-button.component";
import { WidgedTemperatureComponent } from "./widged-temperature/widged-temperature.component";
import { TemperatureToCelsiusPipe } from "./temperature-to-celsius.pipe";
import { WidgedCalculationInfoComponent } from "./widged-calculation-info/widged-calculation-info.component";
import { WeatherStatusComponent } from "./weather-status/weather-status.component";
import { HumiditiLevelComponent } from "./humiditi-level/humiditi-level.component";
import { CloudinessComponent } from "./cloudiness/cloudiness.component";
import { AthmosphericPressureComponent } from "./athmospheric-pressure/athmospheric-pressure.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherPageComponent,
    CurrentWeatherWidgedComponent,
    WidgedRefreshButtonComponent,
    WidgedTemperatureComponent,
    TemperatureToCelsiusPipe,
    WidgedCalculationInfoComponent,
    WeatherStatusComponent,
    HumiditiLevelComponent,
    CloudinessComponent,
    AthmosphericPressureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CurrentWeatherStateModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
