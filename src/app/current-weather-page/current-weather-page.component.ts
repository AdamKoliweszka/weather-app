import { Component, OnInit } from "@angular/core";
import { CurrentWeatherApiService } from "../services/current-weather-api.service";

@Component({
  selector: "app-current-weather-page",
  templateUrl: "./current-weather-page.component.html",
  styleUrls: ["./current-weather-page.component.sass"],
})
export class CurrentWeatherPageComponent implements OnInit {
  currentWeather;
  constructor(private currentWeatherApiService: CurrentWeatherApiService) {}

  ngOnInit() {}

  refreshWeather() {
    this.currentWeatherApiService
      .getActualWeather()
      .subscribe((value) => (this.currentWeather = value));
  }
}
